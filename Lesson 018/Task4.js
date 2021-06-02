//  Print sums of all subsets of a given set

function subsetSums(arr, index, lastIndex, sum) {
  if (index > lastIndex) {
    console.log(sum);
    return;
  }

  subsetSums(arr, index + 1, lastIndex, sum + arr[index]);

  subsetSums(arr, index + 1, lastIndex, sum);
}

let arr = [2, 3, 6];
let n = arr.length;

subsetSums(arr, 0, n - 1, 0);
