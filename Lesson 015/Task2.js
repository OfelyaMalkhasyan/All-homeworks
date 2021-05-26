let airPlane = {
  name: "name",
  isFlying: false,
  takeOff() {
    return (airPlane.isFlying = true);
  },
  land() {
    return (airPlane.isFlying = false);
  },
};
let obj = {
  __proto__: airPlane,
  isFlying: false,
};
console.log(obj.takeOff());
console.log(obj.land());
