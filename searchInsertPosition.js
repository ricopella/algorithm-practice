/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/

function searchInsert(nums, target) {
  if (nums.length === 1) return target <= nums[0] ? 0 : 1;

  // since nums is sorted, we can use binary search
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
