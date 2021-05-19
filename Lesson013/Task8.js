// Implement following function

const weekOfMonth = (date) => {
  let dayOfWeek = date.getDay();
  let dayOfMonth = date.getDate() - dayOfWeek + 6;
  return Math.ceil(dayOfMonth / 7);
};

console.log(weekOfMonth(new Date(2017, 10, 9)));
