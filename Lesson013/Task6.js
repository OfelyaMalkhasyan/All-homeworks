/* Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the 
week as a string.*/

function getDay(date) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = new Date(date);
  return daysOfWeek[day.getDay()];
}
console.log(getDay("12/07/2016"));
