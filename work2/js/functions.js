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
		//var directionsDisplay;
		//var directionsService = new google.maps.DirectionsService();
		function initialize() {
			// map option
			var mapOptions = {
				center: new google.maps.LatLng(55.610420,37.6536573),
				
				//destination: new google.maps.LatLng(55.610420,37.6536573),
				//origin: new google.maps.LatLng(55.610420,37.6536573),
				//travelMode: google.maps.DirectionsTravelMode.DRIVING,				
				
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
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-12"
            },
            {
                "lightness": "-2"
            },
            {
                "gamma": "1.28"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-37"
            },
            {
                "lightness": "26"
            },
            {
                "gamma": "3.31"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-83"
            },
            {
                "lightness": "-8"
            },
            {
                "gamma": "1.98"
            },
            {
                "weight": "0.72"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-6"
            },
            {
                "lightness": "6"
            },
            {
                "gamma": "1.12"
            },
            {
                "weight": "1.63"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "3"
            },
            {
                "gamma": "0.93"
            },
            {
                "weight": "1.63"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-10"
            },
            {
                "gamma": "1.98"
            },
            {
                "weight": "4.13"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "lightness": "100"
            },
            {
                "saturation": "-52"
            },
            {
                "gamma": "0.09"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "visibility": "on"
            },
            {
                "saturation": "22"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "9"
            },
            {
                "gamma": "0.84"
            },
            {
                "weight": "3.93"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-42"
            },
            {
                "lightness": "10"
            },
            {
                "gamma": "0.58"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-88"
            },
            {
                "weight": "0.78"
            },
            {
                "lightness": "-1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "24"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "14"
            },
            {
                "lightness": "32"
            },
            {
                "hue": "#00aeff"
            },
            {
                "gamma": "0.29"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "72"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "33"
            },
            {
                "lightness": "-6"
            },
            {
                "hue": "#00b5ff"
            }
        ]
    }
]
			};
			
			//window.setTimeout(calcRoute,1000);
			// function calcRoute() {
			// directionsDisplay = new google.maps.DirectionsRenderer({map:map});
			
			//  navigator.geolocation.getCurrentPosition(function(position) {

			// 	// РўРµРєСѓС‰РёРµ РєРѕРѕСЂРґРёРЅР°С‚С‹.
			// 	var lat = position.coords.latitude;
			// 	var lng = position.coords.longitude;

			// 	//var start = new google.maps.LatLng(55.606620, 37.652391);
			// 		  var start = new google.maps.LatLng(lat, lng);
			// 		  var end = new google.maps.LatLng(55.610420,37.6536573);

			// 		  var request = {
			// 			origin:start,
			// 			destination:end,
			// 			travelMode: google.maps.TravelMode.DRIVING
			// 		  };
			// 		  console.log(request);
			// 		  if (request==true)
			// 		  {
			// 			console.log("REQUEST");
			// 		  }
			// 		  console.log(JSON.stringify(request)); 
			// 		  directionsService.route(request, function(result, status) {
			// 			if (status == google.maps.DirectionsStatus.OK) {
			// 				if (!result.routes[0].copyrights) { 
			// 				result.routes[0].copyrights = "Copyrights unknown."; 
			// 				}
			// 			  directionsDisplay.setDirections(result);
			// 			}
			// 		  });
			// 	});		
		 //  }			

			// define google map
			map = new google.maps.Map(document.getElementById('js-map'), mapOptions);
			
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.610420,37.6536573),
                map: map,
                icon: '/upload/marker.png'
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
			//appendArrows: $('.js-slider-arrows'),
			slidesToShow: 1,
			//prevArrow: '<span class="sl_arw slick-arrow__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
			//nextArrow: '<span class="sl_arw slick-arrow__next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
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
			percentPosition: true
		});
	}
}
/*Grid function end*/

function checkNextButtons()
{
	if($(".next_page_media").length > 0)
	{
		if($(".ajax_next").length > 0)
		{
			$(".next_page_media").removeClass("hiddes").find("a").attr("href", $(".ajax_next").find("a").attr("href"));
			$(".ajax_next").remove();
		}
	}


	if($(".next_page").length > 0)
	{
		$(".ajax_next").each(function() {
			$(this).closest(".tabs_news__content.is-active").find(".next_page").removeClass("hiddes").find("a").attr("href", $(this).find("a").attr("href"));
			$(this).remove();
		});
	}
}

