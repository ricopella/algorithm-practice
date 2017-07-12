"use strict";
var count = 0;

function countNeighbours(data, row, col) {
    // i = row & j & col
    var cellRow = row;
    var cellCol = col;
    var others = 0;


    var neighbor = {
        left: [0, -1],
        right: [0, 1],
        topLeft: [-1, -1],
        top: [-1, 0],
        topRight: [-1, 1],
        bottomleft: [1, -1],
        bottomright: [1, 1]
    }

    if (data[cellRow][col - 1] == undefined) {
        others++
    } else if (data[cellRow][col - 1] === 0) {
        others++
    } else if (data[cellRow][col - 1] === 1) {
        count++
    }


    if (data[cellRow][col + 1] == undefined) {
        others++
    } else if (data[cellRow][col + 1] === 0) {
        others++
    } else if (data[cellRow][col + 1] === 1) {
        count++
    }

    if (data[cellRow - 1][col] == undefined) {
        others++
    } else if (data[cellRow - 1][col] === 0) {
        others++
    } else if (data[cellRow - 1][col] === 1) {
        count++
    }

    if (data[cellRow - 1][col - 1] == undefined) {
        others++
    } else if (data[cellRow - 1][col - 1] === 0) {
        others++
    } else if (data[cellRow - 1][col - 1] === 1) {
        count++
    }

    if (data[cellRow - 1][col + 1] == undefined) {
        others++
    } else if (data[cellRow - 1][col + 1] === 0) {
        others++
    } else if (data[cellRow - 1][col + 1] === 1) {
        count++
    }

    if (data[cellRow + 1][col] == undefined) {
        others++
    } else if (data[cellRow + 1][col] === 0) {
        others++
    } else if (data[cellRow + 1][col] === 1) {
        count++
    }

    if (data[cellRow + 1][col - 1] == undefined) {
        others++
    } else if (data[cellRow + 1][col - 1] === 0) {
        others++
    } else if (data[cellRow + 1][col - 1] === 1) {
        count++
    }

    if (data[cellRow + 1][col + 1] == undefined) {
        others++
    } else if (data[cellRow + 1][col + 1] === 0) {
        others++
    } else if (data[cellRow + 1][col + 1] === 1) {
        count++
    }

    return count;

}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}