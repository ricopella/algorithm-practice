/**
 * 
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
 * 
 * You are given two arrays and an index.
 * 
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 * 
 * Begin inserting elements at index n of the second array.
 * 
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
    const copyArr = arr2.slice()
    return copyArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1) // ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]