import Swiper from "swiper";

// Main Slider
var mainSlider = new Swiper(".mainslider", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">0' + (index + 1) + "</span>";
    },
  },
});

var mainSlider2 = new Swiper(".mainslider2", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

// Carousel 1
var carousel1 = new Swiper(".carousel-1", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Carousel 2
var carousel2 = new Swiper(".carousel-2", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Carousel Shop
var carouselShop = new Swiper(".carousel-shop", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Export all Swiper instances
export { mainSlider, mainSlider2, carousel1, carousel2, carouselShop };
