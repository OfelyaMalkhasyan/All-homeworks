let fib = function (num) {
  if (num === 0 || num === 1) {
    return num;
  }
  num = fib(num - 2) + fib(num - 1);
  return num;
};
console.log(fib(12));
