import HttpStatus from 'http-status-codes'
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';
const admin = require("firebase-admin");
const serviceAccount = require("../../firebaseConfig/saraswati-45e10-firebase-adminsdk-y7dv3-f974d616c5.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://saraswati-45e10-default-rtdb.firebaseio.com",
    storageBucket: "saraswati-45e10.appspot.com",
  });
}


export const config = {
    api: {
      bodyParser: false,
    },
  }

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		const files = req.files
		const body = req.body

        //console.log(files);
       // console.log(body);

		
		 const bucket = admin.storage().bucket();
		const response = await bucket.upload(files.file.path, {
		  predefinedAcl: "publicRead",
		  contentType : files.file.type
		});

		const imageUrl = response[0].metadata.mediaLink;
		console.log(imageUrl);

		const bookId = "book"+(new Date().getTime());

		const db = admin.database();
		db.ref("books").child(bookId).child("bookInfo").set({
			bookId : bookId,
			title : body.title,
			subId : body.subId,
			subject : body.subject,
			author : body.author,
			price : body.price,
			description : body.description,
			imageUrl : imageUrl
		});

		// do stuff with files and body
		res.status(HttpStatus.OK).json({name : 'OK', bookId : bookId});
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
	}
});

export default handler;