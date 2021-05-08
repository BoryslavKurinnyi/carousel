$(document).ready(function(){
  $('.my-carousel').slick({
    adaptiveHeight: true,
    slidesToShow: 3, //количество товаров в линии
    autoplay: true, //автопереключение
    autoplaySpeed: 1000, //скорость автопереключения(мс)
    prevArrow: '<button type="button" class="my-carousel-prev">Previous</button>',//кнопка назад
    nextArrow: '<button type="button" class="my-carousel-next">Next</button>'//кнопка вперёд
  });
});