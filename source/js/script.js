var listDropdown = document.querySelector('.side-menu__button');

listDropdown.addEventListener('click', function() {
  if (listDropdown.classList.contains('active')) {
    listDropdown.classList.remove('active');
  } else {
    listDropdown.classList.add('active');
  }
});
