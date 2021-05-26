function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  let foods = ["ice-cream", "chocolate", "cake", "pizza", "pasta"];
  if (foods.includes(food) && this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
let user = new Person("John", 30);

console.log(user);
console.log(user.toString());
user.poop();
user.eat("cake");
