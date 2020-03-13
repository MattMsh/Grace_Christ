jQuery(document).ready(function($){
  $(".menu-burger").on("click", function(e) {
    e.preventDefault()
    $(this).toggleClass("active")
    $(".header-wrap .menu").toggleClass("active")
    $("body").toggleClass("menu-open")
  })

  $(".main-lang").on("click", function(e) {
    e.preventDefault()
    $(this)
        .parent()
        .toggleClass("active")
  })

  $(".carousel.intro").slick({
    infinite: false,
    asNavFor: '.carousel.nav',
    speed: 1000,
    draggable: false,
    lazyload: 'ondemand',
    responsive: [{
      breakpoint: 768,
      settings: {
        draggable: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        draggable: true,
        arrows: false
      }
    }
  ]
  });

  $('.carousel.nav').slick({
    infinite: false,
    asNavFor: '.carousel.intro',
    arrows: false,
    dots: true
  });

  $('.scheduled-meetings-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.scheduled-meetings-arrows'),
    appendDots: $('.scheduled-meetings-slider-dots'),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
})
