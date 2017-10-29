/*
  fsm.js Finite State Machine engine
  leif anderson 9/14/17
*/
const Transition = require('./transition.js').Transition;
const Event = require('./event.js').Event;
const DList = require('./dlist.js').DList;
const ABSEventHandler = require('.abseventhandler.js').ABSEventHandler;

class FSM {
  const INTERNAL_ERROR = 0;
  constructor(event_handler, max_transitions, initial_state) {
    this.event_handler = event_handler;     // the user defined event_handler
    this.max_transitions = max_transitions; // limits the range of hash function
    this.current_state = initial_state;
    this.event_queue = new DList();                     // double linked list impl
    this.transition_array = new Array(max_transitions); // accessed via hash
  }
  hash(in_source_state, in_event) {
    var i = 0;
    var where = ((in_event << 8) + in_source_state) % this.max_transitions;
    while((this.transition_array[(where + i)%this.max_transitions] != -1) && (i < this.max_transitions)) i++;
    if (i >= this.max_transitions) return -1;
    else return this.transition_array[(where + i)%this .max_transitions];
  }
  hash(in_event) {
    var i = 0;
    var where = ((in_event << 8) + this.current_state) % this.max_transitions;
    while((this.transition_array[(where + i)%this.max_transitions] != -1) && (i < this.max_transitions)) i++;
    if(i >= this.max_transitions) return -1;
    else return this.transition_array[(where + i)%this .max_transitions];
  }
  define_transition(in_source, in_destination, in_event, in_index) {
    index = hash(in_source, in_event);
    if(index != -1) {
      this.transition_array[index].source_state = in_source;
      this.transition_array[index].destination_state = in_destination;
      this.transition_array[index].event = in_event;
      this.transition_array[index].index = in_index;
    }
    return index;
  }
  control(in_event, params=null) {
    var result = false;
    var trans_num = -1;
    this.event_queue.add(in_event, params);
    var an_event = this.event_queue.pop();
    while(an_event) {
      if((trans_num = this.hash(an_event.id)) >= 0) {
        if(this.transition_array[trans_num].index == -1) {
          this.generateEvent(this.INTERNAL_ERROR);
        }
        else { // execute event handler
          result = this.event_handler.functions[this.transition_array[trans_num].index](an_event.params);
          this.current_state = this.transition_array[trans_num].destination_state;
        }
      }
      else {
        this.generateEvent(this.INTERNAL_ERROR);
      }
      an_event = this.event_queue.pop();
    }
    return result;
  }
  generateEvent(in_event, params=null) {
    this.event_queue.add(in_event, params);
  }
}

exports.FSM = FSM;
