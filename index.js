function changeBg() {
  let nav = document.querySelector(".nav-div");
  let b5 = document.querySelector(".b5");
  let scrollValue = window.scrollY;
  if (scrollValue > 250) {
    nav.classList.add("changeBg");
    b5.classList.add("changeButtonBg");
  } else {
    nav.classList.remove("changeBg");
    b5.classList.remove("changeButtonBg");
  }
}

window.addEventListener("scroll", changeBg);
