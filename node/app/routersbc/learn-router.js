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
const logger = log4j.getLogger('learn-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
//const learnController = require('../controllers/learn-controller');

wlogger.info("***Execute learn-router***");


/**
 * Below Routes are for understanding purpose
 */
router.get('/', (req, res) => {
    res.send('Hello world from Express Router');
    console.log(req.sessionID)
});


router.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

router.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

router.get('/test/:id', function (req, res, next) {
    res.render('test', {
        output: req.params.id
    })
})

module.exports = router;