import Swiper from '../vendor/swiper';

export const heroSwiper = () => {
  const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    keyboard: true,
    loop: true,

    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    focusableElements: 'a, button',

    pagination: {
      el: '.hero__swiper-pagination',
      type: 'bullets',
      bulletElement: 'div',
      bulletActiveClass: 'hero__swiper-bullet--active',
      bulletClass: 'hero__swiper-bullet',
      clickableClass: 'hero__swiper-bullet--clickable',
      currentClass: 'hero__swiper-bullet--current',
      clickable: true,
    },
  });
  swiper.init();
};
