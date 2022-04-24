$(document).ready(function() {
    "use strict";
    var $validator = $("#wizardForm").validate({
        rules: {
		    exampleInputEmail: {
                required: true,
                email: true
		    }
        }
    });
 
    $('#rootwizard').bootstrapWizard({
        'onNext': function() {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
        }
    });

});