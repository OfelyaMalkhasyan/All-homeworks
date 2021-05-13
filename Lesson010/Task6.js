// Map
//Write a function which returns array of usernames.

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
let getUserNames = users.map((users) => users.username);

console.log(getUserNames); // ['Yuri Gagarin', 'Nil Armstrong']

//Write a function which returns array of lengths of user names
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
let getUsernameLengths = users.map((users) => users.username.length);

console.log(getUsernameLengths); // [12, 13]

// // Write a function which parses string integers. If it's not possible to
// //parse, then add null

let parseInteger = ["1", "2", "34"];
let parseInteger = ["1", "px", "2323"];

let integer = parseInteger.map((parseInteger) =>
  !isNaN(parseInteger) ? Number(parseInteger) : null
);
console.log(integer);
