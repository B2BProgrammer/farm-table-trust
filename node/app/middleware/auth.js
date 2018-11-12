'use strict'

var passport = require('passport');
const bodyparser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var path = require('path')
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');
const audit = require('express-requests-logger');
const express = require('express');
var session = require('express-session');
var flash = require('connect-flash');

module.exports.setExpress = function (app) {

    // View Engine
    app.set('views', path.join(__dirname, 'views'));
    app.engine('handlebars', exphbs({
        defaultLayout: 'layout'
    }));
    app.set('view engine', 'handlebars');


    //Body Parser Middleware
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({
        extended: true
    }))
    app.use(cookieParser());


    // Set Static Folder (StyleSheet - public avaialble documents)
    app.use(express.static(path.join(__dirname, 'public')));


    // Express - middleware Session
    app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    }));


    // Passport init
    app.use(passport.initialize());
    app.use(passport.session());

    // Express Validator
    app.use(expressValidator({
        errorFormatter: function (param, msg, value) {
            var namespace = param.split('.'),
                root = namespace.shift(),
                formParam = root;

            while (namespace.length) {
                formParam += '[' + namespace.shift() + ']';
            }
            return {
                param: formParam,
                msg: msg,
                value: value
            };
        }
    }));


    // Connect Flash
    app.use(flash());

    // Set the Global Variables for the Application - Req & res 
    app.use(function (req, res, next) {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        res.locals.user = req.user || null;
        next();
    });




}