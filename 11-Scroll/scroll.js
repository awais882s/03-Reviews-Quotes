// for each function examples
// const nmbrs = [2, 3, 4, 5, 6]; //array of numbers
// nmbrs.forEach((n, i, arr) => {
//   // n=elements // i=index //
//   arr[i] = n + 2;
// });
// nmbrs.forEach((n) => console.log(n));
// arrow functions simple method
// const sum = function () {
//   const a = 10;
//   const b = 10;
//   return a + b;
// };
// console.log(sum());
// arrow functions with es6 method
// const sum = () => {
//   const a = 10;
//   const b = 30;
//   return a + b;
// };
// console.log(sum());
// arrow functions another simple when one statements method
// let a = 30;
// let b = 20;
// const sum = () => a + b;
// console.log(sum());

// another methods

// const sum = (a, b) => a + b;
// console.log(sum(50, 50));
// filter functions even and odd function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const odd = numbers.filter((n) => n % 2 == 0);
// console.log(odd);
// const nmb = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const even = nmb.filter((n) => n % 2 !== 0);
// console.log(even);

// ==================== SCROLL PROJECT ==================================//

// ******************* set date ***************************

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********************* close links **********************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ******************** fixed navbar ***************************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
