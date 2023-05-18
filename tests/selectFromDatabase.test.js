/* Obsolete test

var mysql = require('mysql');
test('Working Connection', () => {
  var con = mysql.createConnection({
  host: "35.247.66.188",
  user: "first",
  password: "OregonOak73!",
  database: "heritagetreedb"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM TREEDATA", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})
  
  
 expect(result).toEqual(expect.anything()); //any non-null value is okay 
  
});
*/

test('jquery assets working', () => {
  const $ = require('jquery');
});

  

