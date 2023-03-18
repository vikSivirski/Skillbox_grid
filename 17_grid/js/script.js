const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
const itemMenu = document.querySelectorAll('.header__list-link');

burger.addEventListener('click', function(){

  burger.classList.toggle('is-active');
  nav.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

});

itemMenu.forEach(function(element) {
  element.addEventListener('click', function(){

    burger.classList.remove('is-active');
    nav.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  })
})
