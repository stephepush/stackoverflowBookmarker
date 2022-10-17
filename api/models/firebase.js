let admin = require("firebase-admin");
//const firebase = require('firebase-admin');
//const  { AppCheck } = require('firebase-admin/app-check');

//dotenv.config()

//const admin = require("firebase-admin");

//const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);

//console.log(serviceAccount)

export const credentials = admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT_FILEPATH),
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'

});


//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

//module.exports = credentials;