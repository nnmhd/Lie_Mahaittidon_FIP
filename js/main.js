/* JS outline 
1-Variables
2-Functions
  -Show Burger Menu
  -The Story Controller 
3-Events
*/

/* 
Variables 
*/

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
const promoBanner = document.querySelector("#promo-banner-con");
const closeBtn = document.querySelector("#close-lb");
const closeFlavorBtn = document.querySelector("#close-flavor-lb");
const exploreImage = document.querySelector("#explore-image");
const exploreHeadline = document.querySelector("#explore-hl");
const exploreSubline = document.querySelector("#explore-sl");
const exploreText = document.querySelector("#explore-desc");

/* 
Show Burger Menu
*/

function showMenu() {
  if (!mainNav.classList.contains("menuoffscene")) {
    mainNav.classList.add("menuoffscene");
    document.querySelector("#header").style.backgroundColor = `white`;
    document.querySelector("#logo img").src = "images/sq-logo.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger.svg")';
  } else {
    mainNav.classList.remove("menuoffscene");
    document.querySelector("#header").style.backgroundColor = `#00a44b`;
    document.querySelector("#logo img").src = "images/sq-logo-white.svg";
    burgerBtn.style.backgroundImage = 'url("../images/burger-reveal.svg")';
  }
}

/* 
Explore Section
- Lightbox Information's Array
- Changing cans and badges, and show the lightbox
*/

const exploreFlavorsContent = [
  {
    Images: `url(../images/StrawberryLB.jpg)`,
    headline: "Silly Billy",
    subheadline: "Strawberry",
    text: `Experience the pure, natural flavor of SQZIT Strawberry Drink, made with 100% fresh, farm-sourced strawberries. Free from artificial flavors and colors, it delivers the authentic sweetness of ripe strawberries in every sip. Enjoy a refreshing and wholesome drink, true to nature's best.`,
  },
  {
    Images: `url(../images/CherryLB.jpg)`,
    headline: "Cherry Chuckles",
    subheadline: "Cherry",
    text: `Experience the pure, natural flavor of SQZIT Strawberry Drink, made with 100% fresh, farm-sourced strawberries. Free from artificial flavors and colors, it delivers the authentic sweetness of ripe strawberries in every sip. Enjoy a refreshing and wholesome drink, true to nature's best.`,
  },
  {
    Images: `url(../images/GrapeLB.jpg)`,
    headline: "Grape Galloping",
    subheadline: "Grape",
    text: `Savor the bold, juicy flavor of SQZIT Grape Drink, made from 100% fresh, handpicked grapes. With no artificial flavors or colors, it's the pure essence of sun-ripened grapes in every sip. Refresh your taste buds with nature's sweetest harvest.`,
  },
  {
    Images: `url(../images/PunchLB.jpg)`,
    headline: "Red Puncher",
    subheadline: "Punch",
    text: `Experience the vibrant burst of SQZIT Punch Drink, made with 100% fresh, handpicked fruits. No artificial flavors or colors—just the pure, refreshing blend of nature's best in every sip. Energize your day with the ultimate fruit punch delight.`,
  },
  {
    Images: `url(../images/OrangeLB.jpg)`,
    headline: "Smart Arty",
    subheadline: "Orange",
    text: `Enjoy the zesty freshness of SQZIT Orange Drink, crafted from 100% fresh, handpicked oranges. No artificial flavors or colors—just the bright, citrusy taste of sun-ripened oranges in every sip. Refresh yourself with the pure essence of nature's golden fruit.`,
  },
  {
    Images: `url(../images/MysteryLB.jpg)`,
    headline: "Mystery",
    subheadline: "Mystery!",
    text: `Unleash your curiosity with SQZIT Mystery Flavor, where each sip is a surprise crafted from a blend of unique, 100% fresh fruits. No artificial flavors or colors—just pure, tantalizing taste that keeps you guessing. Dare to discover nature's best-kept secret in every bottle.`,
  },
];