(function ($) {
	$(function () {
		$('ul.media-menu__list').on('click', 'li:not(.is-active)', function(e) {
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
	checkNextButtons();
});
$(window).on('resize', function () {
	autoFooter();
});



jQuery(document).ready(function () {

	$(".media-navigation__link.more").on("click", function (e) {
		e.preventDefault();
		$(".blc_tags .media-navigation__item.hiddes").removeClass("hiddes");
		$(this).remove();
	});

	$(".next_page_media").on("click", function (e) {
		e.preventDefault();
		var news_count = $(".catalog__list.js-grid").data("ncount");
		var lang = $("#lang").val();
		var tags = $("#tags").val();
		$.get("/ajax/ajax_get_media.php?"+$(this).find("a").attr("href"), {lang: lang, tags: tags, ncount: news_count}, function(data) {

			$(".catalog__list.js-grid .pagination").remove();
			var $items = $(data);
			$(".catalog__list.js-grid").append($items);

			var next = $(".catalog__list.js-grid .ajax_next");
			if(next.length > 0)
			{
				$(".next_page_media").removeClass("hiddes").find("a").attr("href", next.find("a").attr("href"));
				$(".catalog__list.js-grid .ajax_next").remove();
			}
			else
			{
				$(".next_page_media").remove();
			}

			$('.catalog__list.js-grid').isotope('appended', $items);
		});
	});


	$(".next_page").on("click", function (e) {
		e.preventDefault();
		var current_section = $(".tabs_news__content.is-active").data("section");
		var news_count = $(".tabs_news__content.is-active").data("ncount");
		var lang = $("#lang").val();

		$.get("/ajax/ajax_get_news.php?"+$(this).find("a").attr("href"), {lang: lang, section: current_section, ncount: news_count}, function(data) {
			$(".tabs_news__content.is-active .pagination").remove();
			var $items = $(data);
			$(".tabs_news__content.is-active .js-grid").append($items);

			var next = $(".tabs_news__content.is-active .ajax_next");
			if(next.length > 0)
			{
				$(".tabs_news__content.is-active .next_page").removeClass("hiddes").find("a").attr("href", next.find("a").attr("href"));
				$(".tabs_news__content.is-active .ajax_next").remove();
			}
			else
			{
				$(".tabs_news__content.is-active .next_page").remove();
			}

			$('.tabs_news__content.is-active .js-grid').isotope('appended', $items);
		});
	});

	$('#ask_expert button').on("click", function (e) {
		e.preventDefault();
		var form = $("#ask_expert .g_form");
		$(form).find(".error.result").hide();
		var err = false;
		var params = {};
		$(form).find("input[type=text], textarea").each(function() {
			if($(this).val() == "") { $(this).addClass("error"); err = true; }
			else { params[$(this).attr("name")] = $(this).val(); $(this).removeClass("error"); }
		});
		if(err) { $(form).find(".error.result").show(); return false; }

		$.post(
			"/ajax/ajax_ask_expert.php",
			params,
			function(res)
			{
				if(res == "ok") { $.fancybox.close(); }
			}
		);
	});

	$('.header__lng li').on('click', 'a', function () {
		$('.header__lng li a').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.map-contacts__adress-link').click(function () {
		$('.gg_img').addClass('hides');
		$('.gg_close').removeClass('hides');
		//$('.gg_map .map-contacts__title').removeClass('hides');
		return false;
	});

	$('.gg_close').click(function () {
		$('.gg_img').removeClass('hides');
		$(this).addClass('hides');
		//$('.gg_map .map-contacts__title').addClass('hides');
		//$('.gg_map .map-contacts__title').addClass('hides');
		return false;
	});
	
	$('.gmb').click(function(){
		$('.nav__list').slideToggle();
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
	
	if($('input').val() === 'EN'){
		tEn();
	}else{
		tRu();
	}

	function tRu(){
		$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
		
		function windowSize(){
			if ($(window).width() > '767'){
				$('.blc_tags').css({"display":"block"});
				$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
			} else {
				$('.blc_tags').css({"display":"none"});
				$('.tags_ttl p').toggleText("Показать теги:", "Скрыть теги:");
			}
			// var tH = $('.articles__info-inner').outerHeight();
			// $('.blc_slr_artc_details').css({"height": tH});		
		}
		$(window).on('resize',windowSize);		
	}

	function tEn(){
		$('.tags_ttl p').toggleText("Show tags:", "Hide Tags:");
		
		function windowSize(){
			if ($(window).width() > '767'){
				$('.blc_tags').css({"display":"block"});
				$('.tags_ttl p').toggleText("Show tags:", "Hide Tags:");
			} else {
				$('.blc_tags').css({"display":"none"});
				$('.tags_ttl p').toggleText("Show tags:", "Hide Tags:");
			}
			// var tH = $('.articles__info-inner').outerHeight();
			// $('.blc_slr_artc_details').css({"height": tH});		
		}
		$(window).on('resize',windowSize);		
	}




	$('.mdc_main_list li').click(function(){
		$(this).toggleClass('active');
		$(this).find('.desc').slideToggle();
	});

	$(".fancybox").fancybox({
		padding: [0,0,0,0],
		fitToView: false
	});

	var mn_slr = new Swiper('.mn_slr', {
		loop: true,
		autoplay: 0,
		speed: 1300,		
	    pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',    
	    paginationClickable: true,
	    paginationType: 'fraction',
		paginationFractionRender: function (swiper, currentClassName, totalClassName) {
		      return '<span class="' + currentClassName + '"></span>' +
		             ' <span class="cnt"></span> ' +
		             '<span class="' + totalClassName + '"></span>';
		  }	    
	});	


	thResize();

	function thResize(){
		var tH = $('.articles__info-inner .artit').outerHeight();
		$('.blc_slr_artc_details').css({"height": tH});		
	}

	$(window).resize(function(){
		thResize();
	});


});

(function($){
	// console.log(navigator.userAgent);
	/* Adjustments for Safari on Mac */
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		// console.log('Safari on Mac detected, applying class...');
		$('html').addClass('safari_mac'); // provide a class for the safari-mac specific css to filter with
	}
})(jQuery);





















