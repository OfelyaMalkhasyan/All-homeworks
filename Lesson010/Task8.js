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
console.log(sumOfNumbers);

// Write a function which calculates average age of users.

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

let b = { a: 1, b: 2, a: 3 };
for (let key in b) {
  console.log(b[b]);
}
