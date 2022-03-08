const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (mobileMenu.classList.contains('invisible')) {
    mobileMenu.classList.remove('invisible');
    mobileMenu.classList.add('visible');
  } else {
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('invisible');
  }
}
