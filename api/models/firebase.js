import dotenv from "dotenv"
import { admin} from 'firebase-admin';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

dotenv.config()

const admin = require("firebase-admin");

const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);

//console.log(serviceAccount)

const credentials = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'

});

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

module.exports = credentials, analytics;