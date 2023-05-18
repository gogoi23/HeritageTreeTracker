var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms');

// installed dbms_promise.js using async
router.post('/', async function (req, res, next) {
    dbquery("select * from VISITEDTREES where USERID = "+req.body.userID+" and OBJECTID = "+ req.body.treeID,function (error,results) {
        res.send(results[0].NOTES);
    });
    //res.send("hello");
 
});

module.exports = router;