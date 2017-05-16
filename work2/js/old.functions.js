/* placeholder */
function placeholder(objInputs) {
	if (objInputs.length) objInputs.placeholder();
}
/* placeholder end */

/* autoFooter */
function autoFooter() {
	var wrapper = $('.wrapper'),
		footer = $('.footer'),
		footerHeight = footer.outerHeight();
	footer.css('margin-top', -footerHeight);
	wrapper.css('padding-bottom', footerHeight);
}
/* autoFooter end */

/*tooltip*/
function tooltip() {
	if ($('.js-tooltip-position').length) {

		$('.tooltip__text-link').on('click', function (ev) {
			ev.stopPropagation();
		});

		$('.js-tooltip-position').on('click', function (ev) {
			var $this = $(this),
				target = $(this).data("item"),
				thisWidth = $this.width() / 2,
				tooltipHeight = $('.js-tooltip').outerHeight(),
				thisPositionLeft = $this.offset().left,
				thisPositionTop = $this.offset().top,
				windowWidth = $(window).width(),
				tooltipWidth = $('.js-tooltip').outerWidth(),
				inspectionWidth = tooltipWidth + thisPositionLeft;

			$('.js-tooltip-position').not($this).removeClass('is-active');

			$this.toggleClass('is-active');
			console.log(windowWidth, inspectionWidth)

			if ($this.hasClass('is-active')) {
				$('.tooltip').removeClass('is-active');
				$('#'+target).addClass('is-active');
			} else {
				$('#'+target).removeClass('is-active');
			}
			return false;
		})

		$(document).on('click', function (e) {
			if($('.tooltip.is-active').length > 0)
			{
				$('.js-tooltip-position').removeClass('is-active');
				$('.tooltip.is-active').removeClass('is-active');
			}
		})

	}
}
/*tooltip end*/

function map() {
	if ($('#js-map').length) {
		var map;

		function initialize() {
			// map option
			var mapOptions = {
				center: new google.maps.LatLng(55.610420,37.6536573),
				zoom: 17,
				scrollwheel: false,
				//				zoomControl: false,
				//				disableDoubleClickZoom: true,
				//				mapTypeControl: false,
				//				scaleControl: false,
				//				scrollwheel: false,
				//				panControl: false,
				//				streetViewControl: false,
				//				draggable: true,
				//				overviewMapControl: false,
				overviewMapControlOptions: {
					opened: false,
				},
				featureType: "ROAD.MAP",
				styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#989898"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#adadad"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#9ec9f6"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9ec9f6"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
			};

			// define google map
			map = new google.maps.Map(document.getElementById('js-map'), mapOptions);
			
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.610420,37.6536573),
                map: map,
                icon: 'img/marker.png'
            });

		}

		// init map
		google.maps.event.addDomListener(window, 'load', initialize);
		google.maps.event.addDomListener(window, "resize", function () {
			var center = map.getCenter();
			map.setCenter(center);
		});
	}
}
/*map end*/

/* accordion */
function accordion() {
	if ($('.js-accordion').length) {
		$('.js-accordion').on('click', function () {
			$(this).toggleClass('is-closed');
			$(this).next().slideToggle();
		})
	}
}
/* accordion end */

/* fancybox */
function fancybox() {
	// popup
	if ($('.js-popup-link').length) {
		var $link = $('.js-popup-link'),
			$close = $('.js-close-popup');

		$link.on('click', function () {
			var href = $(this).attr('href');
			$.fancybox({
				href: href,
				wrapCSS: 'custom-popup',
				fitToView : false,
				width     : 'auto',
				height    : 'auto',
				margin: [0, 0, 0, 0],
				autoSize  : false,
				padding:[0, 0, 0, 0],
			});
		});
		$close.on('click', function (e) {
			e.preventDefault();
			$.fancybox.close();
		});
	}

	// image
	if ($('.js-image-link').length) {
		$('.js-image-link').fancybox({
			wrapCSS: 'fancy-image'
		});
	}
}
/* fancybox end */

