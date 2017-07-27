/*

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
    // identify which is min
    let min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    // identify which is max
    let max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    // empty array to store all numbers including ones inbetween
    let emArray = [];
    // for through min & max, add each iterative to empty array
    for (let i = min; i <= max; i++) {
        emArray.push(i);
    }

    // reduce through array to find total
    let total = emArray.reduce(function(a, b) {
        return a + b;
    });

    console.log(total);
    return total;
}

sumAll([1, 4]) // should return 10.
sumAll([4, 1]) // should return 10.
sumAll([5, 10]) // should return 45.
sumAll([10, 5]) // should return 45.