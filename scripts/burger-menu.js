const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const menuLink = document.querySelector(".menu__link");
const line1 = document.querySelector(".burger-button__line1");
const line2 = document.querySelector(".burger-button__line2");
const line3 = document.querySelector(".burger-button__line3");

function showMenu(evt) {
  burgerMenu.classList.toggle("menu_active");
  overlay.classList.toggle("overlay_active");
  line1.classList.toggle("burger-button__line1_change");
  line2.classList.toggle("burger-button__line2_change");
  line3.classList.toggle("burger-button__line3_change");
}

function closeMenu(evt) {
  burgerMenu.classList.remove("menu_active");
  overlay.classList.remove("overlay_active");
  line1.classList.remove("burger-button__line1_change");
  line2.classList.remove("burger-button__line2_change");
  line3.classList.remove("burger-button__line3_change");
}

burgerButton.addEventListener("click", showMenu);
overlay.addEventListener("click", closeMenu);
burgerMenu.addEventListener("click", closeMenu);