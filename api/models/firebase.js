require('dotenv').config()

const admin = require("firebase-admin");

const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);

//console.log(serviceAccount)

const credentials = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = credentials;