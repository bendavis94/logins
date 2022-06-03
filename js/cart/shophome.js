let items = [];

var month = new Array();
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "Septemeber";
var d = new Date();
var n = month[d.getMonth()];
var y = d.getFullYear();
var m = d.getDate();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);


    for(var i = 0; i < items.length; i++) {
        var cartRow = document.createElement('tr');
        var cartRow2 = document.createElement('li');
        cartRow.classList.add('table-warning');
        cartRow2.classList.add('total','bg-black');
        var cartItems =  document.getElementsByClassName('champez')[0];
        var cartItems2 = document.getElementsByClassName('champez2')[0];
        var cartRowContents = `
            <td>
                <span class="label label-warning">Pending<i class="fas fa-spin fa-sync-alt spinner-bordez"></i></span>
            </td>
            <td class="btn-balance">${(items[i].balance).replace('Balance: ','')}</td>
            <td><img src=${items[i].image} width="50px" style="border-radius: 2px"></td>
            <td id=${'name-on-table' + items.indexOf(items[i])} style="filter: blur(0px);"></td> 
            <td>${items[i].account}</td>
            <td class="btn-price">${(items[i].price).replace('Price: ','')}</td>
            <td>${items[i].website}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].info7}</td>
        `;

        cartRow.innerHTML = cartRowContents;

        cartItems.prepend(cartRow);
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

