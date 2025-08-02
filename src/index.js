import "./styles.css";
import { makeMenuDropDown } from "./make-menu-drop-down";

const hamburgerMenuButton = document.querySelector(".hamburger-menu-btn");
const dropDownMenu = document.querySelector(".drop-down-menu");
makeMenuDropDown(hamburgerMenuButton, dropDownMenu);


const nextSlideButton = document.querySelector(".next-button");
const prevSlideButton = document.querySelector(".prev-button");
const wideContainer = document.querySelector(".wide-carousel-container");
const indicatorContainer = document.querySelector(".indicator-container")

const imagesList = wideContainer.querySelectorAll('img');
const numberOfImages = imagesList.length;

const slideWidth = 1000;
let currentPosition = 0;

nextSlideButton.addEventListener("click", moveCarouselForward);
prevSlideButton.addEventListener("click", moveCarouselBackward);
indicatorContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("slide-indicator"))
  {

      currentPosition = +(event.target.dataset.position);
      adjustCarouselPosition();
    }
});

function moveCarouselBackward()
{
  if (--currentPosition < 0) currentPosition = numberOfImages-1;
  adjustCarouselPosition();
}
function moveCarouselForward()
{
  currentPosition = (currentPosition + 1) % numberOfImages;
  adjustCarouselPosition()
}

function adjustCarouselPosition()
{

  const prevIndicator = indicatorContainer.querySelector(".slide-indicator.selected");
  prevIndicator.classList.remove("selected");
  const newIndicator = indicatorContainer.querySelector(`.slide-indicator[data-position="${currentPosition}"]`)
  newIndicator.classList.add("selected");
  wideContainer.style.left = `-${(slideWidth * currentPosition)}px`;
}


setInterval(moveCarouselForward, 5000);