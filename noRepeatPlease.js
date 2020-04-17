/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
 *Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
 * 
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a)
 * repeating.
 */
function permAlone(str) {
    return findPermutations(str).length;
}

const findPermutations = (string) => {
    if (!string || typeof string !== "string") {
        return []
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        const currentCharacter = string[i]

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of findPermutations(remainingChars)) {
            if (currentCharacter !== permutation[0]) {
                permutationsArray.push(currentCharacter + permutation)
            }
        }

    }
    return permutationsArray
}

permAlone('aab');