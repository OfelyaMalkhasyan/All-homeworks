// Filter
//Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

let filteredArray = arr.filter(function (value) {
  return parseFloat(value);
});
console.log(filteredArray);

//Write a function which remove users with language equals to 'ru'.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

let createNewArray = users.filter((users) => {
  return users.lang !== "ru";
});
console.log(createNewArray); // [{ username: "Nil Armstrong, lang: "ENG" }]

// Write a function which filters object by field.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

let getFelidByFelid = users.filter((users) => {
  return users.splice("}");
});
console.log(getFelidByFelid);
