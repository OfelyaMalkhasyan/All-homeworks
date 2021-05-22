// Task 1
const myRegExp = /^\d{6}$|^\d{4}$/;

console.log(myRegExp.test("1234"));

// Task 2
let str = '<> <a href="/"> <input type="radio" checked> <b>';

const REGEXP = /<\w.*?>/g;

console.log(str.match(REGEXP));
//'<a href="/">', '<input type="radio" checked>', "<b>";
