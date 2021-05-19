const obj = {
  name: [],

  set _name(value) {
    value.split(", ").forEach((item) => {
      obj.name.push([item, item.length]);
    });
  },

  get _name() {
    return obj.name;
  },
};
console.log(obj._name);
obj._name = "Vrezh, Artavazd";
console.log(obj._name);
