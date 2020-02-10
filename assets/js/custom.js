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
})
