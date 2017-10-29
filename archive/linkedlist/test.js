/*
  test.js doubly linked list test
  Coding Dojo 9/29/17
*/
const DList = require('./dlist.js').DList;

var x = new DList();
console.log(x);

x.add(10);
x.add(20);
x.add(30);
x.add(40);
x.add(50);

console.log(x);
console.log(x.find(20));
console.log(x.find(15));
