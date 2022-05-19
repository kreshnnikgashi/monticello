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

const openMenu = () => {
  menuEl.classList.remove('closed');
  overlayEl.classList.remove('hidden');
};

const closeMenu = () => {
  menuEl.classList.add('closed');
  overlayEl.classList.add('hidden');
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
