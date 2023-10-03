/*

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

*/

function* fibGenerator(): Generator<number, any, number> {
  yield 0;
  yield 1;
  let a = 0;
  let b = 1;
  while (true) {
    const current = a + b;
    a = b;
    b = current;
    yield current;
  }
}
