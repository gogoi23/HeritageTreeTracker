/* 
    Tests for data page
    Data2 team, Section B
    CS 341 
    Emily Hoppe
 */

    

const {drawSpeciesChart, drawAgeChart, drawOwnerChart, drawNeighborhoodChart, opts, opts2, opts3, opts4, addNeighData, addOwnData, addAgeData, addSpeciesData} = require("../public/javascripts/data.js");
const $ = require('jquery');

test('jquery assets working', () => {
    const $ = require('jquery');
});

test('check species chart', () => {
    expect(drawSpeciesChart).not.toBe(null);
});

test('check species chart', () => {
    expect(addSpeciesData()).not.toBe(null);
});


test('check age chart', () => {
    expect(drawAgeChart).not.toBe(null);
});

test('check age chart', () => {
    expect(addAgeData()).not.toBe(null);
});


test('check owner chart', () => {
    expect(drawOwnerChart).not.toBe(null);
});

test('check owner data', () => {
    expect(addOwnData()).not.toBe(null);
});

test('check neighborhood chart', () => {
    expect(drawNeighborhoodChart).not.toBe(null);
});

test('check neighborhood data', () => {
    expect(addNeighData()).not.toBe(null);
});


test('check data', () => {
    expect(opts).not.toBe(null);
    expect(opts2).not.toBe(null);
    expect(opts3).not.toBe(null);
    expect(opts4).not.toBe(null);
});

