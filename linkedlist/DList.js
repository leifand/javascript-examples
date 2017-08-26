/*
  dlist.js
  Leif Anderson 8/10/17
*/

// Node
//
function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}
// Double Linked List
//
function DList() {
  this.head = null;
  this.tail = null;
  this.len = 0;
}
DList.prototype.pushFront = function(val) {
  node = new Node(val);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }

  node.next = this.head;
  this.head.prev = 
  this.head = node;

  this.len++;
  return node;
}
DList.prototype.popFront = function() {
  if(this.head == null) return null;
  if(this.head.next == null) this.tail = null;
  ret_node = this.head;
  this.head = this.head.next;
  this.head.prev = null;
  this.len--;
  return ret_node;
}
DList.prototype.pushRear = function(val) {
  node = new Node(val);
  if(this.len == 0) {
    this.head = node;
    this.tail = node;}
  else {
    node.prev = tail;
    tail = node;}
  this.len++;
  return this;
}
DList.prototype.popRear = function() {
  /*if(this.head == null) return null;
  ret_node = this.head;
  this.head = this.head.next;
  this.len--;
  return ret_node;*/
}
DList.prototype.listLength = function() {
  return this.len;
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
DList.prototype.isValid = function () {

}
DList.prototype.getVals = function() {
  vals = [];
  node_ptr = this.head;
  while(node_ptr){
    vals.push(node_ptr.val);
    node_ptr = node_ptr.next;}
  return vals;
}
