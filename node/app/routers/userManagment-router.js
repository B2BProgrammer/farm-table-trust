'use strict'


/*
 * 1. REST Ready Application : Express Module Libraries
 */
const express = require('express');
const router = express.Router();

/**
 * 2. Logging : Winston Module Library + Log4j
 */
const log4j = require('log4js');
const logger = log4j.getLogger('userMgmt-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const userMgmtController = require('../controllers/userMgmt-controller');

const myParser = require("body-parser");

wlogger.info("***Execute userMgmt-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 *
* POST : used to create a resource in server (CREATE)
* GET : get the resource from server (READ)
* PUT : create or update a resource, Idempotent, means no new resource created, best for [UPDATE]
 
POST - best for filters,queries ??
* 
* 
* /login : POST
* 
* C (POST) - send data to API server 
* /registerusers  : PUT
* /changepassword : POST
* /updatepassword : POST
* /forgotpassword : POST
* 
* R (GET) / PUT : Multiple Read of same resource
* /user : POST
* /validateuser : POST
* /users : GET
* 
* U : POST
* /updateuser
* 
* D
* /expiringusers : GET
* /revokingusers : POST
  * 
  */

router.use(myParser.urlencoded({extended : true}));
router.post('/login',userMgmtController.login);
router.get('/login',userMgmtController.getlogin);
router.post('/registerusers',userMgmtController.registerUsers);
router.post('/changepassword',userMgmtController.changePassword);
router.post('/forgotpassword',userMgmtController.forgotPassword);

router.post('/users',userMgmtController.users);
router.post('/expiringusers',userMgmtController.expiringUsers);
router.post('/revokingusers',userMgmtController.revokingUsers);
router.post('/logout', userMgmtController.logout);

module.exports = router;