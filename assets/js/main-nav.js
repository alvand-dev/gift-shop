"use strict";

{

const mainNav = document.querySelector('#main-nav');
const open = document.querySelector('#open-main-nav-btn');
const close = document.querySelector('#close-main-nav-btn');

open.addEventListener('click', () => {
  mainNav.style.width = "290px";
});

close.addEventListener('click', () => {
  mainNav.style.width = "0";
});

}
