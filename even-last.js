"use strict";
var newArray = [];
var totalSum = 0;
var multi = 0;

function evenLast(data) {

    if (data === undefined) {
        newArray = 0;
        return newArray;

    } else if (data.length > 1) {
        for (var i = 0; i < data.length; i += 2) {
            newArray.push(data[i]);
            totalSum += data[i];
            multi = totalSum * newArray.pop();
            return multi;
        }

    } else if (data.length == 1) {
        multi = data[0] * data[0];
        return multi;
    }
    // return 0;

};

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}