var listDropdown = document.querySelector('.side-menu__button');
var openMenu = document.querySelector('.side__toggle');
var menu = document.querySelector('.side-menu');
var closeMenu = document.querySelector('.side-menu__close');

listDropdown.addEventListener('click', function() {
  if (listDropdown.classList.contains('active')) {
    listDropdown.classList.remove('active');
  } else {
    listDropdown.classList.add('active');
  }
});

openMenu.addEventListener('click', function() {
  menu.classList.add('active');
});
closeMenu.addEventListener('click', function() {
  menu.classList.remove('active');
});
