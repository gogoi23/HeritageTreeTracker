/* treeRequest.test.js
 * Tests code in treeRequest.js.
 * Author: Dylan Kramis
 * Version: 2/13/2022
 */

// requires treeRequestPost function for tests
var fs = require('fs');
var expectedData = require('./data/Heritage_Trees.json');


test ('temp', () => {
  expect(expectedData).not.toBe(null);
});

// tests that data can be received
/* test('verifies data can be received', () => {
  expect(treeRequest()).toEqual(expect.anything());
});

// tests that data received is correct for the first tree
test('checks that data for first tree is correct', () => {

  // TODO expect statement, this may be challenging to test properly
  actualData = treeRequest();

  expect(actualData[0]).toEqual(expectedData[0]);
});
 */
