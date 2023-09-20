import Swiper from '../vendor/swiper';

export const heroSwiper = () => {
  const swiper = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  swiper.init();
};
