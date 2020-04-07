/**
 * https://leetcode.com/problems/reverse-integer/
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        const max = Math.pow(2, 31) - 1
        const min = Math.pow(-2, 31)
        const arr = x.toString().split('')

        if (arr[arr.length - 1] === 0) {
            arr.splice(arr.length - 1, 1)
        }

        if (arr[0] === '-') {
            arr.splice(0, 1)
        }

        const result = Number(`${x < 0 ? `-` : ``}${arr.reverse().join('')}`)
  
  return result <= max && result >= min  ? result : 0
};

reverse(123) // 321
reverse(-123) // 321
reverse(120) // 21