/*
    SearchNode.js
    leif anderson feb 3 2019
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
        this.expanded = true;
        for(let i=0; i<this.links.length; i++) {
            next_node = this.links[i];
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
    }
}

const graph = {};

let node = new SearchNode('Dallas', null);

graph.dallas = node;

node = new SearchNode('El Paso', null);

graph.elpaso = node;

node = new SearchNode('Amarillo', null);

graph.amarillo = node;

node = new SearchNode('Midland', null);

graph.midland = node;

node = new SearchNode('Johnson City', null);

graph.johnsoncity = node;

graph.dallas.add_link(graph.midland);
graph.dallas.add_link(graph.amarillo);
graph.dallas.add_link(graph.johnsoncity);

graph.elpaso.add_link(graph.midland);
graph.elpaso.add_link(graph.johnsoncity);

console.log(graph);