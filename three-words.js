"use strict";
var word = 0;
let contains = false;

function threeWords(data) {

    var full = data.split(" ");
    console.log(full);

    for (var i = 0; i <= full.length; i++) {
        if (full[i] === typeof string) {
            console.log('this is a stiring' + i);
            word++;
        } else if (full[i] === typeof number) {
            console.log('this is a number: ' + i);
            word = 0;
        }
    }
    if (word === 3) {
        return true;
    }
}


var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}