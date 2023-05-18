const e = require('express');
var express = require('express');
var router = express.Router();
const { dbquery } = require('./dbms');
const bcrypt = require ("bcrypt");

let user0 = {
  username : "anand_gogoi",
  password : "hello"
};

let user1= {
  username : 'justin',
  password : 'dog' 
};
let user2= {
  username : 'thirdTestUser',
  password : 'dog' 
};



let users = [
  user0,
  user1
];

let wrongPassword = [
  user0,
  user1,
  user2
];



/* GET users listing. */
router.get('/', async function(req, res, next) {
  //const results = await db.promise().querey(`SELECT * FROM Login`)
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
  console.log(req.body.Username);

  //console.log(req.body.Username + " "+ req.body.Password);
  dbquery("SELECT * FROM ORDERS WHERE USERNAME = '"+req.body.Username+"'",function (error,results) { 
    
    if(results.length == 0){
      res.send(JSON.stringify(users));
    }
    else {
      (async function encript(){
        let auth = await bcrypt.compare(req.body.Password,results[0].PASSWORD); 
        if(auth){
          res.send(JSON.stringify(results));
        }
        else{
          res.send(JSON.stringify(wrongPassword));
        }
      })();

      
    }
    

  });

});

module.exports = router;