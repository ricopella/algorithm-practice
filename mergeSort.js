/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
*/

function mergeSort(nums) {
    if (nums.length < 2) return nums
    let numsCopy = [...nums]
    let left = numsCopy.splice(0, Math.ceil(nums.length / 2))
    let right = numsCopy

    return stitch(mergeSort(left), mergeSort(right))
}

function stitch(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    while (left.length) {
        results.push(left.shift())
    }

    while (right.length) {
        results.push(right.shift())
    }

    return results
}

mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]); // [1,2,3,4,5,6,7,8,9,10]