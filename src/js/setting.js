//слаидер главная 
$('#slider').slick({
	speed: 300,
	mobileFirst: false,
	dots: true,
	dotsClass: "my-dots",
	arrows: false,
	slidesToShow: 1,

	slidesToScroll: 1
});

$(document).ready(function() {
	news();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1111) {
			news();
		}
	});
	cardSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1150) {
			cardSlider();
		}
	});
	aboutSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1100) {
			aboutSlider();
		}
	});
	productSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1100) {
			productSlider();
		}
	});
	modelSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1300) {
			modelSlider();
		}
	});
	catalogpdf();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 993) {
			catalogpdf();
		}
	});
	vitrinaSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1100) {
			vitrinaSlider();
		}
	});

});
//слаидер главная-новости
function news() {
	$('#news').not('.slick-initialized').slick({
		speed: 300,
		dots: false,
		mobileFirst: true,
		arrows: true,
		appendArrows: $('.aisbergs-news .pagingInfo'),
		prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
		responsive: [{
			breakpoint: 1111,
			settings: "unslick"
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});
}
//слаидер главная карточки
function cardSlider() {
	$('#card-slider').not('.slick-initialized').slick({
		speed: 300,
		dots: false,
		mobileFirst: true,
		arrows: true,
		infinite: true,
		appendArrows: $('.our-team .pagingInfo'),
		prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
		responsive: [{
			breakpoint: 1150,
			settings: "unslick"
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});
}
//catalog page
function aboutSlider() {
	$('#about-slider').not('.slick-initialized').slick({
		speed: 300,
		dots: false,
		mobileFirst: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img src="src/img/about-us/arrows__aboutL.svg" data-role="none" class="about-slider__L" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/about-us/arrows__aboutR.svg" data-role="none" class="about-slider__R" aria-label="Next" tabindex="0" role="button" />',
		infinite: true,
		responsive: [{
			breakpoint: 1100,
			settings: {
				appendArrows: $('.certificat .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				appendArrows: $('.certificat .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000
			}
		},
		{
			breakpoint: 767,
			settings: {
				appendArrows: $('.certificat .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				appendArrows: $('.certificat .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
		]
	});
}
//продукт страница 
function  productSlider () {
	$('.product-first').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#product-two'
	});
	$('#product-two').not('.slick-initialized').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-first',
		dots: false,
		arrows:true,
		vertical:true,
		verticalSwiping: true,
		centerPadding:'10px',
		prevArrow: '<img src="src/img/product-pages/back-2.png" data-role="none" class="product-slider__L" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/product-pages/back-2------.png" data-role="none"class="product-slider__R" aria-label="Next" tabindex="0" role="button" />',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 741,
			settings: {
				vertical:false,
				centermode:true,
				centerPadding:'0',
				verticalSwiping: false,
				appendArrows: $('.showcase .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 615,
			settings: {
				vertical:false,
				centermode:true,
				centerPadding:'0',
				appendArrows: $('.showcase .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				verticalSwiping: false,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});
}
////продукт страница slider-модель
function modelSlider() {
	$('#slider-model').not('.slick-initialized').slick({
		speed: 300,
		dots: false,
		mobileFirst: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img src="src/img/product-pages/arrows__aboutL.svg" data-role="none" class="model-slider__L" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/product-pages/arrows__aboutR.svg" data-role="none" class="model-slider__R" aria-label="Next" tabindex="0" role="button" />',
		responsive: [{
			breakpoint: 1300,
			settings: {
				appendArrows: $('.lineup .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				appendArrows: $('.lineup .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000
			}
		},
		{
			breakpoint: 767,
			settings: {
				appendArrows: $('.lineup .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				appendArrows: $('.lineup .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
}
////продукт страница slider-каталог
function catalogpdf() {
$('#catalog-pdf').not('.slick-initialized').slick({
	speed: 300,
	dots: false,
	mobileFirst: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding:'40',
	prevArrow: '<img src="src/img/product-pages/pdf-arrowsL.png" data-role="none" class="catalog-slider__L" aria-label="Previous" tabindex="0" role="button" />',
	nextArrow: '<img src="src/img/product-pages/pdf-arrowsR.png" data-role="none" class="catalog-slider__R" aria-label="Next" tabindex="0" role="button" />',
	infinite: true,
	responsive: [{
			breakpoint: 993,
			settings: {
				vertical:false,
				centermode:true,
				centerPadding:'0',
				verticalSwiping: false,
				appendArrows: $('.catalog-video-pdf .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
}
//модель страница 
function  vitrinaSlider () {
	$('.vitrina-first').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.vitrina-second'
	});
	$('.vitrina-second').not('.slick-initialized').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.vitrina-first',
		dots: false,
		arrows:true,
		centerPadding:'10',
		appendArrows: $('.vitrina-slider'),
		prevArrow: '<img src="src/img/model/back2.png" data-role="none" class="vitrina-slider__L" aria-label="Previous" tabindex="0" role="button" />',
		nextArrow: '<img src="src/img/model/prev.png" data-role="none"class="vitrina-slider__R" aria-label="Next" tabindex="0" role="button" />',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 900,
			settings: {
				vertical:false,
				centermode:true,
				centerPadding:'0',
				verticalSwiping: false,
				appendArrows: $('.model-vitrina .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 615,
			settings: {
				vertical:false,
				centermode:true,
				centerPadding:'0',
				appendArrows: $('.model-vitrina .pagingInfo'),
				prevArrow: '<img src="src/img/news/arrow-light.png" data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" />',
				nextArrow: '<img src="src/img/news/arrow-right.png" data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" />',
				verticalSwiping: false,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
	});
}
//custom function showing current slide
var $status = $('.aisbergs-news .pagedots');
var $slickElement = $('#news');
$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
var $status2 = $('.our-team .pagedots');
var $slickElement2 = $('#card-slider');
$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status2.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
var $status3 = $('.certificat .pagedots');
var $slickElement3 = $('#about-slider');
$slickElement3.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status3.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
var $status4 = $('.lineup .pagedots');
var $slickElement4 = $('#slider-model');
$slickElement4.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status4.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
//slider элемент витрина
var $status5 = $('.showcase .pagedots');
var $slickElement5 = $('#product-two');
$slickElement5.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status5.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
var $status6 = $('.catalog-video-pdf .pagedots');
var $slickElement6 = $('#catalog-pdf');
$slickElement6.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status6.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
var $status7 = $('.model-vitrina .pagedots');
var $slickElement7 = $('#vitrina-second');
$slickElement7.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status7.html('<span class="dot active">' + i + '</span>' + '<span class="dots">' + '/' + slick.slideCount + '</span>');
});
// modal css fix
$(".uk-modal-dialog").css("opacity", "1");
$(".uk-modal-dialog").css("transition", "unset");
$(".uk-modal-dialog").css("transform", "none");
// tab css fix
$(".tabs").css("display", "block");
$(".tabs").css("margin-left", "0");
$(".tabs::before").css("border", "none");
//menu mobile

$('.navbar-toggle').click(function() {
	$('.navmobile .nav-open').fadeToggle();
  $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
  $('.hamburger').toggleClass('is-active');
  });

// Маска ввода номера телефона
$(function($){
	$('[name="phone"]').mask("+3(999) 999-9999");
});

//hover
$(document).ready(function($){  
	$('.nav__links li,.dd-block').hover(
            function () {
                $('.dd-block', this).stop().fadeIn(700);
            }, 
            function () {
                $('.dd-block', this).stop().fadeOut(700);            
            }
        );
$('.filter-design,.filter-design__content').hover(
            function () {
                $('.filter-design__content', this).stop().fadeIn(500);
            }, 
            function () {
                $('.filter-design__content', this).stop().fadeOut(500);  
                
            }
        );
$('.filter-design__content a').click(function() { 
  $('.filter-design__content').fadeOut(500);
});
$('.filter-product,.advantage').hover(
            function () {
                $('.advantage', this).stop().fadeIn(500);
            }, 
            function () {
                $('.advantage', this).stop().fadeOut(500);      
            }
        );
$('.filter-product .advantage .advantage__image-wrap').click(function() { 
  $('.advantage').fadeOut(500);
});
//mobil click
$('.navmobile__links li .click-product').click(function() {
  $('.dd-block').fadeIn("slow");
  $('.navmobile .nav-open').fadeToggle();
  $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
  $('.hamburger').toggleClass('is-active');
  });
$('.clicks').click(function() {
  $('.dd-block').fadeOut("slow");
  $('.navmobile .nav-open').fadeToggle();
  $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
  $('.hamburger').toggleClass('is-active');
  });

  });
 $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".dd-block").length == 0) {
             $('.dd-block').fadeOut("slow");
        }
    });
//form2 продукт
$(document).ready(function() {
  $('.form2').submit(function(e) {
      e.preventDefault();
if (document.form2.name.value == '' || document.form2.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     $('.thanks-overlay').fadeIn();
     $('html').toggleClass('overflow');
      $(this).find('input').val('');
      $('.form2').trigger('reset');
       setTimeout(function() {
    $(".thanks-overlay").fadeOut();
    $('html').removeClass('overflow');
    },5000);
    });
    return false;
  });
  
});


$(function(){
  $(".form2").validate({
    rules: {
      name:{
        required:true
      },
      phone:{
        required:true,
        digits:false
      }
    },
    messages:{
      name:{
        required: "Данное поле обязательно к заполнению"
      },
      phone:{
        required: "Данное поле обязательно к заполнению",
        digits: "Введите корректный номер телефона"
      }

    },
    focusCleanup:true

  });

});
//form1 продукт
$(document).ready(function() {
  $('form').submit(function(e) {
      e.preventDefault();
if (document.form.name.value == '' || document.form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     $('.thanks-overlay').fadeIn();
     $('html').toggleClass('overflow');
      $(this).find('input').val('');
      $('form').trigger('reset');
       UIkit.modal('#modal-close-default').hide();
      var timerId =  setTimeout(function() {
    $(".thanks-overlay").fadeOut();
    $('html').removeClass('overflow');
    UIkit.modal('#modal-close-default').hide();
    },5000);
      // Закрыть попап «спасибо»
       $('.out').click(function() { 
  	clearTimeout(timerId);
  $('.thanks-overlay').fadeOut();
  UIkit.modal('#modal-close-default').hide();
   $('html').removeClass('overflow');
	});
    });
    return false;
  });
  
});
 $(function(){
  $("form").validate({
    rules: {
      name:{
        required:true
      },
      phone:{
        required:true,
        digits:false
      }
    },
    messages:{
      name:{
        required: "Данное поле обязательно к заполнению"
      },
      phone:{
        required: "Данное поле обязательно к заполнению",
        digits: "Введите корректный номер телефона"
      }

    },
    focusCleanup:true

  });

});



