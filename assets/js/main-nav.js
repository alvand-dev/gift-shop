(function () {
  'use strict';

  // Catch HTML elements
  const mainNav = document.querySelector('#main-nav');
  const openBtn = document.querySelector('#open-main-nav-btn');

  // Add event listener to toggle side menu on focus
  document.addEventListener('focusin', (e) => {
    if (mainNav.contains(e.target) || openBtn.contains(e.target)) {
      mainNav.style.width = '270px';
    } else {
      mainNav.style.width = '0';
    }
  });

  // Remove side menu on click anywhere else
  document.addEventListener('click', (e) => {
    if (mainNav.contains(e.target) || openBtn.contains(e.target)) {
      return;
    } else {
      mainNav.style.width = '0';
    }
  });

  // Close side menu when switch to large screen sizes
  window.matchMedia('screen and (max-width:991px)').addEventListener('change', () => {
    mainNav.style.width = '0';
  });
})();
