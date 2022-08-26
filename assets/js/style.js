let btn = document.querySelector(".hamburger");
let mnav = document.querySelector(".mobilenav");
let links = document.querySelectorAll(".mobilenavlink");
let links2 = [...links];
btn.addEventListener("click", function () {
  if (mnav.classList.contains("appear")) {
    mnav.classList.remove("appear");
  } else {
    mnav.classList.add("appear");
  }
});

links2.forEach(function (params) {
  params.addEventListener("click", function () {
    mnav.classList.add("appear");
  });
});
