 //google map api
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.674, lng: -73.945 },
        zoom: 12,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f3f3f3"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#9edeef"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });
}

$(function() {
  // accordion
  $('.accordion__header').on('click', function() {
    var $wrap = $(this).closest('.accordion');

    $wrap.toggleClass('accordion--active');
    $wrap.find('.accordion__content').slideToggle();
  });

  // read more init
  // $('.read-more-wrap').each(function() {
  //   var totalHeight = 0;
  //
  //   $(this)
  //     .children()
  //     .slice(0, 3)
  //     .each(function() {
  //       totalHeight += $(this).outerHeight(true);
  //     });
  //
  //   $(this).readmore({
  //     speed: 75,
  //     collapsedHeight: totalHeight,
  //     moreLink: '<span class="more-less-link">learn more</span>',
  //     lessLink: '<span class="more-less-link">learn less</span>'
  //   });
  // });

  // SmoothScroll init
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 120
  });

  // nav icon
  $('.nav-icon').on('click', function() {
    $(this).toggleClass('nav-icon--isActive');
    $('.nav').toggleClass('nav--open');
  });

  // $('.nav__links li').on('click', function() {
  //   console.log(this);
  //   $('.nav').removeClass('nav--open');
  //   $('.nav-icon').removeClass('nav-icon--isActive');
  // });
});

$(window).on('load', function() {
  setTimeout(function() {
    $('.preloader').addClass('preloader--hide');
  }, 600);

  // disable aos in ie/edge
  // if (detectIE()) {
  //   AOS.init({ disable: true });
  // } else {
  //   AOS.init({
  //     duration: 400,
  //     offset: -100
  //   });
  // }
});

// bg for header on scroll
// $(window).on('load scroll', function() {
//   if ($(window).scrollTop() > 50) {
//     $('.header').addClass('header--scrolled');
//   } else {
//     $('.header').removeClass('header--scrolled');
//   }
// });
 

function detectIE() {
  var ua = window.navigator.userAgent,
    msie = ua.indexOf('MSIE '),
    trident = ua.indexOf('Trident/'),
    edge = ua.indexOf('Edge/');

  if (msie > 0)
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);

  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  if (edge > 0)
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);

  return false;
}
