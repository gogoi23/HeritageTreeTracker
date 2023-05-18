const e = require('express');
var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms');
const bcrypt = require ("bcrypt");




/* GET users listing. */
router.get('/', async function(req, res, next) {
  //const results = await db.promise().querey(`SELECT * FROM Login`)
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
  console.log("hello");
  var Favorites = "";
    for(let i=0; i<500;i++){
        Favorites = Favorites + "0";
    }
    
  dbquery("SELECT * FROM ORDERS",function (error,results) {
    let copy = results
    let valid = true
    let id = -1;
    for(let i=0 ;i<results.length; i++){
        if(copy[i].USERNAME === req.body.Username){
            valid = false;
        }
    }

    // going to insert a new user named HashUser password myCake1234!
    if(valid){
        
      console.log("attempting to hash function.");
      (async function encript(){
        const encriptedPassword = await bcrypt.hash(req.body.Password,10);  
        console.log(encriptedPassword);
        dbquery("insert into ORDERS (ID, USERNAME, PASSWORD, FAVORITE_TREE )VALUES ("+(results.length+1) +",'"+req.body.Username+"','"+encriptedPassword+"','"+Favorites+"' )",function (error,results) {});
      })();
        id = results.length+1;
        res.send(id.toString());  
    }
    else{
        res.send(id.toString());
    }

  });



  
});

module.exports = router;