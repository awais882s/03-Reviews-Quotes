const togglebtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
togglebtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});
closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
