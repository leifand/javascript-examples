/*
  bst.js
  leif anderson 12/31/17
*/

// Binary Tree
//
class BinTree {

  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  root_value() {
    return this.val;
  }

  left_child() {
    return this.left;
  }

  right_child() {
    return this.right;
  }

  // process_node is a function that determines where
  // to insert or search by comparing node.val to this.val
  //
  push(node, process_node = this.numeric_ordinal) { // BST by default
    if(process_node(node.val, this.val) && !this.right){
        this.right = node;
        return this;
    }
    if(!process_node(node.val, this.val) && !this.left){
        this.left = node;
        return this;
    }
    //if(process_node(node.val, this.val)) {
    //    return this.push(node, process_node);
    //} else {
    this.push(node, process_node);
    //return this;
    //}
  }

  search(val, process_node = this.numeric_ordinal) {
    return this;
  }

  traverse(node, process_node = this.node_out) { // console out by default
    if (!node) return;
    // process_node(node); // pre-order
    this.traverse(node.left, process_node);
    process_node(node); // in-order
    this.traverse(node.right, process_node);
    // process_node(node); // post-order
    return this;
  }

  numeric_ordinal(x, y) {
    if (x > y) return true;
    else return false;
  }

  node_out(node) {
    console.log(node.val);
  }
}

tree = new BinTree(10);
x = new BinTree(5);
tree.push(x);
y = new BinTree(15);
tree.push(y);
console.log(tree);
tree.traverse(tree);
//z = new BinTree(20); //kill me now
//tree.push(z);
//console.log(tree);
