"use strict";

/*

You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
For example: The number given is 123405. The result will be

*/

function digitsMultip(data) {
    return parseInt(("" + data).split("").reduce((sum, num) => num !== '0'
        ? sum * num
        : sum))
}

digitsMultip(123405);
digitsMultip(999);
digitsMultip(100);
digitsMultip(111);