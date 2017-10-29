const DListNode = require('./dlistnode.js').DListNode;

class DList {

  constructor () {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  add(value) {
      let node = new DListNode(value);
      if (!this.head) {
          this.head = node;
          this.tail = node;
          this._length++;
          return node;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this._length++;
      return node;
  }

  prepend(value) {
      let node = new DListNode(value);
      if (!this.head) {
          this.head = node;
          this.tail = node;
          this._length++;
          return node;
      }
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this._length++;
      return node;
  }

  insert(index, value) {
      let node = new DListNode(value);
      if (index <= -1 || index >= this._length) {
          throw new Error("DList index out of range.");
      }
      if (!this.head) {
          this.head = node;
          this.tail = node;
          this._length++;
          return node;
      }
      if (index === 0) {
          node = this.prepend(value);
          return node;
      }
      if (index === this._length - 1) {
          node = this.add(value);
          return node;
      }
      let currentNode = this.nodeAt(index);
      let previous = currentNode.prev;
      previous.next = node;
      node.prev = previous;
      currentNode.prev = node;
      this._length++;
      return node;
  }

  remove(index) {
      let nodeToDelete = null;
      if (index <= -1 || index >= this._length) {
          throw new Error("DList index out of range.");
      }
      if (this.head === this.tail) {
          nodeToDelete = this.head;
          this.head = null;
          this.tail = null;
          return nodeToDelete;
      }
      if (index === 0) {
          nodeToDelete = this.head;
          this.head = this.head.next;
          this.head.prev = null;
          this._length--;
          return nodeToDelete;
      }
      if (index === this._length - 1) {
          nodeToDelete = this.tail;
          this.tail = this.tail.prev;
          this.tail.next = null;
          this._length--;
          return nodeToDelete;
      }
      nodeToDelete = this.nodeAt(index);
      let previous = nodeToDelete.previous;
      let next = nodeToDelete.next;
      previous.next = next;
      next.prev = previous;
      this._length--;
      return nodeToDelete;
  }

  nodeAt(index) {
      let currentNode = this.head;
      let count = 0;
      if (index <= -1 || index >= this._length) {
          throw new Error("DList index out of range.");
      }
      while (count < index) {
          count++;
          currentNode = currentNode.next;
      }
      return currentNode;
  }

  find(value) {
      let currentNode = this.head;
      while (currentNode) {
          if (currentNode.value == value) {
              return currentNode;
          }
          currentNode = currentNode.next;
      }
      return null;
  }

  first() { return this.head; }

  last() { return this.tail; }

  size() { return this._length; }

  toArray() {
      let array = [];
      let currentNode = this.head;
      while (currentNode) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
  }
}

exports.DList = DList;
