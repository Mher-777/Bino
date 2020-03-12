$(function () {
    $('.main-screen__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 400,
        rows: 0,
        // autoplay: true,
        cssEase: 'linear',
        prevArrow: '<button class="main-screen__arrow arrow-left"></button>',
        nextArrow: '<button class="main-screen__arrow arrow-right"></button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false
                }
            },
        ]
    });

    $('.services__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 600,
        vertical: true,
        verticalSwiping: true,
        appendDots: '.services__slider-dots',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'linear',
    })
    $('.case-study__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: 'case-study__dots',
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 1500,
    })

    let WindowHeight = jQuery(window).height();
    let load_element = 0;
    let scroll_position = jQuery('.header').offset().top;
    let screen_height = jQuery(window).height();
    let activation_offset = 0;
    let max_scroll_height = jQuery('body').height() + screen_height;
    let scroll_activation_point = scroll_position - (screen_height * activation_offset);

    jQuery(window).on('scroll', function (e) {

        let y_scroll_pos = window.pageYOffset;
        let element_in_view = y_scroll_pos > scroll_activation_point;
        let has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

        if (element_in_view || has_reached_bottom_of_page) {
            jQuery('.header, .header__menu').addClass("sticky");
        } else {
            jQuery('.header, .header__menu').removeClass("sticky");
        }
    });

    let a = 0;
    $(window).scroll(function () {
        var oTop = $('.statistics').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.statistics__col-number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }
    });

    $(".main-screen__down").click(function (event) {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item01").click(function (event) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item02").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item03").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item04").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#works").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item05").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item06").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item07").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#blog").offset().top
        }, 1000);
        event.preventDefault()
    });

    $(".menu__item08").click(function (event) {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
        event.preventDefault()
    });

    let elm = document.querySelector('.header');
    let ms = new MenuSpy(elm,{
        activeClass: 'current',
        
    });

    $('.header__hamburger').on('click', function () { 
        $('.header__menu').slideToggle()
        $(this).toggleClass('active')
     });
    
    var mixer = mixitup('.works');
})