require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const connectDB = require('./database/config');

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APY_KEY_FIREBASE,
  authDomain: process.env.DOMAIN_FIREBASE,
  projectId: process.env.PROJECT_ID_FIREBASE,
  storageBucket: process.env.STORAGE_BUCKET_FIREBASE,
  messagingSenderId: process.env.MESAGIN_SENDER_ID_FIREBASE,
  appId: process.env.APP_ID_FIREBASE,
  measurementId: process.env.MEASUREMENT_ID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

const app = express();

const cors = require('cors');
const checkToken = require('./middelware/checkToken');
const whiteList = [process.env.URL_FRONTEND];
const corsOptions = {
  origin : function (origin, cb) {
    if(whiteList.includes(origin)){
      cb(null, true)
    }else{
      cb(new Error('Error de Cors'))
    }
  }
}

connectDB();
app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())

var apiAuth = require('./routes/auth')
var apiUsers = require('./routes/users')
var apiProject = require('./routes/project')
var apiTask = require('./routes/task')


  /* RUTAS */
app
  .use('/api/auth', apiAuth)
  .use('/api/users', apiUsers)
  .use('/api/projects', checkToken, apiProject)
  .use('/api/tasks', checkToken, apiTask)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    ok : false,
    msg : err.message ? err.message : 'Upss, hubo un error!'
  })
});

module.exports = app;