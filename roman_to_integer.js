/**
 * https://leetcode.com/problems/roman-to-integer/submissions/
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = s.split('')
    const SYMBOLS = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const newArr = arr.reduce((acc, currentLetter, idx) => {

        // I can be placed before V (5) and X (10) to make 4 and 9. 
        if (currentLetter === 'I' && (arr[idx + 1] && (arr[idx + 1] === 'V' || arr[idx + 1] === 'X'))) {
            return acc - 1
        }


        // X can be placed before L (50) and C (100) to make 40 and 90. 
        if (currentLetter === 'X' && (arr[idx + 1] && arr[idx + 1] === 'L' || arr[idx + 1] == 'C')) {
            return acc - 10
        }

        // C can be placed before D (500) and M (1000) to make 400 and 900.
        if (currentLetter === 'C' && (arr[idx + 1] && arr[idx + 1] === 'D' || arr[idx + 1] === 'M')) {
            return acc - 100
        }

        return acc + SYMBOLS[currentLetter]
    }, 0)

    return newArr
};

romanToInt('III') // 3
romanToInt('IV') // 4
romanToInt('IX') // 9
romanToInt('LVIII') // 58
romanToInt('MCMXCIV') // 1994