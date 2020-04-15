/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
 * 
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
    const minVal = Math.min(...arr)
    const maxVal = Math.max(...arr)
    const rangeVals = createRangeArray(minVal, maxVal)

    let result = maxVal + 1

    while (!isRangeDivisible(result, rangeVals)) {
        result = result + 1
    }
    return result;
}

function createRangeArray(minVal, maxVal) {
    const rangeLength = maxVal - minVal + 1
    return [...Array(maxVal - minVal + 1)].map((val, idx) => {
        if (idx === 0) {
            return minVal
        }

        if (idx === rangeLength) {
            return maxVal
        }

        return minVal + idx
    })
}

function isRangeDivisible(result, rangeArr) {
    return rangeArr.every((val) => result % val === 0)
}

smallestCommons([1, 5]) // 60.
smallestCommons([5, 1]) // 60.
smallestCommons([2, 10]) // 2520.
smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18]) // 6056820.