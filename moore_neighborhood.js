"use strict";

function countNeighbours(data, row, col) {
  let count = 0;
  const neighbors = [
      [-1, 1],
      [-1, 0],
      [-1, -1],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, 0],
      [1, -1]
    ];
  for (let a of neighbors) {
    let x = row + a[0],
      y = col + a[1];
    if (data[x] && data[x][y]) {
      count++;
    }
  }
  return count;
}
countNeighbours(
  [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  1,
  2
);

countNeighbours(
  [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  0,
  0
);

countNeighbours([
  [
    1, 1, 1
  ],
  [
    1, 1, 1
  ],
  [1, 1, 1]
], 0, 2);

countNeighbours([
  [
    0, 0, 0
  ],
  [
    0, 1, 0
  ],
  [0, 0, 0]
], 1, 1);