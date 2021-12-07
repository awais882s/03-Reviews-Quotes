// MDN
// The DOM Content Loaded fires when the initial HTML documents has been completely loaded and parsed , without
// waiting for stylesheet , images , and sub frames to finish
// The load event is fired when whole page is loaded ,
// including all dependents resources such as stylesheets and images.
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
