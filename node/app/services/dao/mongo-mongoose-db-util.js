'use strict'
const wlogger = require('../../../app/config/winston');

/***
 * Utility JavaScript File : 
 * 1. Relevant all the activites for mongoDB using moongose
 * 
 */

 
/**
 * DB Utility 
 * Functionality : Persist the document into to MongoDB collection
 * 
 * @param persistInstance
 */
module.exports.dbPersist = async function (persistInstance) {
    try {    
    persistInstance.save(function (err) {
        if(!err){
          wlogger.info("Data saved sucessfully into MongoDB")
          return true
        } else {
          wlogger.error("Error while persisting document",err)
          return false;
        }
      });
    } catch (err) {
      wlogger.error("Error while persisting document",err)
      return false;
    }
}


/**
 * DB Utility
 * 
 * Mongo utility : Get all the documents in collection/model 
 * @param modelName
 */
module.exports.dbgetAll = async function(modelName){
  wlogger.info("*** Execute dbgetAll function ***");
  try { 
    return new Promise(function(resolve, reject){
        modelName.find({}, function(err, docs){
          if(!err){
            wlogger.info("Success", docs);
            resolve(docs)
          } else {
            wlogger.error("Error",err);
            reject(err)
          }
        })

    });
  } catch (err) {
    wlogger.info("Error while retrieving documents from collection", modelName)
    return false
  }  
}



/**
 * DB Utility
 * 
 * Mongo utility : Get document according to "id" in collection/model 
 * @param modelName
 */
module.exports.dbgetById = async function(modelName, id){
  wlogger.info("*** Execute dbgetAll function ***");
  try { 
    return new Promise(function(resolve, reject){
        modelName.findById(id, function(err, doc){
          if(!err){
            wlogger.info("Success", doc);
            resolve(doc)
          } else {
            wlogger.error("Error",err);
            reject(err)
          }
        })

    });
  } catch (err) {
    wlogger.info("Error while retrieving documents from collection", modelName)
    return false
  }  
}