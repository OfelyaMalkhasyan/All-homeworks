//Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 18) {
    newArray.push(arr[i]);
  }
}

let sumOfNumbers = newArray.reduce(function (acc, val) {
  return acc + val;
});
console.log(sumOfNumbers); //1347

// Write a function which calculates averageOfAge age of users.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

let age =
  users.reduce(function (acc, val) {
    return acc + val.age;
  }, 0) / users.length;
console.log(age); //55
