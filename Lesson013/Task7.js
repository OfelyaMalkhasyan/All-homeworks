// Implement following function

const formatDate = (date) => {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return ` ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
};
console.log(formatDate(new Date("2020-05-14")));
