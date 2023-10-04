/*

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

*/

function once(fn) {
  let hasCalled = false;

  return function (...args) {
    if (hasCalled) {
      return undefined;
    }
    hasCalled = true;
    return fn(...args);
  };
}
