/**
 * https://leetcode.com/problems/palindrome-number/
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) {
        return false
    }

    const arr = x.toString().split('')
    return Number(arr.join('')) == Number(arr.reverse().join(''))
};

isPalindrome(121) // true
isPalindrome(-121) // false
isPalindrome(10) // false