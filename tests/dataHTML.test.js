/*
Tests for data page
Data2 team, Section B
CS 341 
Authors: Emily Hoppe
*/

var fs = require('fs');
test('test html exists', () => {
//Read the index.html file into a string
var html = fs.readFileSync('public/data.html', 'utf8');
expect(html).toEqual(expect.anything()); //any non-null value is okay


});

test('jquery assets working', () => {
    const $ = require('jquery');
});

