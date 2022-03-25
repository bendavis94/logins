(function($) {
	"use strict";
	var $window = $(window);
	$('#preloader').fadeOut('normall', function() {
		$(this).remove();
	});
	var pageSection = $(".parallax,.bg-img");
	pageSection.each(function(indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});

	$window.resize(function(event) {
		setTimeout(function() {
			SetResizeContent();
		}, 500);
		event.preventDefault();
	});

	function fullScreenHeight() {
		var element = $(".full-screen");
		var $minheight = $window.height() - 61;
		element.css('min-height', $minheight);
	}


	function SetResizeContent() {
		fullScreenHeight();
	}
	SetResizeContent();
	$(document).ready(function() {
		$('#clients').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 500,
			responsiveClass: true,
			autoplayHoverPause: false,
			responsive: {
                0: {items: 5, margin: 10}, 
                768: {items: 9, margin: 15}, 
                992: {items: 12, margin: 23}, 
                1200: {items: 17, margin: 16}
			}
		});

		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			margin: 0,
			autoplay: true,
			smartSpeed: 500
		});


	});
})(jQuery);