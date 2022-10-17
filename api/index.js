import dotenv from "dotenv"
import express from "express"
//const { initializeApp } = require('firebase-admin/app');




dotenv.config()

//const admin = require("firebase-admin");

const serviceAccount = require(process.env.SERVICE_ACCOUNT_FILEPATH);


//const analytics = getAnalytics(app);

const bookmarkRoutes = require('./routes/bookmarks')
const firebaseTestRoutes = require('./routes/fireBaseAuthTestRoutes')



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(bookmarkRoutes)
app.use(firebaseTestRoutes)

app.listen(8080);