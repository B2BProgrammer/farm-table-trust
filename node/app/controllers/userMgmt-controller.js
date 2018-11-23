var log4js = require('log4js');
var logger = log4js.getLogger('USER-API');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');
var joi = require('joi');

var constants = require("../../constants.js");
var config = require('../config/config.js');
var dbutil = require('../services/dao/db-util');



/**
 * /login : implementation logic
 * URL : /login
 * METHOD : POST 
 *
 * - supplied password is hashed
 * - jwt token generated for successful login & sent as response to login + 200[Status]
 * - Unsucessful login responded with custom Error message + 401[Status]
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.login = async function(req, res){
};


module.exports.getlogin = async function(req, res){
};

module.exports.registerUsers = async function(req, res){

};

module.exports.registerUsers = async function(req, res){

};

module.exports.registerUsers = async function(req, res){

};

module.exports.registerUsers = async function(req, res){

};

module.exports.changePassword = async function(req, res){

};

module.exports.forgotPassword = async function(req, res){

};

module.exports.users = async function(req, res){

};


module.exports.expiringUsers = async function(req, res){

};

module.exports.revokingUsers = async function(req, res){

};

module.exports.logout = async function(req, res){

};


