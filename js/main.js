let burger = document.querySelector("#burger-button");
let burgerCon = document.querySelector("#burger-con");

function hamburgerMenu() {
  burger.classList.toggle("toggle");
  burgerCon.classList.toggle("slide");
}

burger.addEventListener("click", hamburgerMenu, false);
