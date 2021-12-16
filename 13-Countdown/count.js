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
let futureDate = new Date(2000, 04, 09, 11, 30, 0);
// new Date(2000, 04, 09, 11, 30, 0) if you pass these values then this show
// otherswise current date time shows
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mintues = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weeks[futureDate.getDay()];
// console.log(weekday);
giveaway.textContent = `giveaway end on ${weekday} ${date} ${month} ${year} ${hours}:${mintues}AM`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s  = 1000ms
  // 1m  = 60s
  // 1hr = 60min
  // 1d = 24hr
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMintue = 60 * 1000;
  // console.log("One Hours:", oneHour);
  // console.log("One Mintue:", oneMintue);
  // console.log("One Day:", oneDay);
  // =================== calculate all values =================================//
}
getRemainingTime();
