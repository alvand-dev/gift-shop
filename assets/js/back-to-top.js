(function () {
  'use strict';

  // Catch the HTML element
  const backToTop = document.querySelector('#back-to-top');

  // Show and hide scroll button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // add functionality to scroll button
  backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
})();
