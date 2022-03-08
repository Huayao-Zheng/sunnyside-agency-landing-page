const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (mobileMenu.classList.contains('hide')) {
    mobileMenu.classList.remove('hide');
    mobileMenu.classList.add('show');
  } else {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hide');
  }
}
