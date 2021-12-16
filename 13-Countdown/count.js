const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);
// for new current dates
let futureDate = new Date();
// new Date(2000, 04, 09, 11, 30, 0) if you pass these values then this show 
// otherswise current date time shows
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mintues = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weeks[futureDate.getDay()];
console.log(weekday);
giveaway.textContent = `giveaway end on ${weekday} ${date} ${month} ${year} ${hours}:${mintues}AM`;
