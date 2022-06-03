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

    $(document).ready(function() {

        $('#clients').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
            smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 2000,
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
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 10
                },
                992: {
                    items: 3,
                    margin: 10
                },
                1200: {
                    items: 5,
                    margin: 10
                }
            }
        });

        $('#banks-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 10
                },
                992: {
                    items: 3,
                    margin: 10
                },
                1200: {
                    items: 5,
                    margin: 10
                }
            }
        });


    	new Chart(document.getElementById("chart1"), {
    		"type": "line",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "B.B.V.A", 
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        21, 
                        24, 
                        25, 
                        30,
                        27,
                        28,
                        21,
                        23, 
                        22, 
                        30, 
                        20
                    ],
    				"fill": false,
    				"borderColor": "rgb(0,255,0,0.49)",
    				"lineTension": 0.1
    			}]
    		},
    		"options": {}
    	});

    	new Chart(document.getElementById("chart2"), {
    		"type": "bar",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "B.B.V.A", 
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        21, 
                        24, 
                        25, 
                        30,
                        27,
                        28,
                        21,
                        23, 
                        22, 
                        30, 
                        20
                    ],
    				"fill": false,
    				"backgroundColor": [
                        "rgba(236, 94, 105, 0.2)", 
                        "rgba(241, 194, 5, 0.2)", 
                        "rgba(99, 203, 137, 0.2)", 
                        "rgba(0, 112, 224, 0.2)", 
                        "rgba(153, 102, 255, 0.2)", 
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(0, 112, 224, 0.2)", 
                        "rgba(236, 94, 105, 0.2)", 
                        "rgba(0, 112, 224, 0.2)", 
                        "rgba(153, 102, 255, 0.2)", 
                        "rgba(201, 203, 207, 0.2)"
                    ],
    				"borderColor": [
                        "rgb(236, 94, 105)", 
                        "rgb(241, 194, 5)", 
                        "rgb(99, 203, 137)", 
                        "rgb(0, 112, 224)", 
                        "rgb(153, 102, 255)", 
                        "rgb(201, 203, 207)",
                        "rgb(0, 112, 224)", 
                        "rgb(236, 94, 105)", 
                        "rgb(0, 112, 224)", 
                        "rgb(153, 102, 255)", 
                        "rgb(201, 203, 207)",
                    ],
    				"borderWidth": 1
    			}]
    		},
    		"options": {
    			"scales": {
    				"yAxes": [{
    					"ticks": {
    						"beginAtZero": true
    					}
    				}]
    			}
    		}
    	});

    	new Chart(document.getElementById("chart3"), {
    		"type": "pie",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "B.B.V.A", 
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        21, 
                        24, 
                        25, 
                        30,
                        27,
                        28,
                        21,
                        23, 
                        22, 
                        30, 
                        20
                    ],
                    "backgroundColor": [
                        "rgba(236, 94, 105, 0.7)", 
                        "rgba(241, 194, 5, 0.7)", 
                        "rgba(99, 203, 137, 0.7)", 
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(153, 102, 255, 0.7)", 
                        "rgba(201, 203, 207, 0.7)",
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(236, 94, 105, 0.7)", 
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(153, 102, 255, 0.7)", 
                        "rgba(201, 203, 207, 0.7)"
                    ],
    			}]
    		}
    	});

        new Chart(document.getElementById("chart4"), {
    		"type": "doughnut",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "B.B.V.A", 
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        21, 
                        24, 
                        25, 
                        30,
                        27,
                        28,
                        21,
                        23, 
                        22, 
                        30, 
                        20
                    ],
                    "backgroundColor": [
                        "rgba(236, 94, 105, 0.7)", 
                        "rgba(241, 194, 5, 0.7)", 
                        "rgba(99, 203, 137, 0.7)", 
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(153, 102, 255, 0.7)", 
                        "rgba(201, 203, 207, 0.7)",
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(236, 94, 105, 0.7)", 
                        "rgba(0, 112, 224, 0.7)", 
                        "rgba(153, 102, 255, 0.7)", 
                        "rgba(201, 203, 207, 0.7)"
                    ],
    			}]
    		}
    	});

        $('.countup').counterUp({
            delay: 25,
            time: 4900
        });

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
}
)(jQuery);

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
        image.style.color =  'yellow';
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
        image.style.color = 'lime'
    }
}

$(document).ready(function() {
    "use strict";
    $('#example').dataTable();    
    $('#example2').dataTable();    
});