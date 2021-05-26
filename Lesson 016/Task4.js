function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  let maxDistance = this.tank * this.milesGallon;
  if (this.tank - distance / this.milesPerGallon <= 0) {
    this.odometer += maxDistance;
    this.tank = 0;
    console.log(`I ran out of fuel at ${this.odometer} miles!`);
    return;
  }
  this.odometer += distance;
};

let car1 = new Car("Mercedes", 10);
let car2 = new Car("Toyota", 20);

console.log(car1);
console.log(car1.drive(50));
