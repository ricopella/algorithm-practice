/* 

Given an array of integers, every element appears twice except for one. Find that single one.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {

    nums.sort();
    console.log(nums);
    let len = nums.length;
    let count = 0;

    for (let i = 0; i < nums.length; i += 2) {

        if (count < len) {
            if (nums[i] !== nums[i + 1]) {
                console.log(nums[i]);
                return nums[i]
            } else {
                count++
            }

        }
    }
}

singleNumber([2, 4, 3, 2, 5, 6, 4, 3, 5]);