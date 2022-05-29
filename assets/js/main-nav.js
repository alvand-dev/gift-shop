'use strict';

{
  // Catch HTML elements
  const mainNav = document.querySelector('#main-nav');
  const open = document.querySelector('#open-main-nav-btn');
  const close = document.querySelector('#close-main-nav-btn');

  // Show the menu on click event
  open.addEventListener('click', () => {
    mainNav.style.width = '290px';
  });

  // Hide the menu on click event
  close.addEventListener('click', () => {
    mainNav.style.width = '0';
  });

  // Remove toggle-menu on click anywhere else
  document.addEventListener('click', (e) => {
    if (
      !mainNav.contains(e.target) &&
      !open.contains(e.target) &&
      !close.contains(e.target)
    ) {
      mainNav.style.width = '0';
    }
  });

  // Reset toggle menu on large screen sizes
  window
    .matchMedia('screen and (max-width:991px)')
    .addEventListener('change', () => {
      mainNav.style.width = '0';
    });
}
