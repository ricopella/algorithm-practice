/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort
 * 
 * Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second
 * Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function selectionSort(array) {
    if (array.length && array.length < 2) return array

    let count = 0
    let arrayClone = array.slice()

    while (count < array.length) {
        arrayClone = setSortedArray(arrayClone, count)
        count++
    }

    return arrayClone
}

function setSortedArray(array, count) {
    let arrayClone = array.slice()
        // remove already sorted items
    let deletedItems = arrayClone.splice(0, count)

    if (arrayClone.length >= 2) {
        // remove item we're going to compare to the min value
        const subjectValue = arrayClone.splice(0, 1)[0]
        const minValue = Math.min(...arrayClone)
        const minIndex = arrayClone.findIndex(x => x === minValue)

        // if removed item is greater than the smallest value in the array
        if (minIndex !== -1 && subjectValue > minValue) {
            // replace smallest value with the subject value
            arrayClone.splice(minIndex, 1, subjectValue)
                // add smallest value to front of array
            arrayClone = [minValue, ...arrayClone]
        } else {
            arrayClone = [subjectValue, ...arrayClone]
        }

        // add the already sorted items to the front and return the newly sorted array
        return [...deletedItems, ...arrayClone]
    }
    return array
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);