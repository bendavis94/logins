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
		var $minheight = $window.height();
		element.css('min-height', $minheight);
	}


	function SetResizeContent() {
		fullScreenHeight();
	}
	SetResizeContent();
})(jQuery);