// Abstract Event Handler - subclass and implement fill handlers
//
class AbsHandler {
  constructor(num_transitions) {
    this.functions = [num_transitions];
  }
  load_handlers(){
    return this;
  }
}

exports.AbsHandler = AbsHandler;
