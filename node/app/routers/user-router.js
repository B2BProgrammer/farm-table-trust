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
const logger = log4j.getLogger('User-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const userController = require('../controllers/user-controller');

const myParser = require("body-parser");

wlogger.info("***Execute todo-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */

 /**
  * 
  * POST : used to create a resource in server (CREATE)
  * GET : get the resource from server (READ)
  * PUT : create or update a resource, Idempotent, means no new resource created, best for [UPDATE]
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
  * / 
  * 
  */
router.use(myParser.urlencoded({extended : true}));
router.post('/login',userController.login);
router.post('/registerusers',userController.login);
router.post('/changepassword',userController.login);
router.post('/forgotpassword',userController.login);

router.post('/users',userController.login);
router.post('/expiringusers',userController.login);
router.post('/revokingusers',userController.login);

/* router.post('/login',function(request, response) {
    console.log(request.body); //This prints the JSON document received (if it is a JSON document)
 });
 */

module.exports = router;