/*

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

*/

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function quickSort(arr: JSONValue[], fn: Fn): JSONValue[] {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let pivotValue = fn(arr[0]);
  let less: JSONValue = [];
  let greater: JSONValue = [];

  for (let i = 1; i < arr.length; i++) {
    const val = fn(arr[i]);

    if (val <= pivotValue) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less, fn), pivot, ...quickSort(greater, fn)];
}

// with quicksort
function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return quickSort(arr, fn);
}

// with native javascript sort
// function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
//     return arr.sort((a, b) => fn(a) - fn(b))
// }
