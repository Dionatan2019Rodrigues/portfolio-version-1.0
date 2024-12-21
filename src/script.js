window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#header");
  header.classList.toggle("rolagem", this.window.scrollY > 0);
});

let copy = document.querySelector(".line-skills").cloneNode(true);
document.querySelector('.container-skills').appendChild(copy)