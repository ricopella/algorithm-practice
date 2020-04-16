/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
 * 
 *Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new * item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */
function updateInventory(arr1, arr2) {
    // clone arr1
    let clonedArr1 = [...arr1]

    // check if item from arr2 exists
    for (let item of arr2) {
        const index = clonedArr1.findIndex(x => x[1] === item[1])

        if (index === -1) {
            // item is not in clonedArr1, so add to it
            clonedArr1.push(item)
        } else {
            // item is already in clonedArr1, we need to update the inventory count
            let itemToUpdate = clonedArr1[index]
            itemToUpdate[0] = itemToUpdate[0] + item[0]
            clonedArr1[index] = itemToUpdate
        }
    }

    return sortItemAlphabetically(clonedArr1);
}

const sortItemAlphabetically = (arr) => arr.sort((a, b) => {
    if (a[1] < b[1]) return -1
    if (a[1] > b[1]) return 1
    return 0
})

// The function updateInventory should return an array.
updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]) // an array with a length of 6.
updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]) // [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], []) // [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]) // [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([
        [0, "Bowling Ball"],
        [0, "Dirty Sock"],
        [0, "Hair Pin"],
        [0, "Microphone"]
    ], [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"]
    ]) // [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].