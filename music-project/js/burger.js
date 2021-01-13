const burger = document.querySelector('#menu-toggle');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  document.body.classList.toggle('lock');
  menu.classList.toggle('menu__show');
});
