/*
  linkedlist.js
  Leif Anderson 7/31/17
*/

// Node - helper class to LinkedList
//
function Node(val) {
  this.val = val;
  this.next = null;
}

// LinkedList - here be dragons ...
//
function LinkedList() {
  this.head = null;
  this.rear = null;
}
LinkedList.prototype.addFront = function(val) {
  node = new Node(val);
  node.next = this.head;
    this.head = node;
    return this;
}
LinkedList.prototype.removeFront = function() {
  if(this.head == null) return null;
  ret_node = this.head;
  this.head = this.head.next;
  return ret_node;
}
LinkedList.prototype.addBack = function(val) {
  node = new Node(val);
  if(this.head == null) {
    this.head = node;
    return this;}
  node_ptr = this.head;
  while(node_ptr) {
      if(node_ptr.next == null) {
        node_ptr.next = node;
        break;}
      node_ptr = node_ptr.next;}
  return this;
}
LinkedList.prototype.removeBack = function() {
  if(this.head == null) return null;
  node_ptr = this.head;
  while(node_ptr) {
    if(node_ptr.next == null) return node_ptr;
    node_ptr = node_ptr.next;}
}
LinkedList.prototype.listLength = function() {
  length = 0;
  node_ptr = this.head;
  while(node_ptr){
    node_ptr = node_ptr.next;
    length++;}
  return length;
}
LinkedList.prototype.max = function() {
  if(this.head == null) return null;
  max = this.head.val;
  node_ptr = this.head.next;
  while(node_ptr) {
    if(max < node_ptr.val) max = node_ptr.val;
    node_ptr = node_ptr.next;}
  return max;
}
LinkedList.prototype.listContains = function(val) {
  node_ptr = this.head;
  while(node_ptr) {
    if(node_ptr.val == val) return true;
    node_ptr = node_ptr.next;}
  return false;
}
LinkedList.prototype.getVals = function() {
  vals = [];
  node_ptr = this.head;
  while(node_ptr) {
    vals.push(node_ptr.val);}
  return vals;
}
