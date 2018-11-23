'use strict'

/**
 * 1. Logging : Winston Module Library + Log4j
 */
var log4js = require('log4js');
var logger = log4js.getLogger('RESTURANT-API');
const wlogger = require('../config/winston');

/**
 * 2. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
var constants = require("../../constants.js");
var config = require('../config/config.js');
var dbutil = require('../services/dao/db-util');
var restaurant = require('../models/restaurants.schema')


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.postrestaurantInfo = async function (req, res) {
  wlogger.info("*** Execute restaurant-controller : postrestaurantInfo function ***");


  try {
    //1. Validation of req.body with Mongoose Schema
    var restaurantpayload = req.body;
    var persistData = new restaurant(restaurantpayload);

    //2.Validated data saved to MongoDB
    persistData.save(function (err) {
      if (err) {
        wlogger.error("Malformed Input", err);
        return res.status(401).send(err);
      } else {
        wlogger.info("Restaurant Data Saved to MongoDB");
        return res.status(200).send("SUCCESS");
      }
    });
  } catch (err) {
    wlogger.error("Malformed Input", err);
    errorMsg.detail = "Malformed Input";
    return res.status(401).send(errorMsg)
  }
};



/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.putrestaurantInfo = async function (req, res) {
  console.log("*** Execute restaurant-controller : putrestaurantInfo function ***");

  //1. Validation of req.body [External Payload]

  //2. Persisting the data to MongoDB
};


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getrestaurantInfo = async function (req, res) {
  wlogger.info("*** Execute restaurant-controller : getrestaurantInfo function ***");

  // 1. Get the restaurant_id from the req params
  var restId = req.params.restaurant_id;

  try {
    //2.  get specific restuarant
    restaurant.find({
      restaurant_id: restId
    }, function (err, restaurants) {
      if (err) {
        wlogger.error("Malformed Input", err);
        return res.status(401).send(err);
      } else {
        wlogger.info("Restaurant Data pull from MongoDB");
        return res.status(200).send(restaurants);
      }
    });
  } catch (err) {
    wlogger.error("Malformed Input", err);
    errorMsg.detail = "Malformed Input";
    return res.status(401).send(errorMsg)
  }
};


/**
 * Pull All the restaurant information from MongoDB - using moongose
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getallrestaurants = async function (req, res) {
  wlogger.info("*** Execute restaurant-controller : getAllrestaurantInfo function ***");

  try {
    // get all the restaurants
    restaurant.find({}, function (err, restaurants) {
      if (err) {
        wlogger.error("Malformed Input", err);
        return res.status(401).send(err);
      } else {
        wlogger.info("Restaurant Data pull from MongoDB");
        return res.status(200).send(restaurants);
      }
    });
  } catch (err) {
    wlogger.error("Malformed Input", err);
    errorMsg.detail = "Malformed Input";
    return res.status(401).send(errorMsg)
  }
};






/**
 * Pull All the restaurant information from MongoDB - using mongoClient/Default Mongo
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getallMongorestaurants = async function (req, res) {
  wlogger.info("*** Execute restaurant-controller : getallMongorestaurants function ***");

    // 1. Get the todoId from the req params
    var todoId = req.params.todoId;

    //2. use todoId to get the description from mongoDB
    try {
        const dbName = 'boot-node-db';
        const collectionName = "restaurants";
        var qJSON = {};
        //qJSON.todoId = todoId;

        var dbres = await dbutil.dbRead(dbName, collectionName, qJSON);
        console.log(dbres);

        let response = {
            "todoId": todoId,
            // "description" : description
        };
        return res.status(200).send(JSON.stringify(response));
    } catch (error) {
        wlogger.error("Not found", error);
        errorMsg.detail = "Not found";
        return res.status(404).send(errorMsg)
    }
};






/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.deleterestaurant = async function (req, res) {
  wlogger.info("*** Execute restaurant-controller : deleterestaurant function ***");

  // 1. Get the restaurant_id from the req params
  var restId = req.params.restaurant_id;

  try {
    //2.  get specific restuarant
    restaurant.find({
      restaurant_id: restId
    }, function (err, restaurants) {
      if (err) {
        wlogger.error("Malformed Input", err);
        return res.status(401).send(err);
      } else {
        restaurant.remove({
          restaurant_id: restId
        }, function (err) {
          if (err) {
            throw err;
          } else {
            wlogger.info("Restaurant Data deleted from MongoDB");
            return res.status(200).send(restaurants);
          }
        });
      }
    });
  } catch (err) {
    wlogger.error("Malformed Input", err);
    errorMsg.detail = "Malformed Input";
    return res.status(401).send(errorMsg)
  }
};