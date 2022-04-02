let items = [];
var month = new Array();

month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
var d = new Date();
var n = month[d.getMonth()];
var y = d.getFullYear();
var m = d.getDate();

document.getElementById('datez1').innerHTML = n + " " +  m +  ', '  + y;
document.getElementById('datez2').innerHTML = n + " " +  m +  ', '  + y;
document.getElementById('datez3').innerHTML = n + " " + (m-1) +  ', '  + y;
document.getElementById('datez4').innerHTML = n + " " + (m-1) +  ', '  + y;


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
                <span class="label label-warning">Pending <i class="fas fa-spin fa-sync-alt spinner-bordez"></i></span>
            </td>
            <td class="btn-balance">${(items[i].balance).replace('Balance: ','')}</td>
            <td><img src=${items[i].image} width="50px" style="border-radius: 2px"></td>
            <td id=${'name-on-table' + items.indexOf(items[i])} style="filter: blur(0px);"></td> 
            <td>${items[i].account}</td>
            <td>${(items[i].price).replace('Price: ','')}</td>
            <td>${n} ${m}, ${y}</td>
            <td>${items[i].website}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].info7}</td>
        `;
        var cartRowContents2 = `
            <table class="table table-bordered table-mobile">
                <thead>
                    <tr>
                        <th>
                            <img src=${items[i].image} class="champez3img">
                        </th>
                        <th>
                            ${items[i].balance}
                        </th>
                        <th class="btn-price">
                            ${items[i].price}
                        </th>
                        <th>
                            <img src="failure.svg" class="champez3fail">
                        </th>
                    </tr>
                </thead>
            </table>
            <table class="table table-bordered table-mobile">
                <thead>
                    <tr>
                        <th>${items[i].account}</th>
                    </tr>
                </thead>
            </table>
            <table class="table table-bordered table-mobile">
                <tbody>
                    <tr>
                        <td>${items[i].website}</td>
                        <td>${items[i].info1}</td>
                    </tr>
                    <tr>
                        <td>${items[i].info2}</td>
                        <td>${items[i].info3}</td>
                    </tr>
                    <tr>
                        <td>${items[i].info4}</td>
                        <td>${items[i].info5}</td>
                    </tr>
                    <tr>
                        <td>${items[i].info6}</td>
                        <td>${items[i].info7}</td>
                    </tr>
                </tbody>
            </table>
        `;

        cartRow.innerHTML = cartRowContents;
        cartRow2.innerHTML = cartRowContents2;

        cartItems.prepend(cartRow);
        cartItems2.prepend(cartRow2);
        updateCartTotal();

        cartRow2.getElementsByClassName('champez3fail')[0].addEventListener('click', removeCartItem2)
    }
} else {
    document.getElementById('cartlength').style.display = 'none';
}

function removeCartItem2(event){
    var buttonClicked = event.target;
    var cartItem = buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement;
    var price =   cartItem.children[0].children[0].children[0].children[2].innerText;
    var balance = cartItem.children[0].children[0].children[0].children[1].innerText;
    var image =   cartItem.children[0].children[0].children[0].children[0].children[0].src;

    var account = cartItem.children[1].children[0].children[0].children[0].innerText;
    var website = cartItem.children[2].children[0].children[0].children[0].innerText;
    var info1 =   cartItem.children[2].children[0].children[0].children[1].innerText;
    var info2 =   cartItem.children[2].children[0].children[1].children[0].innerText;
    var info3 =   cartItem.children[2].children[0].children[1].children[1].innerText;
    var info4 =   cartItem.children[2].children[0].children[2].children[0].innerText;
    var info5 =   cartItem.children[2].children[0].children[2].children[1].innerText;
    var info6 =   cartItem.children[2].children[0].children[3].children[0].innerText;
    var info7 =   cartItem.children[2].children[0].children[3].children[1].innerText;

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6,info7){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6,
        info7: info7
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('champez2')[0];
    var cartRows = cartItemContainer.getElementsByClassName('bg-black');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('btn-price')[0]
        var pric = priceElement.innerHTML.replace('Price: $','')
        var price2 = parseFloat(pric.replace(',',''))
        total = total + (price2 * 1);
    }
    document.getElementById('thetot').innerHTML = `Checkout: $${total.toLocaleString()}`;
    localStorage.setItem('time-left',600);
}

