'use strict';

// * ===============================Hero Slider =======================================

const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: true,
  // },
});

//* ========================== Hamburger Menu =========================================

const btnOpen = document.getElementById('btnHmaburger');
const btnClose = document.querySelector('#closeMenu');
const menuEl = document.getElementById('menu');
const overlayEl = document.getElementById('overlay');
const bodyEl = document.querySelector('body');

const openMenu = () => {
  menuEl.classList.remove('closed');
  overlayEl.classList.remove('hidden');
  bodyEl.classList.add('noscroll');
};

const closeMenu = () => {
  menuEl.classList.add('closed');
  overlayEl.classList.add('hidden');
  bodyEl.classList.remove('noscroll');
};

btnHamburger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlayEl.addEventListener('click', closeMenu);

//* ========================== Sticky Header  =========================================

const headerEl = document.querySelector('#header');
const topOfHeader = headerEl.offsetTop;

const fixNav = () => {
  if (window.scrollY > topOfHeader) {
    headerEl.classList.add('fixed-nav');
    headerEl.style.position = 'fixed';
  } else {
    headerEl.classList.remove('fixed-nav');
    headerEl.style.position = 'absolute';
  }
};

window.addEventListener('scroll', fixNav);

//* =============================== News Slider =============================
const swiperNews = new Swiper('.news-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,

  initialSlide: 1,

  pagination: {
    el: '.swiper-bullets',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  navigation: {
    prevEl: '.swiper-button-prev-unique',
    nextEl: '.swiper-button-next-unique',
  },
});

//* ================================== Load More ====================================

const work = document.querySelector('#grid');
const items = Array.from(work.querySelectorAll('.item'));
const loadMore = document.getElementById('see-more');

const maxItems = 5;
const loadItems = 4;
const hiddenItems = Array.from(document.querySelectorAll('.hiddenStyle'));

items.forEach(function (item, index) {
  console.log(item.innerText, index);
  if (index > maxItems - 1) {
    item.classList.add('hiddenStyle');
  }
});

loadMore.addEventListener('click', function () {
  [].forEach.call(
    document.querySelectorAll('.hiddenStyle'),
    function (item, index) {
      if (index < loadItems) {
        item.classList.remove('hiddenStyle');
      }

      if (document.querySelectorAll('.hiddenStyle').length === 0) {
        loadMore.style.display = 'none';
      }
    }
  );
});
