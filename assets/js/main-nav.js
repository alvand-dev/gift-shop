"use strict";

{

// Catch HTML elements
const mainNav = document.querySelector('#main-nav');
const open = document.querySelector('#open-main-nav-btn');
const close = document.querySelector('#close-main-nav-btn');

// Show the menu on click event
open.addEventListener('click', () => {
  mainNav.style.width = "290px";
});

// Hide the menu on click event
close.addEventListener('click', () => {
  mainNav.style.width = "0";
});

}
