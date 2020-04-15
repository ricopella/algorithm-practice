/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
 * 
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */
function steamrollArray(arr) {
    return reduceArray(arr)
}

const reduceArray = (arr) => arr.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
        return [...acc, curr]
    } else {
        return [...acc, ...reduceArray(curr)]
    }
}, [])

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
steamrollArray([
        [
            ["a"]
        ],
        [
            ["b"]
        ]
    ]) // ["a", "b"]
steamrollArray([1, [2],
        [3, [
            [4]
        ]]
    ]) // [1, 2, 3, 4]
steamrollArray([1, [],
        [3, [
            [4]
        ]]
    ]) // [1, 3, 4]
steamrollArray([1, {},
        [3, [
            [4]
        ]]
    ]) // [1, {}, 3, 4]