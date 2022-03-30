(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");

        }
    });
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
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
    function ScreenFixedHeight() {
        var $headerHeight = $("header").height();
        var element = $(".screen-height");
        var $screenheight = $window.height() - $headerHeight;
        element.css('height', $screenheight);
    }
    function SetResizeContent() {
        ScreenFixedHeight();
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
        $('#services-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 10
                },
                768: {
                    items: 1,
                    margin: 10
                },
                992: {
                    items: 1,
                    margin: 10
                },
                1200: {
                    items: 1,
                    margin: 10
                }
            }
        });
        $('#banks-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 10
                },
                768: {
                    items: 1,
                    margin: 10
                },
                992: {
                    items: 1,
                    margin: 10
                },
                1200: {
                    items: 1,
                    margin: 10
                }
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




        if ($("#rev_slider_2").length !== 0) {
			var tpj = jQuery;
			var revapi2;
			tpj(document).ready(function() {
				if (tpj("#rev_slider_2").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_2");
				} else {
					revapi2 = tpj("#rev_slider_2").show().revolution({
						sliderType: "standard",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						spinner: "spinner4",
						navigation: {
							keyboardNavigation: "off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								enable: false,
								style: 'metis',
								tmp: '',
								rtl: false,
								hide_onleave: true,
								hide_onmobile: true,
								hide_under: 0,
								hide_over: 9999,
								hide_delay: 200,
								hide_delay_mobile: 1200,
								left: {
									container: 'slider',
									h_align: 'left',
									v_align: 'center',
									h_offset: 20,
									v_offset: 0
								},
								right: {
									container: 'slider',
									h_align: 'right',
									v_align: 'center',
									h_offset: 20,
									v_offset: 0
								}
							},
							bullets: {
								enable: false,
							},
						},
						responsiveLevels: [1240, 1024, 767, 480],
						gridwidth: [1170, 1170, 767, 480],
						gridheight: [430, 700, 600, 700],
						lazyType: "none",
						shadow: 0,
						shuffle: "off",
						autoHeight: "off",
					});
				}
			});
		}
       

    });
    $window.on("load", function() {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'swing',
            scrollTime: 600,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -70
        });
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        var $gallery = $('.gallery').isotope({});
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });
        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });


        function toggleFullScreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
        ;var navbar_init = function() {
            $('.switcher-setting').on('click', function() {
                toggleFullScreen();
                return false;
            });
        };
        navbar_init();


        var plugins_init = function() {
            var checkBox = $("input[type=checkbox]:not(.js-switch), input[type=radio]:not(.no-uniform)");
            if (checkBox.length > 0) {
                checkBox.each(function() {
                    $(this).uniform();
                });
            }
            ;var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            elems.forEach(function(html) {
                var switchery = new Switchery(html,{
                    size: 'small',
                    color: 'lime'
                });
            });
        };
        plugins_init();

    });
}
)(jQuery);
