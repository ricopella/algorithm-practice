/**
 *https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort
 *
 * The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. 
 * It begins the sorted array with the first element.   * Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
 * It continues iterating through the list and swapping new items backwards into   * the sorted portion until it reaches the end. 
 * This algorithm has quadratic time complexity in the average and worst cases.
 * 
 * Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function insertionSort(array) {
    if (array && array.length < 2) return array
    const clonedInputArray = array.slice()
    let sortedArray = []

    for (let i = 0; i < clonedInputArray.length; i++) {
        if (i === 0) {
            sortedArray.push(clonedInputArray[0])
        } else {
            sortedArray = setSortedArray(sortedArray, clonedInputArray[i])
        }
    }
    return sortedArray
}

function setSortedArray(array, value) {
    const insertIndex = array.findIndex(x => value < x)

    if (insertIndex === -1) {
        return [...array, value]
    } else {
        const clonedArr = array.slice()
        clonedArr.splice(insertIndex, 0, value)
        return clonedArr
    }
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);