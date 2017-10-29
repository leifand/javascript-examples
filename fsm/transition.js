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

exports.Transition = Transition;
