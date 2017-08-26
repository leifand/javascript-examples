/* merge_sort.js */

function merge (arr1, arr2) { // arr2 merged into arr1

  var len1 = arr1.length;
  var len2 = arr2.length;
  var index1 = 0;
  var index2 = 0;

  // while !(index1 > len1 || index2 > len2)
  while (index1 < len1 && index2 < len2) { // fails on?

    if (arr1[index1] < arr2[index2])
      index1++;
    else { // grow arr1 and increment counters
      arr1.splice(index1, 0, arr2[index2]);
      index1++;
      len1++;
      index2++;
    }
  }

  // append any remaining elements from arr2
  while (index2 < len2) {
    arr1.push(arr2[index2]);
    index2++;
  }

  return arr1;
}

function merge_sort(arr) {
  var mid = arr.length / 2;
  left = arr.slice(0, mid);
  right = arr.slice(mid);
  if (left.length == 1 && right.length == 1)
    return merge(left, right);
  else if (left.length == 1 && right.length !=1)
    return merge(merge_sort(left), right);
  else
    return merge(merge_sort(left), merge_sort(right));
}
