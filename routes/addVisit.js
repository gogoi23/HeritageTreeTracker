var express = require('express');
const { data } = require('jquery');
var router = express.Router();
const { dbquery } = require('./dbms');

// installed dbms_promise.js using async
router.post('/', async function (req, res, next) {
    console.log("treeID: "+req.body.id+ " userid: "+ req.body.userID + " notes: "+ req.body.Notes);   
    dbquery("select * FROM VISITEDTREES WHERE USERID = "+ req.body.userID,function (error,results) {
        let valid = true;
        
        if(results === null){
            
        }
        else{
            for(let i =0; i<results.length;i++){
                if(results[i].OBJECTID == req.body.id){
                    valid = false;
                }
                console.log("visited tree id"+results[i].OBJECTID + " selected tree id"+req.body.id + "valid = " + valid);
            }
        }

        if(valid){
            dbquery("insert into VISITEDTREES VALUES("+req.body.userID+", "+req.body.id+", '"+req.body.Notes+"')",function (error,results) {
            
            });    
        }
        res.send(valid);
    });
});

module.exports = router;