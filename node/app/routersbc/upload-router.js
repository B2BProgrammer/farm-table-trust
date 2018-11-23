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
const logger = log4j.getLogger('UpLoad-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const userController = require('../controllers/upload-controller');


wlogger.info("***Execute upload-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */

router.post('/unstructureddata',userController.unstructureddata);

module.exports = router;