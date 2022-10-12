//import dotenv from "dotenv"
import { initializeApp, App } from 'firebase-admin/app';
import { AppCheck } from 'firebase-admin/app-check';

//dotenv.config()

//const admin = require("firebase-admin");

const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);

//console.log(serviceAccount)

const credentials = initializeApp({
  serviceAccount
  //credential: admin.credential.cert(serviceAccount),
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'

});


//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

module.exports = credentials;