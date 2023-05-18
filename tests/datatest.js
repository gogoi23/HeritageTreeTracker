/*
Tests for HTML data page
Data2 team, Section B
CS 341 
Caitlin Ching
*/

import $ from "jquery";

var fs = require('fs');
test('test html exists', () => {
//Read the index.html file into a string
var html = fs.readFileSync('public/data.html', 'utf8');
expect(html).toEqual(expect.anything()); //any non-null value is okay

});

test('jquery assets working', () => {
    const $ = require('jquery');
});

// check if the species chart draws
const drawSpeciesChart = require("../public/javascripts/data.js");
test('check drawSpeciesChart', () => {
    expect(drawSpeciesChart).not.toBe(null);
    
});

// check if the owner chart draws
const drawOwnerChart = require("../public/javascripts/data.js");
test('check drawOwnerChart', () => {
    expect(drawOwnerChart).not.toBe(null);
    
});

// check if the neighborhood chart draws
const drawNeighborhoodChart = require("../public/javascripts/data.js");
test('check drawNeighborhoodChart', () => {
    expect(drawNeighborhoodChart).not.toBe(null);
    
});

// check if the age chart draws
const drawAgeChart = require("../public/javascripts/data.js");
test('check drawAgeChart', () => {
    expect(drawAgeChart).not.toBe(null);
    
});