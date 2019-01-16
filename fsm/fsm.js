/*
  fsm.js Finite State Machine engine
  leif anderson 9/14/17
*/

class FSM {
  INTERNAL_ERROR = 0;
  constructor(event_handler, max_transitions, initial_state) {
    this.event_handler = event_handler;
    this.max_transitions = max_transitions;
    this.current_state = initial_state;
    this.event_queue = [];
    this.transition_array = [max_transitions];
  }

  hash(source_state, event) {
    let i;
    let where = ((event << 8) + source_state) % this.max_transitions;
    while ((this.transition_array[(where + i) % this.max_transitions] != -1) && (i < this.max_transitions)) i++;
    if (i >= this.max_transitions) return -1;
    else return this.transition_array[(where + i) % this.max_transitions];
  }

  hash(event) {
    let i;
    let where = ((event << 8) + this.current_state) % this.max_transitions;
    while ((this.transition_array[(where + i) % this.max_transitions] != -1) && (i < this.max_transitions)) i++;
    if (i >= this.max_transitions) return -1;
    else return this.transition_array[(where + i) % this.max_transitions];
  }

  define_transition(source, destination, event, index) {
    let index = hash(source, event);
    if (index != -1) this.transition_array[index] = {'source':source, 'destination':destination, 'event':event, 'index':index};
    return index;
  }

  control(event, params=null) {
    let result = false;
    let trans_num = -1;
    this.event_queue.push({'id':event, 'params':params});
    let an_event = this.event_queue.shift;
    while(an_event) {
      if ((trans_num = this.hash(an_event.id)) >= 0) {
        if (this.transition_array[trans_num].index == -1) this.generate_event(this.INTERNAL_ERROR);
        else {
          result = this.event_handler.functions[this.transition_array[trans_num].index](an_event.params);
          this.current_state = this.transition_array[trans_num].destination;
        }
      } else this.generate_event(this.INTERNAL_ERROR);
      an_event = this.event_queue.shift();
    }
    return result;
  }

  generate_event(event, params=null) {
    this.event_queue.push({'id':event, 'params':params});
  }
}