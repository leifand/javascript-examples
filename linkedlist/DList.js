/*
  dlist.js
  Leif Anderson 8/10/17
*/

// Node - helper class to SList
//
function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}
// Double Linked List - here be dragons ...
//
function DList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
DList.prototype.push = function(val) {
  node = new Node(val);
  node.next = this.head;
    this.head = node;
    this.length++;
    return this;
}
DList.prototype.pop = function() {
  /*if(this.head == null) return null;
  ret_node = this.head;
  this.head = this.head.next;*/
  this.length--;
  return ret_node;
}
DList.prototype.listLength = function() {
  return this.length;
}
DList.prototype.max = function() {
  if(this.head == null) return null;
  max = this.head.val;
  node_ptr = this.head.next;
  while(node_ptr) {
    if(max < node_ptr.val) max = node_ptr.val;
    node_ptr = node_ptr.next;}
  return max;
}
DList.prototype.listContains = function(val) {
  node_ptr = this.head;
  while(node_ptr) {
    if(node_ptr.val == val) return true;
    node_ptr = node_ptr.next;}
  return false;
}
DList.prototype.emptyList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
DList.prototype.getVals = function() {
  vals = [];
  node_ptr = this.head;
  while(node_ptr){
    vals.push(node_ptr.val);
    node_ptr = node_ptr.next;}
  return vals;
}
