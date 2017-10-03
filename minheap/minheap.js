/*
  minheap.js
  leif anderson 10/3/17
*/

class MinHeap {
  constructor() {
    this.heap_array = ['#'];
  }

  insert(val) {
    let idx = this.heap_array.length;
    while( idx > 1 && val < this.heap_array[Math.floor(idx/2)]) {
      this.heap_array[idx] = this.heap_array[Math.floor(idx/2)];
      idx = Math.floor(idx/2);
    }
    this.heap_array[idx] = val;
  }

  insert2(val) {
    let idx = this.heap_array.length;
    for(; idx > 1 && val < this.heap_array[Math.floor(idx/2)]; idx = Math.floor(idx/2))
      this.heap_array[idx] = this.heap_array[Math.floor(idx/2)];
    this.heap_array[idx] = val;
  }

  // insert3(val) { // whiteboard solution
  //   ;
  // }
} // end MinHeap class

function random_array(array_size) {
  let ret_array = [array_size];
  for (let i = 0; i < array_size; i++) ret_array[i] = Math.round(1 + (Math.random() * (array_size - 1)));
  return ret_array;
}

function test_insert(arr) {
  let len = arr.length;
  console.time('test');
  let test_heap = new MinHeap();
  for (let j = 0; j < len; j++) {
    test_heap.insert(arr[j]);
  }
  console.timeEnd('test');
  return test_heap;
}

function test_insert2(arr) {
  let len = arr.length;
  console.time('test');
  let test_heap = new MinHeap();
  for (let j = 0; j < len; j++) {
    test_heap.insert2(arr[j]);
  }
  console.timeEnd('test');
  return test_heap;
}

a = random_array(17);
console.log(a);
x = test_insert(a);
console.log(x);
console.log('');
//console.log(a);
//y = test_insert2(a);
//console.log(y);

//x = test_minheap(50000000);
// 50 million takes ~1800 ms on my machine, dumps core around 55000000
