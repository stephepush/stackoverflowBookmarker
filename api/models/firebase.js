require('dotenv').config()


const admin = require("firebase-admin");

const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);

//console.log(serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});