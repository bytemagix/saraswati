import HttpStatus from "http-status-codes";
import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";
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
};

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const files = req.files;
    const body = req.body;

    const courseId = body.courseId;
    const userId = "U"+(new Date().getTime());

    const db = admin.database();
    db.ref("onlineclass").child("enrollments").child(courseId).child(userId).set({
      courseId: courseId,
      courseTitle: body.courseTitle,
      courseTutor: body.courseTutor,
      courseDescription : body.courseDescription,
      name : body.name,
      mobileNo : body.mobileNo,
      emailId : body.email
    });

    // do stuff with files and body
    res.status(HttpStatus.OK).json({ name: "OK" });
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
});

export default handler;