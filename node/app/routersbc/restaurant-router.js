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
const logger = log4j.getLogger('Restaurant-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const restaurantController = require('../controllers/restaurant-controller');

var myParser = require("body-parser");

wlogger.info("***Execute restaurant-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */
router.use(myParser.urlencoded({
    extended: true
}));
router.post('/restaurantInfo', restaurantController.postrestaurantInfo);
router.put('/restaurantInfo', restaurantController.putrestaurantInfo);
router.get('/restaurantInfo', restaurantController.getallrestaurants);
router.get('/restaurantAllInfo', restaurantController.getallMongorestaurants);
router.get('/restaurantInfo/:restaurant_id', restaurantController.getrestaurantInfo);
router.delete('/restaurantInfo/:restaurant_id', restaurantController.deleterestaurant);


module.exports = router;