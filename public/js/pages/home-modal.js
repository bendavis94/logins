$("#exampleModal").on("show.bs.modal", function (event) {
    ("use strict");
});

$('#myform').on('submit', function(ev) {
    $('#codeModal').modal('show');
    $('#phoneModal').modal('hide');
    ev.preventDefault();
});