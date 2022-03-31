/*-----------------------------------------------------------------------------------

    Theme Name: Fabrex - Multipurpose Business and Admin Template
    Description: Multipurpose Business and Admin Template
    Author: Chitrakoot Web
    Version: 3.3

    ---------------------------------- */

    (function($) {
        "use strict";
        var $window = $(window);
        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
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
        var resizeTimer;
        $window.on('resize', function(e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if ($window.width() > 1091) {
                    $('.categories .shop-category').show();
                } else {
                    $('.categories .shop-category').hide();
                }
            }, 250);
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
        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }
        function SetResizeContent() {
            fullScreenHeight();
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
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                margin: 0,
                autoplay: true,
                smartSpeed: 500
            });

        });
        $window.on("load", function() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();
            $('.single-img').magnificPopup({
                delegate: '.popimg',
                type: 'image'
            });
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
            $window.stellar();

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
                        color: 'yellow'
                    });
                });
            };
            plugins_init();
        });
    }
    )(jQuery);
    