//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
});
$('.menu__link').click(function() {
  $('.menu__wrap').slideUp();
  $('.menu__btn').html('НАВИГАЦИЯ');
});

var navToggle = document.querySelector('.menu__btn');
navToggle.addEventListener('click', function() {
  if (navToggle.innerHTML == 'НАВИГАЦИЯ') {
    navToggle.innerHTML = 'Закрыть';
  } else {
    navToggle.innerHTML = 'НАВИГАЦИЯ';
  }
});

//Scroll to menu anchor
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu__item a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu__item a').each(function () {
            $(this).removeClass('menu__link--active');
        })
        $(this).addClass('menu__link--active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 150
        }, 500, 'swing', function () {
//            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 150;
    if (scrollPos > 150) {
      $(".header").css({
        'box-shadow': '0px 16px 39.56px 3.44px rgba(35, 38, 50, 0.1)',
        'transition': 'box-shadow 0.5s ease'
      });
    } else {
      $(".header").css({
        'box-shadow': 'none',
        'transition': 'box-shadow 0.5s ease'
      });
    }
    $('.menu__item a').each(function () {
        event.preventDefault();
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu__item a').removeClass("menu__link--active");
            currLink.addClass("menu__link--active");
        }
    });
}
