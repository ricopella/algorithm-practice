/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

*/

// solution is O(n^2) time and O(n^2) space since it has 2 loops
function generate(numRows) {
  if (numRows === 1) return [[1]];

  if (numRows === 2) return [[1], [1, 1]];
  let arr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let innerArr = [];

    for (let x = 0; x <= i; x++) {
      if (x === 0 || x === i) {
        innerArr.push(1);
      } else {
        innerArr.push(arr[i - 1][x] + arr[i - 1][x - 1]);
      }
    }

    arr.push(innerArr);
  }

  return arr;
}
