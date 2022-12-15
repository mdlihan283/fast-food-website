let bars = document.querySelector(".bars i");
let menu = document.querySelector(".menu");
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
