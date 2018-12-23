'use strict'

/**
 * 1. Logging : Winston Module Library + Log4j
 */
var log4js = require('log4js');
var logger = log4js.getLogger('FOOD-CONSUMERS-API');
const wlogger = require('../config/winston');

/**
 * 2. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
var dbutil = require('../services/dao/mongo-db-util');
