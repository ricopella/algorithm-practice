"use strict";

/*

You are given an array of numbers (floats). You should find the difference between the maximum and minimum element.
Your function should be able to handle an undefined amount of arguments.
For an empty argument list, the function should return 0.
Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.
So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.

*/

function mostNumbers(...numbers) {

    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);

    // if 0 args, return 0, else return difference
    return [...numbers].length === 0
        ? 0
        : highest - lowest;
}

mostNumbers(1, 2, 3) // 2
mostNumbers(5, -5) // 10
Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5) * 1000) // 12400
mostNumbers() // 0