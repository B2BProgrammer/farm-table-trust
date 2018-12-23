'use strict'

/**
 * 1. Logging : Winston Module Library + Log4j
 */
var log4js = require('log4js');
var logger = log4js.getLogger('DISTRIBUTORS-API');
const wlogger = require('../config/winston');

/**
 * 2. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
var dbutil = require('../services/dao/mongo-db-util');




/* 
module.exports.postdistributorsInfo = async function(req, res){

}

module.exports.updatedistributorsInfo = async function(req, res){
    
}

module.exports.getalldistributors = async function(req, res){
    
}

module.exports.distributorsInfoById = async function(req, res){
    
}

module.exports.deletedistributorsById = async function(req, res){
    
}


module.exports.postdistributorsInfo = async function(req, res){

}

module.exports.updatedistributorsInfo = async function(req, res){
    
}

module.exports.getalldistributors = async function(req, res){
    
}

module.exports.distributorsInfoById = async function(req, res){
    
}

module.exports.deletedistributorsById = async function(req, res){
    
}



module.exports.postpurchaseorder = async function(req, res){

}

module.exports.updatepurchaseorderById = async function(req, res){
    
}

module.exports.getallpurchaseorders = async function(req, res){
    
}

module.exports.getpurchaseorderById = async function(req, res){
    
}

module.exports.deletedistributorsById = async function(req, res){
    
}
 */