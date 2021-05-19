/* The input is object, which keys are student's names and values are array of their scores. Find the
student with the best average score.*/

let obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};
function getBestStudient(obj) {
  let averages = [];
  for (let key in obj) {
    let average = obj[key].reduce(function (acc, currentValue) {
      return acc + currentValue;
    }, 0);
    averages.push(average / obj[key].length);
  }
  let maxScore = Math.max(...averages);
  let maxKey = averages.indexOf(maxScore);
  return Object.keys(obj)[maxKey];
}

console.log(getBestStudient(obj));
