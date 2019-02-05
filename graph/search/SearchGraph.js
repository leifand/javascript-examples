/*
    SearchGraph.js
    leif anderson feb 4, 2019

    A searchable graph.
*/

class SearchGraph {

    constructor() {
        this.graph = [];
        this.position = {
            FRONT: Symbol('front'),
            BACK: Symbol('back'),
            INSERT: Symbol('insert')
        }
    }

    add_node(label, state, cost) {

        let make_node = (label, state, cost) => {
            this.label = label;
            this.state = state;
            this.cost = cost;
            this.depth = 0;
            this.links = [];
            this.expanded = false;
            this.tested = false;
            return {'label':this.label,'state':this.state,'cost':this.cost,'depth':this.depth,'links':this.links,'expanded':this.expanded, 'tested':this.tested};
        }
        this.graph.push(make_node(label, state, cost));
    }

    add_link(source, destination) {
        let dest = null;
        for(let i=0; i<this.graph.length; i++) {
            if(this.graph[i].label == destination) {
                dest = this.graph[i];
                break;
            }
        }
        for(let j=0; j<this.graph.length; j++) {
            if(this.graph[j].label == source) {
                this.graph[j].links.push(dest);
                break;
            }
        }
    }

    leaf(node) {
        return (node.links.length == 0);
    }

    reset() {
        for(let i=0; i<this.graph.length; i++) {
            this.graph[i].depth = 0;
            this.graph[i].expanded = false;
            this.graph[i].tested = false;
        }
    }

    trace(node) {
        let indent = '';
        for(let i=0; i<node.depth; i++) indent += ' ';
        console.log(indent,node.depth,node.label);
    }

    expand(node, queue, position) {
       node.expanded = true;
       let next_node = null;
       for(let i=0;i<node.links.length; i++) {
           next_node = node.links[i];
           if(!next_node.tested) {
               next_node.tested = true;
               next_node.depth += 1;
               if(this.position.FRONT == position) {
                   queue.unshift(next_node);
                   break;
               }
               if(this.position.BACK == position) {
                   queue.push(next_node);
                   break;
               }
               if(this.position.INSERT == position) {
                    let inserted = false;
                    next_cost = next_node.cost;
                    for(let j=0; j<queue.length; j++) {
                        if(next_cost < queue[j].cost) {
                            queue.splice(j,0,next_node);
                            inserted = true;
                            break;
                        }
                    }
                    if(!inserted) queue.push(next_node);
                    break;
               }
           }
       } 
    }

    node(label) {
        for(let i=0; i<this.graph.length; i++) {
            if(this.graph[i].label == label) return this.graph[i];
        }
    }

    breadth_first(start_node, goal) {
        let queue = [];
        let test_node = null;
        queue.push(start_node);
        start_node.tested = true; // priming the while
        while(queue.length > 0) {
            test_node = queue.shift();
            this.trace(test_node);
            if(test_node.state == goal) return test_node;
            if(!test_node.expanded) this.expand(test_node, queue, this.position.BACK);                
        }
        return null;
    }
}

const graph = new SearchGraph();

graph.add_node('Dallas','GOAL', 0); // goal
graph.add_node('Fort Worth', 'Fort Worth', 60);
graph.add_node('Arlington','Arlington', 30);
graph.add_node('Plano','Plano', 20);
graph.add_node('Frisco','Frisco', 45);
graph.add_node('Lewisville','Lewisville', 30);
graph.add_node('Denton','Denton', 60);

graph.add_link('Dallas','Arlington');
graph.add_link('Dallas','Plano');
graph.add_link('Dallas','Lewisville');
graph.add_link('Fort Worth','Arlington');
graph.add_link('Fort Worth','Denton');
graph.add_link('Fort Worth','Lewisville');
graph.add_link('Arlington','Dallas');
graph.add_link('Arlington','Fort Worth');
graph.add_link('Arlington','Lewisville');
graph.add_link('Plano','Dallas');
graph.add_link('Plano','Frisco');
graph.add_link('Plano','Lewisville');
graph.add_link('Frisco','Plano');
graph.add_link('Frisco','Denton');
graph.add_link('Lewisville','Arlington');
graph.add_link('Lewisville','Plano');
graph.add_link('Lewisville','Dallas');
graph.add_link('Denton','Fort Worth');
graph.add_link('Denton','Frisco');
graph.add_link('Denton','Lewisville');

let start = graph.node("Frisco");
graph.breadth_first(start, 'GOAL');


//console.log(graph);
//console.log(graph.graph[0].links);