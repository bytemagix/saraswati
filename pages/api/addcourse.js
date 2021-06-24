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

        console.log(body);

        const courseId = "c"+(new Date().getTime());
        const teacherId = body.teacherId;

		const db = admin.database();
		db.ref("teachers").child('courses').child(teacherId).child(courseId).set({
			courseId : courseId,
			title : body.title,
            subject : body.subject,
            std : body.std,
            price : body.price
		});

		// do stuff with files and body
		res.status(HttpStatus.OK).json({name : 'OK'});
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
	}
});

export default handler;