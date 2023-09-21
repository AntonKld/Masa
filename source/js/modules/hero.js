import Swiper from '../vendor/swiper';

export const heroSwiper = () => {
  const swiper = new Swiper('.hero__slider', {
    watchSlidesProgress: true,
    slideVisibleClass: 'hero__slide--visible',
    loading: 'lazy',
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    slideClass: 'hero__slide',
    pagination: {
      el: '.hero__pagination',
      bulletClass: 'hero__bullet',
      bulletActiveClass: 'hero__bullet--active',
      clickable: true,
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
  });
  swiper.init();
};
