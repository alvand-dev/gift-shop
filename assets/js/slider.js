document.addEventListener('DOMContentLoaded', function () {
  new Splide('#new-products', {
    perPage: 3,
    perMove: 1,
    gap: "30px",
    pagination: false,
    breakpoints: {
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      }
    },
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#featured-products', {
    perPage: 4,
    perMove: 1,
    gap: "30px",
    pagination: false,
    breakpoints: {
      1199: {
        perPage: 3,
      },
      991: {
        perPage: 2,
      },
      575: {
        perPage: 1,
      }
    },
  }).mount();
});
