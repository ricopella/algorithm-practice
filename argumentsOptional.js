/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * 
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 */
function addTogether(num1, num2) {
    if (typeof num1 !== 'number') {
        return undefined
    }
    console.log(typeof num2 === 'number')
    if (typeof num2 === 'number') {
        return num1 + num2
    } else {
        if (num2) {
            return undefined
        }

        return function(newNum) {
            if (typeof newNum === 'number') {
                return num1 + newNum
            }
            return undefined
        }
    }
}

addTogether(2, 3) // 5.
addTogether(2)(3) // 5.
addTogether("http://bit.ly/IqT6zt") // undefined.
addTogether(2, "3") // undefined.
addTogether(2)([3]) // undefined.