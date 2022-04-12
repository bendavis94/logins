$(document).ready(function() {
    
    "use strict";
    
    var $validator = $("#wizardForm").validate({
        rules: {
		    exampleInputQuantity: {
                required: true
            }
        }
    });
 
    $('#rootwizard').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
            if($percent == 0){
                $('#rootwizard').find('.progress-bar').css({width:50+'%'});
            }
            if($percent > 30){
                document.getElementById('pablos').classList.remove("bg-warning");
                document.getElementById('pablos').classList.add("bg-warning");
            }
            if($percent == 100){
                document.getElementById('pablos').classList.remove("bg-info");
                document.getElementById('pablos').classList.add("bg-success");
            }
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },
        'onTabClick': function(tab, navigation, index) {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },
    });
    
    $('.date-picker').datepicker({
        orientation: "top auto",
        autoclose: true
    });
});