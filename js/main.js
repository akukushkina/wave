$(function () {

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top -150;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.blog__slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false
        }
      }
    ]
  });



  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });





  var mixer = mixitup('.gallery__images');



});