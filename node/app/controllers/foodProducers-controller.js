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

var dbutil = require('../services/dao/mongo-db-util');
var mongoosedbutil = require('../services/dao/mongo-mongoose-db-util');
var food = require('../models/food.schema')
var foodProducer = require('../models/foodProducer.schema')

///////////////////////////////////////////////////////////////////////////////////////////////////
///   1.FOOD PRODUCERS
//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Controller method : Post the food Producers Data to :
 * 1. MongoDB (OffChain)
 * 2. Ledger
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.postfoodProducersInfo = async function (req, res) {
  wlogger.info("*** Execute produce-controller : postfoodProducersInfo function ***");
  let isAllStepSuccess = false;

  try {
    //1. Validation of req.body with Mongoose Schema
    let producepayload = req.body;
    let persistData = new foodProducer(producepayload);

    //2. Persist the data in Off-Chain(MongoDB)
    if (mongoosedbutil.dbPersist(persistData)) {
      wlogger.info("Persist into MongoDB - Success");
      isAllStepSuccess = true
    }

    //3. Persist in OnChain (Ledger)
    // ??

  } catch (err) {
    wlogger.error("Failed in persisting Information into MongoDB", err);
    isAllStepSuccess = false
  }
  //4. Send Response to API
  return (isAllStepSuccess ? res.status(200).send("SUCCESS") : res.status(500).send("Failed to Persist"));
};



/**
 * Controller method : Get the food Producers Data from :
 * 1. MongoDB (OffChain) * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllfoodProducers = async function(req, res) {
  wlogger.info("*** Execute produce-controller : getAllfoodProducers function  ")
  let isAllStepSuccess = false;
  let responseData 

  try {
     responseData = await mongoosedbutil.dbgetAll(foodProducer)    
     wlogger.info("Documents pulled from MongoDB", responseData);
     isAllStepSuccess = true     
  } catch (error) {
    wlogger.error("Error in getting the food producers data",err)
    isAllStepSuccess = false
  }
  //4. Send Response to API
  return (isAllStepSuccess ? res.status(200).send(responseData) : res.status(500).send("Failed to Persist"));
}


/**
 * Controller method : Get the specific food Producers Data from :
 * 1. MongoDB (OffChain) * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getfoodProducersById = async function(req, res) {
  wlogger.info("*** Execute produce-controller : getAllfoodProducers function  ")
  let isAllStepSuccess = false;
  let id = req.params.foodProducers_id;

  try {
    let responseData = await mongoosedbutil.dbgetById(foodProducer, id)    
    wlogger.info("Documents pulled from MongoDB", responseData);
    isAllStepSuccess = true     
 } catch (error) {
   wlogger.error("Error in getting the food producers data",err)
   isAllStepSuccess = false
 }
 //4. Send Response to API
 return (isAllStepSuccess ? res.status(200).send(responseData) : res.status(500).send("Failed to Persist"));

  
}



///////////////////////////////////////////////////////////////////////////////////////////////////
///   2.FOOD 
//////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.postfoodInfo = async function (req, res) {
  wlogger.info("*** Execute produce-controller : postfoodInfo function ***");
  let isAllStepSuccess = false;
  
  try {
    //1. Validation of req.body with Mongoose Schema
    var foodpayload = req.body;
    var persistData = new food(foodpayload);


     //2. Persist the data in Off-Chain(MongoDB)
     if (mongoosedbutil.dbPersist(persistData)) {
      wlogger.info("Persist into MongoDB - Success");
      isAllStepSuccess = true
    }

    //3. Persist in OnChain (Ledger)
    // ??
  } catch (err) {
    wlogger.error("Failed in persisting Information into MongoDB", err);
    isAllStepSuccess = false
  }

  //4. Send Response to API
  return (isAllStepSuccess ? res.status(200).send("SUCCESS Foood") : res.status(500).send("Failed to Persist"));
};



/**
 * Controller method : Get the food Data from :
 * 1. MongoDB (OffChain) * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllfoodInfo = async function(req, res) {
  wlogger.info("*** Execute produce-controller : getAllfoodInfo function  ")
  let isAllStepSuccess = false;

  try {
     let responseData = await mongoosedbutil.dbgetAll(food)    
     wlogger.info("Documents pulled from MongoDB", responseData);
     isAllStepSuccess = true     
  } catch (error) {
    wlogger.error("Error in getting the food producers data",err)
    isAllStepSuccess = false
  }
  //4. Send Response to API
  return (isAllStepSuccess ? res.status(200).send(responseData) : res.status(500).send("Failed to Persist"));
}