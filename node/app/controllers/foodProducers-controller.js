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


module.exports.postfoodProducersInfo = async function(req, res){
};

module.exports.updatefoodProducersInfo = async function(req, res){

};

module.exports.getAllfoodProducers = async function(req, res){
};

module.exports.foodProducersById = async function(req, res){
};

module.exports.deletefoodProducersById = async function(req, res){
};

module.exports.postfoodInfo = async function(req, res){
};

module.exports.updatefoodInfo = async function(req, res){
};

module.exports.foodInfoById = async function(req, res){
};

module.exports.deletefoodInfoById = async function(req, res){
};




