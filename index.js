
$(window).load(function() {
$(".seq-preloader").fadeOut();
$(".sequence").delay(2000).fadeOut("slow");

})

$("#intro-span").animate({'opacity':1}, 'slow')






var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.hawhaw'
})
.setClassToggle('.amr-img-div', 'show')
.addTo(controller);

var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: '.center'
})
.setClassToggle('.amr-img-div', 'hide')
.addTo(controller);

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller3 = new ScrollMagic.Controller();

tl.from(".div-pad", .5, {y:520, opacity:0});
const scene3 = new ScrollMagic.Scene({
   triggerElement: '.intro-h1',
   triggerHook: "onLeave",
   duration: "100%"
 })
      // .setPin(".div-pad")
    .setTween(tl)
      .addTo(controller3);




function updatePercentage(){
  tl.progress();
}

var tl2 = new TimelineMax({onUpdate:updatePercentage2});
const controller4 = new ScrollMagic.Controller();

tl2.from(".contact-h2", .1, {y:70, opacity:0});
const scene4 = new ScrollMagic.Scene({
   triggerElement: '.xx',
   triggerHook: "onLeave",
   duration: "100%"
 })
      // .setPin(".div-pad")
    .setTween(tl2)
      .addTo(controller4);




function updatePercentage2(){
  tl2.progress();
}
$(".exp").click(function(){

  $("#section1").animate({'opacity': 0}, 'slow', function(){
  $("#section1").css({'background-image': 'url(images/whitedog.jpg)'}).animate({opacity: 1});
    });
  $("html").css("background-color", "#fff");
  $("body").css("background-color", "#fff");

  // $("h1").css("color", "#000")
  $("h1").animate({'opacity': 0}, 'slow', function(){
  $("h1").css({'color': '#000'}).animate({opacity: 1});
  });
  $("#section2").css("background-color","#fff")
  $("#section3").css("background-color","#fff")
  $("#section4").css("background-color","#fff")
  $("#footer").css("background-color","#000")
  // $(".navbar-brand").css("color","#000")
  $(".navbar-brand").animate({'opacity': 0}, 'slow', function(){
  $(".navbar-brand").css({'color': '#000'}).animate({opacity: 1});
  });
  $(".btn").animate({'opacity': 0}, 'slow', function(){
    $(".btn").removeClass("btn-outline-light")
    $(".btn").addClass("btn-outline-dark").animate({opacity:1})
  })
  $(".exp").css({"border":"1px solid #000", "color":"#000", "background" : "#fff"})


  $(".nav-link").addClass("link1-dark")
  $("h4").css("color","#000")
  $("h2").css("color","#000")
  $(".up").css("border-top", "1px solid #000")
  $(".down").css("border-bottom", "1px solid #000")
  $(".down").css("border-top-color", "#fff")
  $(".contact-hr").css("border-top", "1px solid #000")
  $(".center").css("background", "#fff")
  $(".center").css("color", "#000")
  $(".skill_level").css("background", "#000")
  $(".skill").css("background", "#fff")
    $(".skill").css("border", "1px solid #fff")
    $(".foot-a").css("color","#fff")

    $(".icons").css("color","#fff")

    // $(".icons").hover().css("color","grey")



  // $("li").animate({'opacity': 0}, 'slow', function(){
  // $("li").css({'color': '#000 !important'}).animate({opacity: 1});
  // });
})


 $(".exp2").click(function(){
$("#section1").animate({'opacity': 0}, 'slow', function(){
  $("#section1").css({'background-image': 'url(images/cat.jpg)'}).animate({opacity: 1});
});
$("html").css("background-color", "#000");
$("h1").animate({'opacity': 0}, 'slow', function(){
$("h1").css({'color': '#fff'}).animate({opacity: 1});
});
$(".navbar-brand").animate({'opacity': 0}, 'slow', function(){

$(".navbar-brand").css({'color': '#fff'}).animate({opacity: 1});
})
// $(".btn").animate({'opacity': 0}, 'slow', function(){
//   // $(".btn").removeClass("btn-outline-dark")
//   $(".btn").addClass("btn-outline-light").animate({opacity:1})
//
// });

});
// var x = $('#section1').css("background-image");
// x.animate({opacity: 0}, 'slow');
// $('#section1').click(function() {
//
//     var $this = $(this);
//
//     $this.animate({opacity: 0}, 'slow', function() {
//     $this
//         .css({'background-image': 'url(images/whitedog.jpg)'})
//         .animate({opacity: 1});
//      });
// });



// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
