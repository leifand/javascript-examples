/*
  linkedlist2.js
  Flaming Bananas July 19, 2017
  second implementation
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

  // SList methods
  //
  this.addFront = function(node) {
    if (this.head == null) this.head = node;
    else {
      node.next = this.head.next;
      this.head = node;
    }
    return this;
  }

  this.removeFront = function() {
    if (this.head == null) return null;
    node = this.head;
    this.head = this.head.next;
    return node;
  }

  this.addRear = function(node) {
    if (this.head == null) this.head = node;
  }

  this.removeRear = function() {

  }
