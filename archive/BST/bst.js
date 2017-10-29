/*
  bst.js
  leif anderson 9/15/17
*/

// Binary Tree
//
class BinTree {

  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  // process_node is a function that determines where
  // to insert by comparing val to this.val
  //
  push(node, process_node = this.numeric_ordinal) { // makes a BST by default
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

  // where process_node is the same function used in push
  //
  search(val, process_node = this.numeric_ordinal) {
    return this;
  }

  // need to leave a way for process_node to ret ?
  traverse(node, process_node = this.node_out) {
    if (!node) return;
    this.traverse(node.left, process_node);
    process_node(node); // in-order !!!
    this.traverse(node.right, process_node);
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
