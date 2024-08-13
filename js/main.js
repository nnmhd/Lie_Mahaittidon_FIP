
/* JS outline 
1-Variables & Objects
2-Functions
  -Show Burger Menu
  -The Story Controller 
3-Events
*/
let burger = document.querySelector("#burger-button");
let burgerCon = document.querySelector("#header-con");

// Variables
const burgerBtn = document.querySelector("#burger-btn");
const mainNav = document.querySelector("#main-nav");
const flavorList = document.querySelectorAll("#flavor-list li");
const flavorLink = document.querySelectorAll(".flavor a");
const storyText = document.querySelector("#story-box p");
const previousStory = document.querySelector("#previous-story");
const nextStory = document.querySelector("#next-story");
const storyShape = document.querySelector(".shape0");
const addBtn = document.querySelectorAll(".add-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const cardBtnL = document.querySelector(".left-slide");
const cardBtnR = document.querySelector(".right-slide");
const cardBox = document.querySelector("#cards-box");
let itemQuantity = document.querySelectorAll(".qty");
const showFlavorPop = document.querySelector("#show-detail");
const flavorLightBox = document.querySelector("#explore-light-box");
const promoLb = document.querySelector("#light-box");
const closeBtn = document.querySelector("#close-lb");
const promoBanner = document.querySelector("#promo-banner-con");

// Objects
const story = [
  {
    text: `In the late 1980s, General Mills introduced Squeezit, a fun, queezable juice drink with colorful bottles and playful names like “Silly Billy Strawberry,” capturing kids' imaginations.`,
  },
  {
    text: `By the 1990s, Squeezit became a cultural icon with its portable design and vibrant flavors. Despite its popularity, it was discontinued in the early 2000s, yet remained beloved.`,
  },
  {
    text: `Nostalgia for Squeezit led to limited reissues, delighting original fans and introducing a new generation to its joy. Squeezit remains a symbol of 90s childhood fun.`,
  },
];

/* 
Changing cans and badges 
*/

flavorLink.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    let newImage = e.getAttribute("data-image");
    let newBadge = e.getAttribute("data-image-badge");
    document.querySelector(
      ".can"
    ).style.backgroundImage = `url(../images/${newImage})`;
    document.querySelector(".badge object").data = `images/${newBadge}`;
  });
});

// Functions
function showMenu() {
  if (!mainNav.classList.contains("menuoffscene")) {
    mainNav.classList.add("menuoffscene");
    document.querySelector("#header").classList.remove("bg-green");
    document.querySelector("#logo img").src = "images/sq-logo.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger.svg")';
  } else {
    mainNav.classList.remove("menuoffscene");
    document.querySelector("#header").classList.add("bg-green");
    document.querySelector("#logo img").src = "images/sq-logo-white.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger-reveal.svg")';
  }
}

/* 
Promotion Popup
*/

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 1200 && scrollPosition < 1400) {
    promoLb.classList.remove("offscene");
  }

  if (scrollPosition > 2000) {
    promoBanner.classList.remove("hide");
  }

  if (scrollPosition < 400) {
    promoBanner.classList.add("hide");
    promoLb.classList.add("offscene");
  }
});

function closeFlavorLb() {
  promoLb.classList.add("offscene");
}

/* 
The Story Controller
*/

let currentIndex = 0;
function toNextStory() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= story.length) {
    currentIndex = 0;
  }
  storyText.style.opacity = 0;
  setTimeout(() => {
    storyText.textContent = story[currentIndex].text;
    storyText.style.opacity = 1;
  }, 300);

  switch (currentIndex) {
    case 0:
      storyShape.style.backgroundImage = `url("../images/storyimage-01.png")`;
      break;
    case 1:
      storyShape.style.backgroundImage = `url("../images/storyimage-02.png")`;
      break;
    case 2:
      storyShape.style.backgroundImage = `url("../images/storyimage-03.png")`;
      break;
    default:
      break;
  }
}

function toPreviousStory() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = story.length - 1;
  }
  storyText.style.opacity = 0;
  setTimeout(() => {
    storyText.textContent = story[currentIndex].text;
    storyText.style.opacity = 1;
  }, 300);

  switch (currentIndex) {
    case 0:
      storyShape.style.backgroundImage = `url("../images/storyimage-01.png")`;
      break;
    case 1:
      storyShape.style.backgroundImage = `url("../images/storyimage-02.png")`;
      break;
    case 2:
      storyShape.style.backgroundImage = `url("../images/storyimage-03.png")`;
      break;
    default:
      break;
  }
}

/*
Cards carousal
*/

function moveLeft() {
  const card = document.querySelector(".card");
  const cardWidth = card.offsetWidth;
  const marginRight = parseInt(window.getComputedStyle(card).marginRight);
  cardBox.scrollLeft -= cardWidth + marginRight;
}

function moveRight() {
  const card = document.querySelector(".card");
  const cardWidth = card.offsetWidth;
  const marginRight = parseInt(window.getComputedStyle(card).marginRight);
  cardBox.scrollLeft += cardWidth + marginRight;
}

// -Add, Remove items
addBtn.forEach((e) => {
  e.addEventListener("click", function (event) {
    const c = event.target.closest(".card");
    const qtyDisplay = c.querySelector(".qty");
    let itemQty = parseInt(qtyDisplay.getAttribute("data-qty"));
    itemQty++;
    qtyDisplay.setAttribute("data-qty", itemQty);
    qtyDisplay.innerText = `${itemQty}`;
  });
});

minusBtn.forEach((e) => {
  e.addEventListener("click", function (event) {
    const c = event.target.closest(".card");
    const qtyDisplay = c.querySelector(".qty");
    let itemQty = parseInt(qtyDisplay.getAttribute("data-qty"));
    itemQty--;
    if (itemQty < 0) {
      itemQty = 0;
    }
    qtyDisplay.setAttribute("data-qty", itemQty);
    qtyDisplay.innerText = `${itemQty}`;
  });
});

function flavorPop() {
  console.log("clicking correctly");
}

// Events

burgerBtn.addEventListener("click", showMenu, false);
nextStory.addEventListener("click", toNextStory);
previousStory.addEventListener("click", toPreviousStory);
cardBtnL.addEventListener("click", moveLeft);
cardBtnR.addEventListener("click", moveRight);
closeBtn.addEventListener("click", closeFlavorLb);
