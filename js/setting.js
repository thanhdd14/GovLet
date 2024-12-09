//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("js-fixed");
    }
    else {
        $("#header").removeClass("js-fixed");
    }
});


jQuery('.js-scroll').click(function(e) {
	jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - 82}, 1500);
	return false;
	e.preventDefault();
});



$(".js-concept-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 834,
			settings: {
				slidesToShow: 2
			}
		}
	]
});
$(".js-voice-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 834,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
$(".js-service-list").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 834,
			settings: {
				slidesToShow: 1
			}
		}
	]
});



//matchHeight
jQuery(function ($) {
    $('.concept-list .concept-list__item .concept-list__box').matchHeight();
    $('.concept-list .concept-list__item .concept-list__box .concept-list__ct ul').matchHeight();
	$('.voice-list .voice-list__item .voice-list__box').matchHeight();
	$('.service-list .service-list__item .service-list__box').matchHeight();
	$('.service-list .service-list__item .service-list__box .mh').matchHeight();
});

$(function(){
	$('.inquiry-block__note').slimScroll();
});