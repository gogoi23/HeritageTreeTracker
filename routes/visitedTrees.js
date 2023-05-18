var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms');

// installed dbms_promise.js using async
router.post('/', async function (req, res, next) {
    console.log("notes = "+req.body.notes);
    
    

    
   
    let queryString = "SELECT OBJECTID FROM VISITEDTREES WHERE USERID = " + req.body.id;
    dbquery(queryString,function (error,VISITED) {
        dbquery("Select * from TREEINFO",function (error,results) {
            let objectIds = [];
            let visitedTrees = [];
            if(VISITED.length ===0){
                res.send("You have not visited any trees yet.");
            }
            else{
                for(let i = 0; i<VISITED.length;i++){
                    objectIds.push(VISITED[i].OBJECTID);
                }
                for (let i =0; i<results.length;i++){
                    if(objectIds.includes(results[i].OBJECTID)){
                        visitedTrees.push(results[i]);
                    }
                }
                res.send(JSON.stringify(visitedTrees));
            }
            
        });
        
    });
    

    

   
});

module.exports = router;