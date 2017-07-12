"use strict";


function median(data) {
    var medianVal = 0;

    // sort smallest to largest
    data = data.sort((a, b) => a - b);

    // if even
    if (data.length % 2 === 0) {
        // find where to split array
        var arrLoc = data.length / 2;

        // slice into 2nd array of higher numbers
        var data2 = data.slice(arrLoc);
        // take last item in 1st array + add to 1st item in 2nd array divide by 2 to find average and round down
        medianVal = (data[arrLoc - 1] + data2[0]) / 2;

        console.log("result: " + medianVal);

        // if odd
    } else {
        // store median
        medianVal = data[Math.floor(data.length / 2)];
        console.log("result: " + medianVal);

    }
    // console.log(medianVal);
    return medianVal
};

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}