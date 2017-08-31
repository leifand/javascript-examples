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
  this.transition_array = new Array[max_transitions]; // accessed via hash
}

FSM.prototype.hash = function(in_source_state, in_event) {
  var i = 0;
  var where = ((in_event << 8) + in_source_state) % this.max_transitions;
  while();
  return 0;
}

FSM.prototype.hash = function(in_event) {
  return 0;
}

FSM.prototype.define_transition = function(in_source, in_destination, in_event, in_index) {
  return 0;
}

FSM.prototype.control = function(in_event, params[]) {
  return 0;
}

FSM.prototype.generateEvent = function(in_event, params[]) {
  return 0;
}

// Abstract Event Handler class - to be subclassed and implemented by user
//
function AbstractEventHandler(num_transitions) {
  this.functions = new Array[num_transitions];
}

AbstractEventHandler.prototype.fill_handlers_array = function(); // virtual
