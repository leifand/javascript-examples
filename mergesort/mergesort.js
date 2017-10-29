/*
  mergesort.js
  leif anderson september 2017
*/

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
    else {
      ret_array.push(arr2[index2]);
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
  var test_array = [];
  for (var i=0; i<arr_size; i++) test_array[i] = Math.round(1 + (Math.random() * (arr_size - 1)));
  console.time('test');
  var ret = merge_sort(test_array);
  console.timeEnd('test');
  return ret;
}

//test_merge_sort(100000);
sorted_array = test_merge_sort(50000000);
console.log(sorted_array);
