/*
  fsm.js Finite State Machine engine
  leif anderson 9/14/17
*/

// Transition helper for FSM
//
class Transition {
  constructor() {
    this.source_state = 0;
    this.destination_state = 0;
    this.event = 0;
    this.index = 0;
  }
  constructor(in_source, in_destination, in_event, in_index) {
    this.source_state = in_source;
    this.destination_state = in_destination;
    this.event = in_event;
    this.index = in_index;
  }
}

class FSM {
  constructor(event_handler, max_transitions, initial_state) {
    this.event_handler = event_handler;     // the user defined event_handler
    this.max_transitions = max_transitions; // limits the range of hash function
    this.current_state = initial_state;
    this.event_queue = new DList();                     // double linked list impl
    this.transition_array = new Array(max_transitions); // accessed via hash
  }
  hash = function(in_source_state, in_event) {
    var i = 0;
    var where = ((in_event << 8) + in_source_state) % this.max_transitions;
    while((this.transition_array[(where + i)%this.max_transitions] != -1) && (i < this.max_transitions)) i++;
    if (i >= this.max_transitions) return -1;
    else return this.transition_array[(where + i)%this .max_transitions];
  }

  // Abstract Event Handler class - to be subclassed and implemented by user
  //
  class AbstractEventHandler {
    constructor(num_transitions) {
      this.functions = new Array[num_transitions];
    }
    fill_handlers_array = function() {;} // virtual
}
