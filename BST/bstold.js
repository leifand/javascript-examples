/*  bst.js
    leif anderson 9/13/17
*/


// Node helper class
//
class Node {

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
} // Node for bst

// Binary Tree (serch)
//
class BST {

  constructor() {
    this.root = null
  }
  /*addNode()
    var newNode = new bstNode(value);
    if(!this.root){
        this.root = newNode;
        return this;
    }
    if(value > node.value && !node.right){
        node.right = newNode;
        return this;
    }
    if(value <= node.value && !node.left){
        node.left = newNode;
        return this;
    }
    if(value > node.value){
        return this.add(value, node.right);
    } else {
        return this.add(value, node.left);
    }*/
  addNode(tree = this.root, val) {
    console.log(tree)
    if (!tree) tree = new Node(val)
    else if (val < tree.val) addNode(tree.left, val)
    else addNode(tree.right, val)
    console.log('leaving',tree)
    return tree
  }

  /*addNode(tree, val) {
    let node = new Node(val)
    if (!this.root) this.root = node // special case
    if (!tree) tree = node
    if (val < tree.val) this.addNode(tree.left, val)
    else this.addNode(tree.right, val)
  }*/

  search(tree, val) {
    if (!tree || tree.val == val) return tree
    if (val < tree.val) return this.search(tree.left, val)
    else return this.search(tree.right, val)
  }

  traverse(tree, order = 'pre', process_node) {
    if (!tree) return
    if (order == 'pre') process_node(tree.val)
    traverse(tree.left, process_node)
    if (order == 'in') process_node(tree.val)
    traverse(tree.right, process_node)
    if (order == 'post') process_node(tree.val)
  }

  count(node) {
    let counter = 0
    traverse(node, (counter) => {
      counter++
      console.log(node.val)
    })
    return counter
  }
}

var x = new BST()
console.log(x)
x.addNode(x.root, 10)
console.log(x)
x.addNode(x.root, 5)
x.addNode(x.root, 15)
console.log(x)

/*
ublic class BinarySearchTree {
      …

      public boolean remove(int value) {
            if (root == null)
                  return false;
            else {
                  if (root.getValue() == value) {
                        BSTNode auxRoot = new BSTNode(0);
                        auxRoot.setLeftChild(root);
                        boolean result = root.remove(value, auxRoot);
                        root = auxRoot.getLeft();
                        return result;
                  } else {
                        return root.remove(value, null);
                  }
            }
      }
}
public class BSTNode {
      …

      public boolean remove(int value, BSTNode parent) {
            if (value < this.value) {
                  if (left != null)
                        return left.remove(value, this);
                  else
                        return false;
            } else if (value > this.value) {
                  if (right != null)
                        return right.remove(value, this);
                  else
                        return false;
            } else {
                  if (left != null && right != null) {
                        this.value = right.minValue();
                        right.remove(this.value, this);
                  } else if (parent.left == this) {
                        parent.left = (left != null) ? left : right;
                  } else if (parent.right == this) {
                        parent.right = (left != null) ? left : right;
                  }
                  return true;
            }
      }

      public int minValue() {
            if (left == null)
                  return value;
            else
                  return left.minValue();
      }
}
*/
