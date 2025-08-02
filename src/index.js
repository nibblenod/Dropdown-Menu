import "./styles.css";
import { makeMenuDropDown } from "./make-menu-drop-down";

const hamburgerMenuButton = document.querySelector(".hamburger-menu-btn");
const dropDownMenu = document.querySelector(".drop-down-menu");
makeMenuDropDown(hamburgerMenuButton, dropDownMenu);

