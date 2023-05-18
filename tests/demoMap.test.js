/* 
    Tests for map js page
    Data2 team, Section B
    CS 341 
    Emily Hoppe
 */



const initMap = require("../public/javascripts/demoMap.js");

const marker1 = require("../public/javascripts/demoMap.js");
const portland = require("../public/javascripts/demoMap.js");


test('initialize map', () => {
    expect(initMap).not.toBe(null);
});

test('check base content accuracy', () => {
    expect(portland).not.toBe(null);
});

test('tree marker', () => {
    expect(marker1.title).not.toBe(null);
});

test('jquery assets working', () => {
    const $ = require('jquery');
});

const marker = require("../public/javascripts/demoMap.js");
test('marker function', () => {
    expect(marker).not.toBe(null);
});


