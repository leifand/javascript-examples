/*
  node.js helper class for DList
  Coding Dojo 9/29/17
*/
class Node {
  
  constructor (value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

exports.Node = Node;
