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

        SetResizeContent();

        $window.on("load", function() {
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
    