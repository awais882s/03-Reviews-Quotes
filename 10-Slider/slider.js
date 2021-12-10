const slides = document.querySelectorAll(".slide");
const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextbtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevbtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
