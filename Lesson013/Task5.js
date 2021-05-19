/* Each year has 365 or 366 days. Given a string date representing a Gregorian calendar 
date formatted as month/day/year,return the day-number of the year. */

function dayOfYear(date) {
  let thatDay = new Date(date);
  let startCount = new Date(thatDay.getFullYear(), 0, 0);
  let diff = thatDay - startCount;
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return day;
}

console.log(dayOfYear("12/13/2020"));
