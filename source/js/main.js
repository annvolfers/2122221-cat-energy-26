const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--mobile-menu-closed')) {
    mainNav.classList.remove('main-nav--mobile-menu-closed');
    mainNav.classList.add('main-nav--mobile-menu-opened');
  } else {
    mainNav.classList.remove('main-nav--mobile-menu-opened');
    mainNav.classList.add('main-nav--mobile-menu-closed');
  }
});


const partnershipMap = document.querySelector('.partnership__map');

partnershipMap.classList.remove('partnership__map--nojs');
