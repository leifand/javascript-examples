/*
  linkedlist.js
  Flaming Bananas July 14, 2017
*/

// Node Class
// a helper class used in conjunction with SList
//
function Node(val) {
  this.val = val;
  this.next = null;
}

// SList Class
// a Flaming Bananas singly linked list implementation
//
function SList() {

  // SList attributes
  //
  this.head = null;

  // SList methods:
  //
  // addFront(Node)
  // removeFront()
  // removeBack
  // addBack(Node)
  // length()
  // max()
  // contains(Node)
  // insertAt(precNode, Node)
  // remove(Node)
  // removeNegVals()
  // secondMax()
  // printList()
  //
  // ... here be dragons ... :)
  //
  this.addFront = function(node) {
    node.next = this.head;
    this.head = node;
    return this;
  }

  this.removeFront = function() {
    if (this.head.next = null)
      this.head = null;
    else
      this.head = this.head.next;
    return this;
  }

  this.removeBack = function() {
    return this;
  }

  this.addBack = function(node) {
    return this;
  }

  this.length = function() {
    currNode = this.head;
    length = 0;
    while(currNode) {
      currNode = currNode.next;
      length++;
    }
    return length;
  }

  this.max = function() { // returns null on empty list
    if (this.head = null)
      return null;

    var currNode = this.head;
    var currMax = currNode.val;
    while (currNode) {
      if (currMax < currNode.next.val)
        currMax = currNode.next.val;
      currNode = currNode.next;
    }
    return currMax;
  }

  this.secondMax = function() {
    return this;
  }

  this.contains = function(node) {
    var contains = false;
    if (this.head == null)
      return contains;
    var currNode = this.head;
    while(currNode) {
      if (currNode.val == node.val) {
        contains = true;
        break;
      }
      currNode = currNode.next;
    }
    return contains;
  }

  this.insertAt = function(preVal, Val) {
    return false;
  }

  this.remove = function(val) {
    return false;
  }

  this.removeNegs = function() { // doesn't capture all negatives in test
    if (!this.head)
      return false;

    while (this.head && this.head.val < 0) {
      this.head = this.head.next;
    var currNode = this.head;
    if (currNode)
      while (currNode.next)
        if (currNode.next.val < 0)
          currNode.next = currNode.next.next;
        else
          currNode = currNode.next;
    return this;
    }
  }

  this.getVals = function() {
    if (!this.head) return '';
    var currNode = this.head;
    var vals = [];
    while (currNode) {
      vals.push(currNode.val);
      currNode = currNode.next;
    }
    return vals;
  }
}

  x = new Node(1);
  y = new Node(2);

  l = new SList();

  l.addFront(x);
  l.addFront(y);
  console.log(l);
  console.log(l.length());
  //console.log(l.max());

  z = new Node(2);
  console.log(l.contains(z));

  a = new Node(-2);
  b = new Node(-3);

  l.addFront(a);
  l.addFront(b);

  console.log(l.getVals());
  l.removeNegs();
  console.log(l.getVals());
