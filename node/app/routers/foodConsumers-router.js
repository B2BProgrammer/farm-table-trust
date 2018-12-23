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
const logger = log4j.getLogger('foodConsumers-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const foodConsumersController = require('../controllers/foodConsumers-controller');

var myParser = require("body-parser");

wlogger.info("***Execute foodConsumers-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */
router.use(myParser.urlencoded({
    extended: true
}));

// Routes for Lifecycle of food consumers (Eg : restaurants/family-food-shoppers)
// router.post('/foodConsumersInfo', foodConsumersController.postfoodConsumersInfo);
// router.put('/foodConsumersInfo', foodConsumersController.updatefoodConsumersInfo);
// router.get('/foodConsumersAllInfo', foodConsumersController.getallfoodConsumers);
// router.post('/foodConsumersInfo/:foodConsumers_id', foodConsumersController.foodConsumersInfoById);
// router.delete('/foodConsumersInfo/:foodConsumers_id', foodConsumersController.deletefoodConsumersById);


module.exports = router;