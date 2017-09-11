/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.



*/

let arr = [1, 2, 1, 2, 3, 1, 4, 5, 2];

let result = arr.filter((num, pos) => {;
    return arr.indexOf(num) == pos;
})
console.log(result);