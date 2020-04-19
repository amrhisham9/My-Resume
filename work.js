$(window).load(function() {
$(".seq-preloader").fadeOut();
$(".sequence").delay(2000).fadeOut("slow");

})

$("h3").addClass("load")
$("hr").addClass("load");


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
