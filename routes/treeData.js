/**
 * treeData.js
 * Sends tree data from MySQL server to client.
 * Based on dbms.js from HW5.
 * Currently non-functional
 * 
 * Author: Dylan Kramis
 * Version: 2/13/2022
 */

// setting up express
const express = require('express');
const router = express.Router();

// TODO set up mysql connection, based on HW5
/*
var mysql = require('mysql'),
    async = require('async');


// TODO database info
var host = "35.247.66.188";
var database = "TREEINFO";
var user = "root";
var password = "OregonOak73!";
*/

// upon post request, retrieve data from mySQL database and send in json form
router.post('*', function (req, res, next) {
  // TODO work out sql implememtation

  // dummy response for testing purposes
  res.json(dummyData);
});

// browser display (test only)
router.get('*', function (req, res, next) {
  res.json(data);
});

module.exports =  router;