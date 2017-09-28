function puzzle04(arrayOne, arrayTwo) {
    var i = 0, j, l = 0;
    while (i < arrayOne.length) {
        if (arrayOne[i] === -1) {
            i++;
            continue;
        }
        if (arrayTwo[0] < arrayOne[i]) {
            [arrayOne[i], arrayTwo[0]] = [arrayTwo[0], arrayOne[i]];
            j = 0;
            while (arrayTwo[j] > arrayTwo[j + 1]) {
                [arrayTwo[j], arrayTwo[j + 1]] = [arrayTwo[j + 1], arrayTwo[j]];
                j++;
            }
        }
        arrayOne[l++] = arrayOne[i++];
    }
    j = 0;
    while (l < arrayOne.length) {
        arrayOne[l++] = arrayTwo[j++];
    }
    return arrayOne;
}

function merge_sort(arr) {
  if (arr.length < 2) return arr;
  else {
    var split_point = arr.length/2;
    var left = arr.slice(0, split_point);
    var right = arr.slice(split_point, arr.length);
    return puzzle04(merge_sort(left),merge_sort(right));
  }
}

function test_merge_sort(arr_size) {
  test_array = [];
  for (var i=0; i<arr_size; i++) test_array[i] = Math.round(1 + (Math.random() * (arr_size - 1)));
  console.time('x');

  var ret = merge_sort(test_array);
  console.timeEnd('x');

  return ret;
}

var arr = [];
arr = test_merge_sort(1000);
console.log(arr);
