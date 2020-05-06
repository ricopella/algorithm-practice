/**
 *
 * The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the * first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and *
 * swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
 * 
 * Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 * 
 * Note: We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in
 * action!
 */
function insertionSort(array) {
    let clonedArray = array.slice()

    for (let i = 0; i < clonedArray.length; i++) {
        if (clonedArray[i] > clonedArray[i + 1]) {
            const pointer = clonedArray.splice(i + 1, 1)[0]
            const index = clonedArray.findIndex(x => x > pointer)

            if (index === -1) {
                clonedArray.splice(i + 1, 0)
            }

            if (index <= i) {
                clonedArray.splice(index, 0, pointer)
            }
        }
    }


    return clonedArray;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);