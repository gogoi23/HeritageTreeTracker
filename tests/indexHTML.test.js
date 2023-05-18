/*
Tests for main HTML page
Data2 team, Section B
CS 341 
Authors: Caitlin Ching and Emily Hoppe
*/

var fs = require('fs');
test('test html exists', () => {
//Read the index.html file into a string
var html = fs.readFileSync('public/index.html', 'utf8');
expect(html).toEqual(expect.anything()); //any non-null value is okay


});

test('jquery assets working', () => {
    const $ = require('jquery');
});

/*
const slideShow = require("../public/javascripts/index.js");
test('check slideShow', () => {
    expect(slideShow).not.toBe(null);
    
});

const menu = require("../public/javascripts/index.js");
test('check menu', () => {
    expect(menu).not.toBe(null);
    
});
*/
