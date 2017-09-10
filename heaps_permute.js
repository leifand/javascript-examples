/*  heaps_permute.js
    leif anderson 9/9/17
*/

// swap
//
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// heaps permutation:
// generate all possible permutations of arr
// where n is arr length
//
function generate_permutations(n, arr, memo) {
  if(n == 1) {
    let out_string = '';
    for(let a = 0; a < arr.length; a++) {
      out_string += arr[a];
      //console.log(out_string); // uncomment to print entire tree
    }
    memo.push(out_string);
  }
  else {
    for(let i = 0; i < n - 1; i++) {
      generate_permutations(n - 1, arr, memo);
      if(n % 2 == 0) swap(arr, i, n - 1);
      else swap(arr, 0, n - 1);
    } // end for
    generate_permutations(n - 1, arr, memo);
  }
}

function heaps_permute(arr) {
  var n = arr.length;
  var permutations = [];
  generate_permutations(n, arr, permutations);
  return permutations;
}

// test
//
x = ['a', 'b', 'c'];
console.log('starting array:');
console.log(x);
var perms = heaps_permute(x); // returns an array of all permutations of x
console.log(perms);
console.log(x.length + '! = ' + perms.length + ' permutations');
