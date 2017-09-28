/*
  minheap.js
  leif anderson 9/25/17
*/

class MinHeap {
  constructor() {
    // a minheap never stores a value at it's root
    this.heap_array = ['#'];
  }

  insert(val) {
    let idx = this.heap_array.length;
    for(; idx > 1 && val < this.heap_array[Math.floor(idx/2)]; idx = Math.floor(idx/2))
      this.heap_array[idx] = this.heap_array[Math.floor(idx/2)];
    this.heap_array[idx] = val;
  }
}

function test_minheap(array_size) {
  test_array = [array_size];
  for (let i = 0; i < array_size; i++) test_array[i] = Math.round(1 + (Math.random() * (array_size - 1)));
  console.time('test');
  let test_heap = new MinHeap();
  for (let j = 0; j < array_size; j++) {
    test_heap.insert(test_array[j]);
  }
  console.timeEnd('test');
  return test_heap;
}

x = test_minheap(50000000);
