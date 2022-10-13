$(function () {

  window.addEventListener('scroll', function () {
    let e = document.querySelector('.header-inner')
    if (pageYOffset > 0) {
      e.classList.add("shadow")
    }
    else {
      e.classList.remove("shadow")
    }
  });

  $(".menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });

});

window.addEventListener('scroll', e => {
  let menu_logo = document.getElementById('menu_logo').classList
  if (pageYOffset > 800) menu_logo.add('active')
  else menu_logo.remove('active')
})
window.addEventListener('scroll', e => {
  let menu_branding = document.getElementById('menu_branding').classList

  if(pageYOffset > 1800) menu_branding.add('active')
  else menu_branding.remove('active')
})
window.addEventListener('scroll', e => {
  let menu_price = document.getElementById('menu_price').classList
  if(pageYOffset > 3300) menu_price.add('active')
  else menu_price.remove('active')
})

const allItems = document.querySelectorAll(".menu ul li a");
allItems.forEach(item => {
  item.addEventListener("click", function (e) { 
    for (var i = 0; i < allItems.length; i++) {
       allItems[i].classList.remove("active");
  }
  this.classList.add("active");
});
});


$('.menu__button, .menu a').on('click', function () {
  $('.header__top-inner').toggleClass('header__top-inner--active');
  $('.menu__button').toggleClass('menu__btn--active');
});