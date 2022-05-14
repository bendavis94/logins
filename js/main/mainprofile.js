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
        if ($("#chBar").length !== 0) {
            var chBar = document.getElementById("chBar");
            var chartData = {
                labels: [
                    "Bank of America", 
                    "Barclays Bank",
                    "B.B.V.A Bank", 

                    "Chase Bank", 
                    "Chime Bank", 
                    "Citi Bank", 
                    
                    "Huntington",
                    "Navy Federal",
                    "P.N.C Bank",
                    "R.B.C Bank",

                    "Scotia Bank",
                    "Truist",
                    "Woodforest"
                ],
                datasets: [{
                    data: [
                        55, 50, 52, 
                        58, 60, 57, 
                        56, 55, 54, 41, 
                        37, 59, 50
                    ],
                    backgroundColor: [
                        'rgba(107, 185, 131,0.8)', 
                        'rgba(242, 201, 117,0.8)', 
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(240, 217, 207,0.8)', 
                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 

                        'rgba(201, 223, 241,0.8)', 
                        'rgba(240, 217, 207,0.9)',
                        'rgba(135, 174, 180,0.8)',
                        'rgba(242, 190, 84,0.8)', 


                        'rgba(135, 174, 180,0.8)', 
                        'rgba(21, 62, 92,0.8)', 
                        'rgba(237, 85, 96,0.8)', 
                    ],
                }, ]
            };
            if (chBar) {
                new Chart(chBar,{
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
                        "B.B.V.A Bank", 
    
                        "Chase Bank", 
                        "Chime Bank", 
                        "Citi Bank", 

                        
                        "Huntington",
                        "Navy Federal",
                        "P.N.C Bank",
                        "R.B.C Bank",
    
                        "Scotia Bank",
                        "Truist",
                        "Woodforest"
                    ],
                    datasets: [{
                        data: [
                            55, 50, 52, 
                            58, 60, 57, 
                            56, 55, 54, 41, 
                            37, 59, 50
                        ],
                        backgroundColor: [
                            'rgba(107, 185, 131,0.8)', 
                            'rgba(242, 201, 117,0.8)', 
                            'rgba(242, 190, 84,0.8)', 
    
                            'rgba(240, 217, 207,0.8)', 
                            'rgba(135, 174, 180,0.8)', 
                            'rgba(21, 62, 92,0.8)', 
    
                            'rgba(201, 223, 241,0.8)', 
                            'rgba(240, 217, 207,0.9)',
                            'rgba(135, 174, 180,0.8)',
                            'rgba(242, 190, 84,0.8)', 
    
                            'rgba(135, 174, 180,0.8)', 
                            'rgba(21, 62, 92,0.8)', 
                            'rgba(237, 85, 96,0.8)', 
                        ],
                    }],
                }
            });
        }
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