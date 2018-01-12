//Mobile menu
var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__btn");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
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
