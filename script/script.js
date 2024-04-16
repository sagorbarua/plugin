// jquery
// counter
$(".1st_count").countMe(40,65);
$(".2nd_count").countMe(40,65);
$(".3rd_count").countMe(40,65);


//mix-it up
var mixer = mixitup('#mix-it', { 
  animation: {
      duration: 300
  }
});

// aos plugin
AOS.init({
});

// preloader
$('.js-preloader').preloadinator({
  scroll:false,
  minTime: 1500,
  animation: 'fadeOut',
  animationDuration: 400
});


// slick slider
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

