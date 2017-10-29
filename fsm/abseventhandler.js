// Abstract Event Handler - subclass and implement fill handlers
//
class ABSEventHandler {
  constructor(num_transitions) {
    this.functions = new Array[num_transitions];
  }
  fill_handlers_array(){
    return this;
  }
}

exports.ABSEventHandler = ABSEventHandler;
