const currentYearEl = document.querySelector('.current__year');
const currentYear = new Date().getFullYear();
const burgerMenu = document.querySelector('.burger__menu');
const submenu = document.querySelector('.submenu');


function toggleMenu() {
  burgerMenu.classList.toggle("active");
  submenu.classList.toggle("vis__submenu");
}

currentYearEl.textContent= currentYear;
