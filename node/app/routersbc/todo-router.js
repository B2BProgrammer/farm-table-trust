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
const logger = log4j.getLogger('To-Do-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const todoController = require('../controllers/todo-controller');


wlogger.info("***Execute todo-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */

router.post('/todo', todoController.todo);
router.get('/todo/:todoId', todoController.getTodoId);
router.delete('/todo/:todoId', todoController.deleteTodoId);

module.exports = router;