/**
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const strsLen = strs.length

    if (strsLen > 1) {
        const arrayOfArrayOfStrings = strs.map(str => str.split(''))
        const firstWord = arrayOfArrayOfStrings.splice(0, 1)[0]

        // iterate through all of the other words. return the lowest index value the follows a matching string
        const greatestIndex = arrayOfArrayOfStrings.reduce((acc, curr) => {
            const matchingIdx = curr.map((letter, letterIdx) => firstWord[letterIdx] && letter === firstWord[letterIdx] ? true : false)
            const falseIndex = (matchingIdx || []).findIndex(x => x === false)
            const len = matchingIdx.length

            // handles case where sub-string is entire word
            if (falseIndex === -1 && len) {
                if (matchingIdx[0] === true) {

                    // first word, set to len (meaning entire string matches the firstWord)
                    if (acc === null) {
                        return len
                    }

                    // means the current words failed index is less than another matching sub-strings index. Return this value
                    if (len < acc) {
                        return len
                    }

                    // means another matching sub-string is smaller
                    return acc
                }
            } else {

                // first word, return the first index that does not match the sub-string
                if (acc === null) {
                    return falseIndex
                }

                // means the current words failed index is less than another matching sub-strings index. Return this value
                if (falseIndex < acc) {
                    return falseIndex
                }

                // means another matching sub-string is smaller
                return acc
            }

        }, null)

        return greatestIndex === null ? '' : firstWord.filter((x, i) => i < greatestIndex).join('')
    }

    return strsLen === 0 ? '' : strs[0]

};

longestCommonPrefix(["flower", "flow", "flight"]) // "fl"
longestCommonPrefix(["dog", "racecar", "car"]) // ""
longestCommonPrefix(["a"]) // "a"