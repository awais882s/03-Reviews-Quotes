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
    img: "https://lh3.googleusercontent.com/p/AF1QipPN_FXqnXTu6z8Iy2k92RZzyekIbH56TEf8EkH-=w600-h0",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "M AWAIS",
    job: "Graphic Designer",
    img: "https://lh3.googleusercontent.com/p/AF1QipM3BQOzEhfEd3keE7NXab0vdyTE0CY542JB6Opn=w1280-h1280-p-no-v1",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Razzaq",
    job: "Student",
    img: "https://lh3.googleusercontent.com/p/AF1QipNF08zUdanlcCVt1WwvL_oyOy17egZSGP1Vzy4q=w960-h960-n-o-v1",
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
