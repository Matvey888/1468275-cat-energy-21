let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let buttonBefore = document.querySelector('.buttons-list__button--before');
let buttonAfter = document.querySelector('.buttons-list__button--after');
let imgBefore = document.querySelector('.live-example__image--before');
let imgAfter = document.querySelector('.live-example__image--after');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buttonBefore.addEventListener('click', function (evt) {
  imgBefore.classList.add('live-example__image--show');
  imgAfter.classList.remove('live-example__image--show');
});

buttonAfter.addEventListener('click', function (evt) {
  imgAfter.classList.add('live-example__image--show');
  imgBefore.classList.remove('live-example__image--show');
});
