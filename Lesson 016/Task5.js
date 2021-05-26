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

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }

  play() {
    return `Playing with ${this.favoriteToy}.`;
  }
}
const baby1 = new Baby("Max", "2", "car");

console.log(baby1);
console.log(baby1.play());
