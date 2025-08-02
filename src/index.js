import "./styles.css";
import { makeMenuDropDown } from "./make-menu-drop-down";

const hamburgerMenuButton = document.querySelector(".hamburger-menu-btn");
const dropDownMenu = document.querySelector(".drop-down-menu");
makeMenuDropDown(hamburgerMenuButton, dropDownMenu);


const nextSlideButton = document.querySelector(".next-button");
const prevSlideButton = document.querySelector(".prev-button");
const wideContainer = document.querySelector(".wide-carousel-container");
const indicatorContainer = document.querySelector(".indicator-container");

const slidePositions = [-3000,-2000,-1000,0];
let currentPosition = 0;

nextSlideButton.addEventListener("click", () => {
  currentPosition = (currentPosition + 1) % slidePositions.length;
  adjustCarouselPosition()
});
prevSlideButton.addEventListener("click", () => {
  if (--currentPosition < 0) currentPosition = slidePositions.length - 1;
  adjustCarouselPosition();
});
indicatorContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("slide-indicator"))
  {

      currentPosition = +(event.target.dataset.position);
      adjustCarouselPosition();
    }
});



function adjustCarouselPosition()
{

  const prevIndicator = indicatorContainer.querySelector(".slide-indicator.selected");
  prevIndicator.classList.remove("selected");
  const newIndicator = indicatorContainer.querySelector(`.slide-indicator[data-position="${currentPosition}"]`)
  newIndicator.classList.add("selected");
  wideContainer.style.right = `${slidePositions[currentPosition]}px`;
}

