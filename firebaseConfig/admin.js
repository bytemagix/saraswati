const admin = require("firebase-admin");
const serviceAccount = require("./saraswati-45e10-firebase-adminsdk-y7dv3-f974d616c5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://saraswati-45e10-default-rtdb.firebaseio.com",
  });

export default admin;
