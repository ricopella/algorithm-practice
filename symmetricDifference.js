/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 * 
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
 * 
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" 
 * of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
 * For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements 
 * which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array 
 * must contain only unique values (no duplicates).
 *
 */
function sym(...args) {
    // first we remove duplicates in the same array, but leave first reference
    const removedDups = args.map(arg => arg.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            return [...acc, curr]
        }
        return acc
    }, []))

    // second we flatten them into one array and then sort them
    // finally, we remove items that are duplicated
    const result = removeDupesFromArray(removedDups.flat().sort((a, b) => a - b))
    return result;
}

// function that will return a single array. If a number is included in the array twice, then we remove it completely from the array
const removeDupesFromArray = (arr) => arr.reduce((acc, curr) => {
    if (acc.includes(curr)) {
        const index = acc.findIndex(x => x === curr)
        const clonedAcc = [...acc]
        clonedAcc.splice(index, 1)
        return clonedAcc
    } else {
        return [...acc, curr]
    }
}, [])

sym([1, 2, 3, 3], [5, 2, 1, 4]);