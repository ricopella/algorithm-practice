/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort
 * 
 * Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function bubbleSort(array) {

    if (array.length && array.length < 2) {
        return array
    }

    let arrayClone = array.slice()
    let hasSorted = true

    // hasSorted means the setSortedArray() function ran and at some point re-sorted the array
    // when hasSorted = false, means setSortedArray() ran without moving any items
    while (hasSorted) {

        const [updatedArray, resultHasSorted] = setSortedArray(arrayClone)

        arrayClone = updatedArray
        hasSorted = resultHasSorted
    }
    return arrayClone;
}

const setSortedArray = (array) => {
    const arrayClone = array.slice()
    let hasSorted = false

    for (let i = 0; i < arrayClone.length; i++) {
        // current item is greater than the item next to it
        if (arrayClone[i] > arrayClone[i + 1]) {
            // swap the two items so they are now sorted
            arrayClone.splice(i, 2, arrayClone[i + 1], arrayClone[i])

            if (hasSorted === false) {
                hasSorted = true
            }

        }
    }

    return [arrayClone, hasSorted]

}


bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);