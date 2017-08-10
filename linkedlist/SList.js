/*
  slist.js
  Leif Anderson 8/10/17
*/

// Node - helper class to SList
//
function Node(val) {
  this.val = val;
  this.next = null;
}

// Singly Linked List - here be dragons ...
//
function SList() {
  this.head = null;
}
SList.prototype.push = function(val) {
  node = new Node(val);
  node.next = this.head;
    this.head = node;
    return this;
}
SList.prototype.pop = function() {
  if(this.head == null) return null;
  ret_node = this.head;
  this.head = this.head.next;
  return ret_node;
}
SList.prototype.pushBack = function(val) {
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
SList.prototype.popBack = function() {
  if(this.head == null) return null;
  node_ptr = this.head;
  while(node_ptr) {
    if(node_ptr.next == null) {
      // set prev.next to null here
      return node_ptr;
    }
    node_ptr = node_ptr.next;
  }
}
SList.prototype.listLength = function() {
  length = 0;
  node_ptr = this.head;
  while(node_ptr){
    node_ptr = node_ptr.next;
    length++;}
  return length;
}
SList.prototype.max = function() {
  if(this.head == null) return null;
  max = this.head.val;
  node_ptr = this.head.next;
  while(node_ptr) {
    if(max < node_ptr.val) max = node_ptr.val;
    node_ptr = node_ptr.next;}
  return max;
}
SList.prototype.listContains = function(val) {
  node_ptr = this.head;
  while(node_ptr) {
    if(node_ptr.val == val) return true;
    node_ptr = node_ptr.next;}
  return false;
}
SList.prototype.reverse = function() {
  tail_ptr = null;
  node_ptr = this.head;
  while(node_ptr){
    if(node_ptr.next){
      // swap next to preceding node
      temp_ptr = node_ptr;
      temp_ptr.next = node_ptr;
      node_ptr = node_ptr.next;
    }
    else { // found the tail
      tail_ptr = node_ptr;
      node_ptr = node_ptr.next;
    }

  }
  this.head = tail_ptr;
}
SList.prototype.emptyList = function() {
  this.head = null;
}
SList.prototype.getVals = function() {
  vals = [];
  node_ptr = this.head;
  while(node_ptr){
    vals.push(node_ptr.val);
    node_ptr = node_ptr.next;}
  return vals;
}
