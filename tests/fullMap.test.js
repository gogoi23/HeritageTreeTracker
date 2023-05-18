/* 
    Tests for map js page
    Data2 team, Section B
    CS 341 
    Emily Hoppe
 */

/* The testing suite cannot process that the fullMap.js
page is connected to jquery without uncommenting the top files from that file,
however uncommenting those lines cause the map to not draw, so they are left commentted 
unless tests are being run
*/

const setActive = require("../public/javascripts/fullMap.js");

test('access can be read and changed', () => {
    expect(setActive).not.toBe(null);
});

test('changing access set up', () => {
    expect(setActive(true)).toBe(true);
});

const initMap = require("../public/javascripts/fullMap.js");

test('initialize map', () => {
    expect(initMap).not.toBe(null);
    
});

const initIW = require("../public/javascripts/fullMap.js");

test('info window string can be built', () => {
    expect(initIW).not.toBe(null);
});

test('build info window from vars', () => {
    var testObj = {commonName: "test", stateID : "0", height : "test", spread : "1", diameter : "1", scientificName : "test", siteAddress : "test", neighborhood : "test", yearDesignated : "1", notes: "test", ownership : "test"};
    var testString = (initIW(testObj));
    expect(testString).not.toBe("");
});

const filterDesig = require("../public/javascripts/fullMap.js");

test('filters by designation', () =>{
    expect(filterDesig).not.toBe(null);
});

const filterOwn = require("../public/javascripts/fullMap.js");

test('filters by ownership', () =>{
    expect(filterOwn).not.toBe(null);
});

const otherCheckOwn = require("../public/javascripts/fullMap.js");

test('filters out other', () =>{
    expect(otherCheckOwn("public")).toBe(false);
    expect(otherCheckOwn("this is private")).toBe(false);
    expect(otherCheckOwn("row")).toBe(false);
    expect(otherCheckOwn("testtesttest")).toBe(true);
});

test('jquery assets working', () => {
    const $ = require('jquery');
});



    