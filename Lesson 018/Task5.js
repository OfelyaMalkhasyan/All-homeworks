// Write a recursive function to determine whether all digits of the number are odd or not.

function odd(num) {
  if (num === 0) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  num = Math.trunc(num / 10);
  return odd(num);
}
console.log(odd(153));
