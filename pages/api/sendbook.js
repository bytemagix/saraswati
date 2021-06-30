import HttpStatus from "http-status-codes";
import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";
const admin = require("firebase-admin");
const serviceAccount = require("../../firebaseConfig/saraswati-45e10-firebase-adminsdk-y7dv3-f974d616c5.json");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "newebclients@gmail.com",
    pass: "developer@123",
  },
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://saraswati-45e10-default-rtdb.firebaseio.com",
    storageBucket: "saraswati-45e10.appspot.com",
  });
}

const sendMail = (data, email,bookIds) => {

  let links = "";
  bookIds.forEach(item => {
    links = links.concat(data[item].bookInfo.title, "\n",data[item].ebook.imageUrl, "\n \n");  
  });
  
  console.log(links)

  const mailOptions = {
    from: "newebclients@gmail.com",
    to: email,
    subject: "Book Order on Saraswati Tutorials",
    text: `Download the ordered book from the following link \n\n ${links}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("MAil is sent");
    }
  });
};

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

    console.log(body);

    const bookIds = JSON.parse(body.bookIds);

    const db = admin.database();
    const ref = db.ref(`books`);

    ref.on('value',(snapshot) => {
        console.log(snapshot.val());
        sendMail(snapshot.val(), body.email,bookIds);
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );

    /* */

    // do stuff with files and body
    res.status(HttpStatus.OK).json({ name: "OK" });
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
});

export default handler;
