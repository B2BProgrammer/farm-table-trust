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
const logger = log4j.getLogger('foodProducers-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const foodProducersController = require('../controllers/foodProducers-controller');

var myParser = require("body-parser");

wlogger.info("***Execute foodProducers-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */
router.use(myParser.urlencoded({
    extended: true
}));
// Routes for Lifecycle of food Producer (Eg : agriculturist/poultry/farm)
router.post('/foodProducersInfo', foodProducersController.postfoodProducersInfo);
router.put('/foodProducersInfo', foodProducersController.updatefoodProducersInfo);
router.get('/foodProducersInfo', foodProducersController.getAllfoodProducers);
router.post('/foodProducersInfo/:foodProducers_id', foodProducersController.foodProducersById);
router.delete('/foodProducersInfo/:foodProducers_id', foodProducersController.deletefoodProducersById);

// Routes for Lifecycle of food (Eg : produce/vegetables/meat/poultry)
router.post('/foodInfo', foodProducersController.postfoodInfo);
router.put('/foodInfo', foodProducersController.updatefoodInfo);
router.get('/foodInfo', foodProducersController.getfoodInfo);
router.post('/foodInfo/:foodInfo_id', foodProducersController.foodInfoById);
router.delete('/foodInfo/:foodInfo_id', foodProducersController.deletefoodInfoById);

module.exports = router;