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
const logger = log4j.getLogger('distributors-router');
const wlogger = require('../config/winston');

/**
 * 3. Importing custom built Libraries/Functions/Constants/Configurations
 *  from within scope of project
 */
const distributorsController = require('../controllers/distributors-controller');

var myParser = require("body-parser");

wlogger.info("***Execute distributors-router***");

/**
 * List of -> HTTP Methods + Routes + Controller functions
 */
router.use(myParser.urlencoded({
    extended: true
}));

// Routes for Lifecycle of food distributor (Eg : retailers/negotiators/middleman/grocery-suppliers)
// router.post('/distributorsInfo', distributorsController.postdistributorsInfo);
// router.put('/distributorsInfo', distributorsController.updatedistributorsInfo);
// router.get('/distributorsAllInfo', distributorsController.getalldistributors);
// router.post('/distributorsInfo/:distributors_id', distributorsController.distributorsInfoById);
// router.delete('/distributorsInfo/:distributors_id', distributorsController.deletedistributorsById);

// // Routes for commerce activites performed involving food distributor 
// // -----------(food distributor  --> food-producers)----------------
// //1. PO LEVEL
// router.post('/purchaseorder', distributorsController.postpurchaseorder);
// router.put('/updatepurchaseorder/:po_id', distributorsController.updatepurchaseorderById);
// router.get('/purchaseorderAllInfo', distributorsController.getallpurchaseorders);
// router.get('/purchaseorder/:po_id', distributorsController.getpurchaseorderById);



// // Routes for commerce activites performed involving food distributor 
// // -----------(food-producers -->  food distributor)------------------


// //1. INVOICE LEVEL
// router.post('/invoice', distributorsController.postinvoice);
// router.put('/invoice/:in_id', distributorsController.updateinvoiceById);
// router.get('/invoice', distributorsController.getallinvoices);
// router.get('/invoice/:in_id', distributorsController.getinvoiceById);



// // Routes for commerce activites performed involving food distributor 
// // -----------(food-consumers -->  food distributor)------------------
// //1. SALES ORDER LEVEL
// router.post('/salesorder', distributorsController.postsalesorder);
// router.put('/salesorder/:so_id', distributorsController.updatesalesorderById);
// router.get('/salesorder', distributorsController.getallsalesorder);
// router.get('/salesorder/:so_id', distributorsController.getsalesorderById);


// //2. RETURN ORDER LEVEL
// router.post('/returnorder', distributorsController.postreturnorder);
// router.put('/returnorder/:ro_id', distributorsController.updatereturnorderById);
// router.get('/returnorder', distributorsController.getallreturnorder);
// router.get('/returnorder/:so_id', distributorsController.getreturnorderById);








module.exports = router;