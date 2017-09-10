/* merge_sort.js */

// arr1 is longer or equal in length to arr2
// arr1 and arr2 are sorted
//
function merge (arr1, arr2) {
  var ret_array = [];
  var len1 = arr1.length;
  var len2 = arr2.length;
  var index1 = 0;
  var index2 = 0;
  while (index1 < len1 && index2 < len2) {
    if (arr1[index1] < arr2[index2]) {
      ret_array.push(arr1[index1]);
      index1++;
    }
    else { // grow arr1 and increment counters
      ret_array.push(arr2[index2]);
      //arr1.splice(index1, 0, arr2[index2]);
      //index1++;
      //len1++;
      index2++;
    }
  }
  while (index2 < len2) {  // append any remaining elements from arr2
    ret_array.push(arr2[index2]);
    index2++;
  }
  return ret_array;
}

// the classic! O(n log n)
//
function merge_sort(arr) {
  if (arr.length < 2) return arr;
  else {
    var split_point = arr.length/2;
    var left = arr.slice(0, split_point);
    var right = arr.slice(split_point, arr.length);
    return merge(merge_sort(left),merge_sort(right));
  }
}

function test_merge_sort(arr_size) {
  test_array = [];
  for (var i=0; i<arr_size; i++) test_array[i] = Math.round(1 + (Math.random() * (arr_size - 1)));
  var start_time = Date.now()/1000;
  console.time('x');

  var ret = merge_sort(test_array);
  console.timeEnd('x');

  var end_time = Date.now()/1000;
  console.log(end_time - start_time);
  return ret;
}

//x = [1,17,-2,0,9,6,7,11,2000,-10, 17, 100000];
//console.log(merge_sort(x));

function test_merge1() { // big arrays !!!
  var array1 = [];
  var array2 = [];
  var ret = [];
  for (var i=0; i<10000000; i++) array1[i] = i;
  for (var j=0; j<10000000; j++) array2[j] = j + 10000000;
  var start_time = Date.now()/1000;
  ret = merge(array1, array2);
  var end_time = Date.now()/1000;
  console.log(end_time - start_time);
  return ret;
}

function test_merge2() { // out of order, worst possible case
  var array1 = [];
  var array2 = [];
  var ret = [];
  for (var i=0; i<200000; i++) array1[i] = i;
  for (var j=0; j<200000; j++) array2[j] = j + 200000;
  var start_time = Date.now()/1000;
  ret = merge(array2, array1);
  var end_time = Date.now()/1000;
  console.log(end_time - start_time);
  return ret;
}

function test_merge3() { // arrays share values
  var array1 = [];
  var array2 = [];
  var ret = [];
  for (var i=0; i<200000; i++) array1[i] = i;
  for (var j=0; j<200000; j++) array2[j] = j + 1;
  var start_time = Date.now()/1000;
  console.time('x');
  ret = merge(array1, array2);
  console.timeEnd('x');
  var end_time = Date.now()/1000;
  console.log(end_time - start_time);
  return ret;
}

//test_merge_sort(100000);
test_merge_sort(100000000);