flavorLink.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    let newImage = e.getAttribute("data-image");
    let newBadge = e.getAttribute("data-image-badge");
    document.querySelector(
      ".can"
    ).style.backgroundImage = `url(../images/${newImage})`;
    document.querySelector(".badge object").data = `images/${newBadge}`;

    switch (e.innerText) {
      case `Silly Billy`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[0].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[0].headline;
        exploreSubline.textContent = exploreFlavorsContent[0].subheadline;
        exploreText.textContent = exploreFlavorsContent[0].text;
        break;
      case `Cherry Chuckles`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[1].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[1].headline;
        exploreSubline.textContent = exploreFlavorsContent[1].subheadline;
        exploreText.textContent = exploreFlavorsContent[1].text;
        break;
      case `Grape Galloping`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[2].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[2].headline;
        exploreSubline.textContent = exploreFlavorsContent[2].subheadline;
        exploreText.textContent = exploreFlavorsContent[2].text;
        break;
      case `Red Puncher`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[3].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[3].headline;
        exploreSubline.textContent = exploreFlavorsContent[3].subheadline;
        exploreText.textContent = exploreFlavorsContent[3].text;
        break;
      case `Smart Arty`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[4].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[4].headline;
        exploreSubline.textContent = exploreFlavorsContent[4].subheadline;
        exploreText.textContent = exploreFlavorsContent[4].text;
        break;
      case `Mystery`:
        exploreImage.style.backgroundImage = `${exploreFlavorsContent[5].Images}`;
        exploreHeadline.textContent = exploreFlavorsContent[5].headline;
        exploreSubline.textContent = exploreFlavorsContent[5].subheadline;
        exploreText.textContent = exploreFlavorsContent[5].text;
        break;
    }

    if (flavorLightBox.classList.contains("offscene")) {
      flavorLightBox.classList.remove("offscene");
    }
  });
});

function closeFlavorLb() {
  flavorLightBox.classList.add("offscene");
  console.log("clicking correctly");
}

/* 
Promotion Popup 
*/

const bannerBtn = document.querySelector("#banner-button");
function showPopup() {
  promoLb.classList.remove("offscene");
}

function closeLb() {
  if (!promoLb.classList.contains(`offscene`)) {
    promoLb.classList.add("offscene");
  }
}

/* 
The Story Controller
- Text information's Array
- Next Chapter
- Previous Chapter
*/

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

/*
Add, Remove items (Card Boxes)
*/

function addAndRemove(buttons, selector) {
  buttons.forEach((e) => {
    e.addEventListener("click", function (event) {
      const c = event.target.closest(selector);
      if (c) {
        const qtyDisplay = c.querySelector(".qty");
        let itemQty = parseInt(qtyDisplay.getAttribute("data-qty"));

        if (event.target.classList.contains("add-btn")) {
          itemQty++;
        } else if (event.target.classList.contains("minus-btn")) {
          itemQty--;
          if (itemQty < 0) {
            itemQty = 0;
          }
        }

        qtyDisplay.setAttribute("data-qty", itemQty);
        qtyDisplay.innerText = `${itemQty}`;
      }
    });
  });
}

addAndRemove(addBtn, ".card");
addAndRemove(minusBtn, ".card");
addAndRemove(addBtn, ".explore-buy-control");
addAndRemove(minusBtn, ".explore-buy-control");
addAndRemove(addBtn, ".bills");
addAndRemove(minusBtn, ".bills");

/* 
Events 
*/

burgerBtn.addEventListener("click", showMenu);
bannerBtn.addEventListener("click", showPopup);
nextStory.addEventListener("click", toNextStory);
previousStory.addEventListener("click", toPreviousStory);
cardBtnL.addEventListener("click", moveLeft);
cardBtnR.addEventListener("click", moveRight);
closeBtn.addEventListener("click", closeLb);
closeFlavorBtn.addEventListener("click", closeFlavorLb);
