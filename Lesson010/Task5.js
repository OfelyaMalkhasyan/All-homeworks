// Sort

let arr = [4, 3, 2, 1];
let arr2 = [7, 8, 11, 66];

function sortBy(arr, str) {
  if (str === "Asc") {
    arr.sort();
    return arr;
  }
  if (str === "Desc") {
    arr.sort((a, b) => b - a);
  }
  return arr;
}

console.log(sortBy(arr, "Asc")); // [1, 2, 3, 4]
console.log(sortBy(arr2, "Desc")); // [66, 11, 8, 7]
