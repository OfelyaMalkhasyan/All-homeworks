// to find the sum of a given array.
let sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
};

console.log(sum([1, 2, 3]));

// to find the factorial of a given natural N.
let factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));
