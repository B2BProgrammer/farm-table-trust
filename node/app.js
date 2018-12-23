'use strict'

/**
 * 1. Logging : Winston Module Library + Log4j
 */
let log4j = require('log4js')
let logger = log4j.getLogger('FARM-TABLE-TRUST-application')
let wlogger = require('./app/config/winston')

/**
 * 2. HTTP Protocol communication to node-app
 * Misc modules imported
 */
let config = require('config');
let http = require('http');
let host = config.get('host');
let port = config.get('port');
let uuid = require('uuid/v4');

let bodyparser = require('body-parser');


/**
 * 3. Database : No SQL(MongoDB) - Connection Verification
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



/*
 * 4. REST Ready Application : Express Module Libraries
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


wlogger.info("*** Start the FARM-TABLE-TRUST Application : App ***");


/**
 * 5. Access all the Express routes from app.js
 */
const userManagmentapi = require('./app/routers/userManagment-router');
app.use(userManagmentapi);

const foodProducersapi = require('./app/routers/foodProducers-router')
app.use(foodProducersapi)

const distributorsapi = require('./app/routers/distributors-router')
app.use(distributorsapi)

const foodConsumersapi = require('./app/routers/foodConsumers-router')
app.use(foodConsumersapi)


const docs_handler = express.static(__dirname + '/app/public/dist');
swagger.setAppHandler(app);


/**
 * 6. Create the http Server from core-Node module, Listening at PORT 3000
 */
http.createServer(app).listen(port, function () {
    wlogger.info('****************** SERVER STARTED ************************');
    wlogger.info('**************  http://' + host + ':' + port + '******************');
    // webSocketService.initialize(server);
  });