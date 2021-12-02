// local reviews data
const review = [
  {
    id: 1,
    name: "Muhammad Awais",
    job: " Web Developer",
    img: "https://lh3.googleusercontent.com/p/AF1QipO2wp4Hwgvqt-wxaIaAfu0s4kDXdLYxgKdpISWr=w600-h0",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Hamza Tahir",
    job: "Developer",
    img: "https://scontent.flhe2-2.fna.fbcdn.net/v/t1.6435-9/46440586_210926609806633_2528771963862646784_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFI1C9R-rmMlxrUK8T36vii2yAsBlp3jSDbICwGWneNIG1-C_cBK2dQA8c9pvCv1XQUUpW5D9B-arWo0eLQxuVN&_nc_ohc=fexAkBiZV70AX9IG_Qv&_nc_ht=scontent.flhe2-2.fna&oh=dc8c1a649f55bb87eeaff23214dfa0bc&oe=61CB687E",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "waqas Ahmad",
    job: "Graphic Designer",
    img: "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.6435-9/64362383_621361665017642_6064328439941300224_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG0tFjdckoqGNJF5N2wqdTbyUc_cfVYUjLJRz9x9VhSMrQGV2B_9oZ4ZSpsM9qVB0Mz0k7_7qJ8Xt3v9xX8q45p&_nc_ohc=vWBb0DaJ-GIAX8SZbe0&_nc_ht=scontent.flhe2-1.fna&oh=bb5c52eb3e10507bec81f300ab7f5f7d&oe=61CD911B",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Razzaq",
    job: "Student",
    img: "https://scontent.flhe2-2.fna.fbcdn.net/v/t1.6435-9/76727002_182478502873440_6675259023509422080_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFT-lEEWcoHXjkSWHDXy1MhbL_wBnWSIR5sv_AGdZIhHlBo3W0-RWHqxHpFS7IOivYTT4mLi7zmYSqNpfVBRJqZ&_nc_ohc=SIu3R7ZDXQEAX9OMLZn&_nc_ht=scontent.flhe2-2.fna&oh=e8bbcb6c9a15a22a0e94fdd3092371b1&oe=61CC7888",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 3;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
// show person based on items
function showPerson(person) {
  const item = review[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextbtn.addEventListener("click", function name() {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevbtn.addEventListener("click", function name() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson();
});
// show random person
randombtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * review.length);
  console.log(currentItem);
  showPerson();
});
