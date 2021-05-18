// Write function that will group by some rule

let groupBy = (arr, func) => {
  let keys = [];
  let sum = 0;
  arr.forEach((element) => {
    keys.push(func(element));
  });
  let obj = keys.reduce((acc, currentValue) => {
    if (acc.hasOwnProperty(keys[sum]) === false) {
      acc[currentValue] = [arr[sum++]];
    } else {
      acc[currentValue].push(arr[sum++]);
    }
    return acc;
  }, {});
  return obj;
};
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], (i) => i.length));
