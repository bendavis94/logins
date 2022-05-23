let items = [];

var month = new Array();
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
var d = new Date();
var n = month[d.getMonth()];
var y = d.getFullYear();
var m = d.getDate();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    for(var i = 0; i < items.length; i++) {
        updateCartTotal();
    }
} else {
    document.getElementById('cartlength').style.display = 'none';
}

function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('thetot').innerHTML = `Checkout: $${total.toLocaleString()}`;
    localStorage.setItem('time-left',600);
}

