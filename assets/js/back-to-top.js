"use strict";

{

// Catch HTML element
const backToTop = document.querySelector('#back-to-top');

// Runs when a user scrolls
window.onscroll = () => scroll();

// When the user scrolls down 700px from the top of the document, show the button
const scroll = () => {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

}
