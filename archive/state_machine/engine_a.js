/*
  engine_a.js
  prototype state machine alpha
*/

// helper class to FSM
//
function TransitionType() {
  this.source_state = 0;
  this.destination_state = 0;
  this.event = 0;
  this.index = 0;
}

// Finite State Machine class
//
function FSM(event_handler, max_transitions, initial_state) {
  this.event_handler = event_handler;     // the user defined event_handler
  this.max_transitions = max_transitions; // limits the range of hash function
  this.current_state = initial_state;
  this.event_queue = new DList();                     // double linked list impl
  this.transition_array = new Array(max_transitions); // accessed via hash
}

FSM.prototype.hash = function(in_source_state, in_event) {
  var i = 0;
  var where = ((in_event << 8) + in_source_state) % this.max_transitions;
  while((this.transition_array[(where + i)%this.max_transitions] != -1) && (i < this.max_transitions)) i++;
  if (i >= this.max_transitions) return -1;
  else return this.transition_array[(where + i)%this .max_transitions];
}

FSM.prototype.hash = function(in_event) {
  return -1;
}

FSM.prototype.define_transition = function(in_source, in_destination, in_event, in_index) {
  
  return 0;
}

FSM.prototype.control = function(in_event, params) {
  return 0;
}

FSM.prototype.generateEvent = function(in_event, params) {
  return 0;
}

// Abstract Event Handler class - to be subclassed and implemented by user
//
function AbstractEventHandler(num_transitions) {
  this.functions = new Array[num_transitions];
}

AbstractEventHandler.prototype.fill_handlers_array = function() {;} // virtual

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
/*DList.prototype.popRear = function() {
  if(this.head == null) return null;
  ret_node = this.head;
  this.head = this.head.next;
  this.len--;
  return ret_node;
}*/
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
/*DList.prototype.isValid = function () {

}*/
DList.prototype.getVals = function() {
  vals = [];
  node_ptr = this.head;
  while(node_ptr){
    vals.push(node_ptr.val);
    node_ptr = node_ptr.next;}
  return vals;
}
