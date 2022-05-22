(function($) {
    "use strict";
    $(document).ready(function() {
        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "30 June 2022 00:01:00",
                        format: "on"
                    });
                }
            });
        }
    });
}
)(jQuery);