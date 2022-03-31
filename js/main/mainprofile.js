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
        if ($("#chBar").length !== 0) {
            var chBar = document.getElementById("chBar");
            var chartData = {
                labels: [
                    "Bank of America", 
                    "Barclays Bank",
                    "BB&T Bank", 
                    "B.B.V.A Bank", 

                    "Chase Bank", 
                    "Chime Bank", 
                    "Citi Bank", 
                    "Citizens Bank",

                    "FundScrip", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C Bank",

                    "R.B.C Bank",
                    "Scotia Bank",
                    "ShopWithScrip",
                    "Suntrust",

                    "WellsFargo",
                    "Woodforest"
                ],
                datasets: [{
                    data: [
                        7, 10, 13, 12, 
                        14, 11, 13, 15,
                        8, 15, 12, 15, 
                        9, 8, 8, 9, 
                        11, 10],
                    backgroundColor: [
                        'rgba(107, 185, 131,0.8)', 
                        'rgba(242, 201, 117,0.8)', 
                        'rgba(237, 99, 83,0.8)', 
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(240, 217, 207,0.8)', 
                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 
                        'rgba(237, 85, 96,0.8)', 


                        'rgba(201, 223, 241,0.8)', 
                        'rgba(240, 217, 207,0.9)',
                        'rgba(135, 174, 180,0.8)',
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(240, 217, 207,0.8)', 
                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 
                        'rgba(237, 85, 96,0.8)', 

                        'rgba(201, 223, 241,0.8)', 
                        'rgba(242, 190, 84,0.8)'
                    ],
                }, ]
            };
            if (chBar) {
                new Chart(chBar,{
                    type: 'bar',
                    data: chartData,
                    options: {
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5,
                                categoryPercentage: 2
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });
            }
        }


        if ($("#chBar2").length !== 0) {
            var chBar2 = document.getElementById("chBar2");
            var chartData = {
                labels: [
                    "Bank of America", 
                    "Barclays Bank",
                    "BB&T Bank", 
                    "B.B.V.A Bank", 

                    "Chase Bank", 
                    "Chime Bank", 
                    "Citi Bank", 
                    "Citizens Bank",

                    "FundScrip", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C Bank",

                    "R.B.C Bank",
                    "Scotia Bank",
                    "ShopWithScrip",
                    "Suntrust",

                    "WellsFargo",
                    "Woodforest"
                ],
                datasets: [{
                    data: [
                        7, 10, 13, 12, 
                        14, 11, 13, 15,
                        8, 15, 12, 15, 
                        9, 8, 8, 9, 
                        11, 10],
                    backgroundColor: [
                        'rgba(107, 185, 131,0.8)', 
                        'rgba(242, 201, 117,0.8)', 
                        'rgba(237, 99, 83,0.8)', 
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(240, 217, 207,0.8)', 
                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 
                        'rgba(237, 85, 96,0.8)', 


                        'rgba(201, 223, 241,0.8)', 
                        'rgba(240, 217, 207,0.9)',
                        'rgba(135, 174, 180,0.8)',
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(240, 217, 207,0.8)', 
                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 
                        'rgba(237, 85, 96,0.8)', 

                        'rgba(201, 223, 241,0.8)', 
                        'rgba(242, 190, 84,0.8)'
                    ],
                }, ]
            };
            if (chBar2) {
                new Chart(chBar2,{
                    type: 'doughnut',
                    data: chartData,
                    options: {
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5,
                                categoryPercentage: 2
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });
            }
        }


        if ($("#myPieChart").length !== 0) {
            var ctx = document.getElementById('myPieChart').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: [
                        "Bank of America", 
                        "Barclays Bank",
                        "BB&T Bank", 
                        "B.B.V.A Bank", 
    
                        "Chase Bank", 
                        "Chime Bank", 
                        "Citi Bank", 
                        "Citizens Bank",
    
                        "FundScrip", 
                        "Huntington",
                        "Navy Federal",
                        "P.N.C Bank",
    
                        "R.B.C Bank",
                        "Scotia Bank",
                        "ShopWithScrip",
                        "Suntrust",
    
                        "WellsFargo",
                        "Woodforest"
                    ],
                    datasets: [{
                        data: [
                            7, 10, 13, 12, 
                            14, 11, 13, 15,
                            8, 15, 12, 15, 
                            9, 8, 8, 9, 
                            11, 10],
                            backgroundColor: [
                                'rgba(107, 185, 131,0.8)', 
                                'rgba(242, 201, 117,0.8)', 
                                'rgba(237, 99, 83,0.8)', 
                                'rgba(242, 190, 84,0.8)', 
        
        
                                'rgba(240, 217, 207,0.8)', 
                                'rgba(135, 174, 180,0.8)', 
                                'rgba(21, 62, 92,0.8)', 
                                'rgba(237, 85, 96,0.8)', 
        
        
                                'rgba(201, 223, 241,0.8)', 
                                'rgba(240, 217, 207,0.9)',
                                'rgba(135, 174, 180,0.8)',
                                'rgba(242, 190, 84,0.8)', 
        
        
                                'rgba(240, 217, 207,0.8)', 
                                'rgba(135, 174, 180,0.8)', 
                                'rgba(21, 62, 92,0.8)', 
                                'rgba(237, 85, 96,0.8)', 
        
                                'rgba(201, 223, 241,0.8)', 
                                'rgba(242, 190, 84,0.8)'
                            ],
                    }],
                }
            });
        }
    
        $('.countup').counterUp({
            delay: 25,
            time: 2000
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
}
)(jQuery);