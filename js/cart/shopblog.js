let items = [];

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
    updateCartTotal();
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
    console.log(total)
    document.getElementById('thetot').innerHTML = `Checkout: $${total.toLocaleString()}`;
    localStorage.setItem('time-left',600);
}

