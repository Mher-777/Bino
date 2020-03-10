$(function () {
    $('.main-screen__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 400,
        rows: 0,
        autoplay: true,
        cssEase: 'linear',
        prevArrow: '<button class="main-screen__arrow arrow-left"></button>',
        nextArrow: '<button class="main-screen__arrow arrow-right"></button>',
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
            jQuery('.header').addClass("--sticky");
        } else {
            jQuery('.header').removeClass("--sticky");
        }
    });
    var mixer = mixitup('.works');
})