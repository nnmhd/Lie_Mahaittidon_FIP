
/* JS outline 
1-Variable
2-Function
3-Events
*/
let burger = document.querySelector("#burger-button");
let burgerCon = document.querySelector("#header-con");

// Variables
let burgerBtn = document.querySelector("#burger-btn");
let mainNav = document.querySelector("#main-nav");

// Functions
function showMenu() {
  if (!mainNav.classList.contains("hide")) {
    mainNav.classList.add("hide");
    document.querySelector("#header").classList.remove("bg-green");
    document.querySelector("#logo img").src = "images/sq-logo.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger.svg")';
  } else {
    mainNav.classList.remove("hide");
    document.querySelector("#header").classList.add("bg-green");
    document.querySelector("#logo img").src = "images/sq-logo-white.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger-reveal.svg")';
  }
}

// Events
burgerBtn.addEventListener("click", showMenu, false);
