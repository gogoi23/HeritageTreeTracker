var express = require('express');
var router = express.Router();

// installed dbms_promise.js using async
const sql = require('./dbms_promise.js');

router.post('/', async function (req, res, next) {
    // get the requested tree
    var treeStr = req.body.month;

    // sql query to access species data for each tree
    // orders should be changed to whatever the data table is called
    var query_oak = `SELECT COUNT(*) FROM ORDERS WHERE TREE = '${treeStr}' AND SPECIES = 'OAK'`
    var query_pine = `SELECT COUNT(*) FROM ORDERS WHERE TREE = '${treeStr}' AND SPECIES = 'PINE'`

    // get results for a specific species from database
    var resultOak = await sql.dbquery(query_oak);
    var resultPine = await sql.dbquery(query_pine);

    // initialize variables to 0, if length is greater than 0 and there is a result, 
    // return result of the first element of the array
    var oakSpecies = (resultOak.length > 0 && resultOak[0]["COUNT(*)"]) ? resultOak[0]["COUNT(*)"] : 0
    var pineSpecies = (resultPine.length > 0 && resultPine[0]["COUNT(*)"]) ? resultPine[0]["COUNT(*)"] : 0


    // data array for json objects
    var data = [{
        species: oakSpecies
    }, {
        species: pineSpecies
    }];

    // convert data array to a string
    var stringData = JSON.stringify(data);
    // set headers for the responses
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // send the responses
    res.send(stringData);
});

module.exports = router;

