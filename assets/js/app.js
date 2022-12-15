let bars = document.querySelector(".bars i");
let menu = document.querySelector(".menu");
let faXmark = document.querySelector(".fa-xmark");
bars.addEventListener("click", (e) => {
  if (e) {
    menu.classList.toggle("active");
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {
    faXmark.classList.add("fa-bars");
  }
});
