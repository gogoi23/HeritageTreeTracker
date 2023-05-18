/* treeRequest.js
 * Contains function used to request tree data from MySQL database.
 * Currently non-functional
 * 
 * Author: Dylan Kramis
 * Version: 2/13/2022
 */

// allows jQuery to be used
// source: https://www.npmjs.com/package/jquery
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

// variable to be returned
var newData = 0;

// posts a request for tree data
function treeRequest() {

  // make post request run synchronously
  $.ajaxSetup({ async: false });

  // posts request for data and attempts to save data
  $.post("/tree-data", null, function (data) {
    newData = data;
  });

  $.ajaxSetup({ async: true });
  
  return newData;
}

module.exports = treeRequest;