/*main slider*/
function sliders() {
	if ($('.js-slider-list').length) {
		var slideShowCfg = {
			dots: false,
			infinite: true,
			speed: 1300,
			appendArrows: $('.js-slider-arrows'),
			slidesToShow: 1,
			prevArrow: '<span class="sl_arw slick-arrow__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
			nextArrow: '<span class="sl_arw slick-arrow__next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
		}
		$('.js-slider-list').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('.js-slider-info .slider__counter-all').text(slick.slideCount);
			$('.js-slider-info .slider__counter-current').text(i);
		});
		$('.js-slider-list').slick(slideShowCfg);
	}
}
/*main slider end*/

/*Grid function*/
function grid() {
	if ($('.js-grid').length) {
		$('.js-grid').isotope({
			itemSelector: '.js-grid-item',
			percentPositijs-grid-itemon: true
		});
	}
}
/*Grid function end*/

(function ($) {
	$(function () {
		$('ul.media-menu__list').on('click', 'li:not(.is-active)', function () {
			$(this)
				.addClass('is-active').siblings().removeClass('is-active')
				.closest('.tabs_news').find('.tabs_news__content').removeClass('is-active').eq($(this).index()).addClass('is-active');
			grid();
		});
	});
})(jQuery);


$(document).on('ready', function () {
	autoFooter();
	fancybox();
	accordion();
	tooltip();
	map();
	placeholder($('input[placeholder], textarea[placeholder]'));
});

$(window).load(function () {
	sliders();
	grid();
});
$(window).on('resize', function () {
	autoFooter();
});



jQuery(document).ready(function () {

	$('#ajax_next').click(function (e) {
		e.preventDefault();
		$.get($(this).find("a").attr("href"), {is_ajax: 'y'}, function(data) {
			$(".catalog__item.js-grid-item.pagination").after(data);
			$(".catalog__item.js-grid-item.pagination").remove();
//			grid();
		});

	});


	$('.media-navigation__link--color').click(function (e) {
		e.preventDefault();
		$(this).hide();
		$(".media-navigation__item:hidden").fadeIn(250);
	})


	$('.header__lng li').on('click', 'a', function () {
		$('.header__lng li a').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.map-contacts__adress-link, .gg_img').click(function () {
		$('.gg_img').addClass('hides');
		$('.gg_close').removeClass('hides');
		//$('.gg_map .map-contacts__title').removeClass('hides');
		return false;
	});

	$('.gg_close').click(function () {
		$('.gg_img, .map-contacts__title').removeClass('hides');
		$('.gg_close, .gg_map .map-contacts__title').addClass('hides');
		//$('.gg_map .map-contacts__title').addClass('hides');
		return false;
	});
	
	$('.gmb').click(function(){
		$('.nav__list').toggleClass('active');
		$(this).toggleClass('open');
	});
	
	$('.tags_ttl p').click(function(){
		$(this).toggleClass('active');		
		$('.blc_tags').slideToggle(800);
	});
	
	jQuery.fn.extend({
		toggleText: function (a, b){
			var isClicked = false;
			var that = this;
			this.click(function (){
				if (isClicked){ 
					setTimeout(function(){
						that.text(a); isClicked = false; 
					}, 800);
				}
				else {
					that.text(b); isClicked = true; 	
				}
			});
			return this;
		}
	});	
	
	$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
	
	function windowSize(){
		if ($(window).width() > '767'){
			$('.blc_tags').css({"display":"block"});
			$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
		} else {
			$('.blc_tags').css({"display":"none"});
			$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
		}
	}
	$(window).on('resize',windowSize);
	
});

(function($){
	// console.log(navigator.userAgent);
	/* Adjustments for Safari on Mac */
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		// console.log('Safari on Mac detected, applying class...');
		$('html').addClass('safari_mac'); // provide a class for the safari-mac specific css to filter with
	}
})(jQuery);





















