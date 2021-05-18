//Write function that will zip arrays into object

let obj1 = ["a", "b", "c"];
let obj2 = [1, 2];

let obj = {};
obj1.forEach(function (item, index) {
  if (obj2[index] == undefined) {
    obj2[index] = null;
  }
  obj[item] = obj2[index];
});
console.log(obj);
