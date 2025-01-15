// Scrool do header
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#header");
  header.classList.toggle("rolagem", this.window.scrollY > 0);
});

// duplicar html repetido
let copy = document.querySelector(".line-skills").cloneNode(true);
document.querySelector(".container-skills").appendChild(copy);

// animações de sections visíveis
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => {
  myObserver.observe(element);
});

const elem_right = document.querySelectorAll(".hidden-right");
elem_right.forEach((element) => {
  myObserver.observe(element);
});

//Função de abrir menu no mobile
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let menuIcon = document.querySelector("#menu-icon");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");

    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  } else {
    menuMobile.classList.add("open");
    
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-x");
  }
}
