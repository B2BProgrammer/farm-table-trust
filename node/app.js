'use strict';

/**
 * Logging : Winston Module Library + Log4j
 */
//const config = require('config');
const log4j = require('log4js');
const logger = log4j.getLogger('Farm-Table-Trust');
const wlogger = require('./app/config/winston');


/**
 * HTTP Protocol communication to node-app
 * Misc modules imported
 */
const config = require('config');
const http = require('http');
const host = process.env.HOST || config.get('host');
const port = process.env.PORT || config.get('port');
const uuid = require('uuid/v4');

const bodyparser = require('body-parser');

/**
 * Database : No SQL(MongoDB) - Connection Verification
 * a. MongoClient
 * b. Mongoose Module Library
 */
// Using mongoose for DB connection verification
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/farm-table-trust-db');
let dbconnection = mongoose.connection;

//check the connection
dbconnection.once('open', function () {
  wlogger.info('connected to mongoDB');
});


/**
 * 5. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const constants = require('./constants.js');


/*
 * 1. REST Ready Application : Express Module Libraries
 */
const express = require('express');
const subpath = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');
const audit = require('express-requests-logger');
const FileStore = require('session-file-store')(session);


const app = express(); // Initialze the App [ App is the Express Object]

const swagger = require('swagger-node-express').createNew(subpath);


const middleware = require('./app/middleware/auth');
// Configuration Setting of app - Express Object
middleware.setExpress(app);

// add & configure middleware
/* app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
 */









wlogger.info("*** Start the Node Application : App ***");

/**
 * 6. Access all the Express routes from app.js
 */

const userapi = require('./app/routers/user-router');
app.use(userapi);

const produceapi = require('./app/routers/produce-router');
app.use(produceapi);

const poapi = require('./app/routers/po-router');
app.use(poapi);

const consumerapi = require('./app/routers/consumer-router');
app.use(consumerapi);

const docs_handler = express.static(__dirname + '/app/public/dist');
swagger.setAppHandler(app);


/**
 * 7. Create the http Server from core-Node module, Listening at PORT 3000
 */
http.createServer(app).listen(port, function () {
  wlogger.info('****************** SERVER STARTED ************************');
  wlogger.info('**************  http://' + host + ':' + port + '******************');
  // webSocketService.initialize(server);
});