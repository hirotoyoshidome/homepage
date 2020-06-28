$(document).ready(function(){
    $(".content_top_slide").slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        // pauseOnHover: false,
        // pauseOnDotsHover: true,
        cssEase: 'linear',
        fade: true,
        arrows: true,
        initialSlide: 0,
        // lazyLoad: 'ondemand',
        swipe: true,
        centerMode: true,
    });
});

$(".header_link").click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false; 
});
