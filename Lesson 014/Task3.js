let obj = Object.create(null);

let key = ("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]);
