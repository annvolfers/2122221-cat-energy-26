const mainNav=document.querySelector(".main-nav"),mainNavToggle=document.querySelector(".main-nav__toggle");mainNav.classList.remove("main-nav--nojs"),mainNavToggle.addEventListener("click",(function(){mainNav.classList.contains("main-nav--mobile-menu-closed")?(mainNav.classList.remove("main-nav--mobile-menu-closed"),mainNav.classList.add("main-nav--mobile-menu-opened")):(mainNav.classList.remove("main-nav--mobile-menu-opened"),mainNav.classList.add("main-nav--mobile-menu-closed"))}));const partnershipMap=document.querySelector(".partnership__map");partnershipMap.classList.remove("partnership__map--nojs");