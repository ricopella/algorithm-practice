function quickSort(arr) {
  if (arr.length <= 1) {
    console.log(arr);
    return arr
  } else {
    let pivot = arr[0],
      answer = [],
      less = [],
      greater = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i])
      } else {
        greater.push(arr[i])
      }
    }
    answer.concat(quickSort(less), pivot, quickSort(greater));
    console.log(answer);
    return answer;
  }
}

quickSort([
  1,
  4,
  6,
  3,
  9,
  6,
  5
])

quickSort([1]);