//Add brackets between letters.

let str = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
function addBrackets(str) {
  if (str.length === 0) {
    console.log("string is empty");
  }
  if (str.length === 1 || str.length === 2) {
    return str;
  }
  return (
    str[0] +
    "(" +
    addBrackets(str.slice(1, str.length - 1)) +
    ")" +
    str[str.length - 1]
  );
}
console.log(addBrackets(str));
