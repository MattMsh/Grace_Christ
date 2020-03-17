jQuery(document).ready(function($) {
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

  const responsiveSettings = [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]

  $('.our-event-slider_cards-1').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.our-event-slider-arrows-1'),
    appendDots: $('.our-event-slider-dots-1'),
    responsive: responsiveSettings
  });
  $('.our-event-slider_cards-2').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.our-event-slider-arrows-2'),
    appendDots: $('.our-event-slider-dots-2'),
    responsive: responsiveSettings
  });

  let options_map = {
    once: true, //once start, thereafter destroy listener
    passive: true,
    capture: true
  };
  let map_container = document.getElementById('map');
  map_container.addEventListener('click', start_lazy_map, options_map);
  map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
  map_container.addEventListener('touchmove', start_lazy_map, options_map);

  let map_loaded = false;

  function start_lazy_map() {

    if (!map_loaded) {
      const map_block = document.createElement('script');
      map_block.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAUL2KefTWgiBwwZrB_azo5TgEElAD35kM&callback=initMap';
      map_block.async = true;
      map_block.defer = true;
      map_block.type = 'text/javascript';
      map_loaded = true;
      let custom_s = document.getElementById('custom_script');
      custom_s.before(map_block)
      console.log('GOOGLEMAP LOADED');
    }
  }

});
var map,
  marker,
  coordinates = { lat: 49.432876, lng: 27.019411 },
  styles = [{
      "featureType": "all",
      "stylers": [{
          "saturation": 0
        },
        {
          "hue": "#e7ecf0"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [{
        "saturation": -70
      }]
    },
    {
      "featureType": "transit",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "water",
      "stylers": [{
          "visibility": "simplified"
        },
        {
          "saturation": -60
        }
      ]
    }
  ],
  markers = [
    { lat: 49.432880, lng: 27.019412 },
    { lat: 49.447568, lng: 27.007495 },
    { lat: 49.435220, lng: 26.943635 }
  ]

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.434420, lng: 26.983000 },
    zoom: 14,
    disableDefaultUI: true,
    scrollwheel: false,
    styles: styles
  });
  for (let i = 0; i < markers.length; i++) {
    marker = new google.maps.Marker({
      position: markers[i],
      map: map,
      animation: google.maps.Animation.DROP,
      icon: 'assets/image/icons/map-marker.png'
    });
  }
}