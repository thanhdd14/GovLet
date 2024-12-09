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



//fade
// $(window).on('scroll load assessFeatureHeaders', function(){
//     var scrollTop = $(window).scrollTop();
//     var appearenceBuffer = 60;
//     var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
//     $('body').toggleClass('scrolled-down', scrollTop > 0);
//     $('.js-scrollin:not(.active)').filter(function(){
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         return offset + height >= scrollTop && offset <= windowBottom;
//     }).addClass('active');
// });


//backtop
// jQuery(document).ready(function ($) {
//     $(".js-backtop").hide();
//     $(window).on("scroll", function () {
//         if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight()){
//             $(".js-backtop").addClass("active");
//         }
//         else {
//             $(".js-backtop").removeClass("active");
//         }
//         if ($(this).scrollTop() > 100) {
//             $(".js-backtop").fadeIn("fast");
//         } else {
//             $(".js-backtop").fadeOut("fast");
//         }
//     });
//     $('.js-backtop').click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 500);
//         return false;
//     });
// });