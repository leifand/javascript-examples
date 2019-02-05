/*
    SearchNode.js
    leif anderson feb 3 2019
    A node object for exploring graph traversal eg. TSP!

    Ok, rewriting this as SearchGraph and internalizing the searchnode structure.
    iheartjavascript ha ha
*/

class SearchNode {

    constructor(label, state) {
        this.label = label;
        this.state = state;
        this.operator = null;
        this.links = [];
        this.depth = 0;
        this.expanded = false;
        this.tested = false;
        this.cost = 0.0;
    }

    add_link(node) {
        this.links.push(node);
    }

    leaf() {
        return (this.links.length == 0);
    }

    reset() {
        this.depth = 0;
        this.expanded = false;
        this.tested = false;
    }

    trace() {
        let indent = '';
        for(let i=0; i<this.depth; i++) indent += ' ';
        return indent+this.depth+' '+this.label;
    }

    expand(queue, position) {
        console.log("expanding: ", this.label);
        this.expanded = true;
        for(node in this.links) {
            console.log(this.links);
            let next_node = node;
            console.log(node);
            if(!next_node.tested) {
                next_node.tested = true;
                next_node.depth += 1;
                if(position == 0) { // breadth-first
                    queue.unshift(next_node);
                    break;
                }
                if(position == 2) { // depth-first
                    queue.push(next_node);
                    break;
                }
                if(position == 1) { // best-fit
                    let inserted = false;
                    next_cost = next_node.cost;
                    for(let j=0; j<queue.length; j++) {
                        if(next_cost < queue[j].cost) {
                            queue.splice(j,0,next_node);
                            inserted = true;
                            break;
                        }
                    } // ok, just add next_node to the end ...
                    if(!inserted) queue.push(next_node);
                }
            }
        }
        console.log("finished expanding: ", this.label);
    }
}

const graph = {};

let node = new SearchNode('Dallas', null);

graph.dallas = node;
graph.dallas.cost = 0; // Dallas is the starting point ...
graph.dallas.add_link(graph.midland);
graph.dallas.add_link(graph.amarillo);
graph.dallas.add_link(graph.johnsoncity);

node = new SearchNode('El Paso', 'GOAL');

graph.elpaso = node;
graph.elpaso.cost = 800; // 800 miles from Dallas ...
graph.elpaso.add_link(graph.midland);
graph.elpaso.add_link(graph.johnsoncity);

node = new SearchNode('Amarillo', null);

graph.amarillo = node;
graph.amarillo.cost = 550; 
graph.amarillo.add_link(graph.midland);
graph.amarillo.add_link(graph.dallas);

node = new SearchNode('Midland', null);

graph.midland = node;
graph.midland.cost = 450;
graph.midland.add_link(graph.dallas);
graph.midland.add_link(graph.amarillo);
graph.midland.add_link(graph.elpaso);

node = new SearchNode('Johnson City', null);
null
graph.johnsoncity = node;
graph.johnsoncity.cost = 400;
graph.johnsoncity.add_link(graph.dallas);
graph.johnsoncity.add_link(graph.elpaso);

console.log(graph);

function breadth_first(initial_node, goal_state)  { // complete search of state space, returns shortest path
    let queue = [];
    queue.push(initial_node);
    initial_node.tested = true;
    while(queue.length > 0) {
        let test_node = queue.shift();
        console.log(test_node.trace());
        if(test_node.state == goal_state) return test_node;
        if(!test_node.expanded) test_node.expand(queue,0);
    }
    return null;
}

console.log(breadth_first(graph.dallas,'GOAL'));