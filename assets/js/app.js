let bars = document.querySelector(".bars i");
let menu = document.querySelector(".menu");
let menuLi = document.querySelectorAll(".menu li");
let faXmark = document.querySelector(".fa-xmark");
bars.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  bars.classList.remove("fa-bars");
  bars.classList.add("fa-xmark");
  if (!menu.classList.contains("active")) {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  }
});

menuLi.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.remove("active");
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  });
});
