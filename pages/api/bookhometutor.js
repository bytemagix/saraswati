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
        console.log(body);

        const teacherId = body.teacherId;
        const bookingId = "b"+(new Date().getTime());

		const db = admin.database();
		db.ref("hometutor").child("bookings").child(teacherId).child(bookingId).set({
			bookingId : bookingId,
            teacherId : teacherId,
            courseName : body.courseName,
            studentName : body.studentName,
            mobileNo : body.mobileNo,
            emailId : body.email,
            city : body.city,
            address : body.address
		});

		// do stuff with files and body
		res.status(HttpStatus.OK).json({name : 'OK'});
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
	}
});

export default handler;