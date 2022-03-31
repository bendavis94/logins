let items = [];

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    for(var i = 0; i < items.length; i++) {
        var cartRow = document.createElement('tr');
        var cartRow2 = document.createElement('li');
        var cartRow3 = document.createElement('div');
        cartRow.classList.add('table-warning');
        cartRow2.classList.add('total','bg-black');
        cartRow3.classList.add('col-lg-3', 'col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');

        var balance2 = items[i].balance;
        var price2 = items[i].price;
        var balance3 = balance2.replace('Balance: ', '');
        var price3 = price2.replace('Price: ', 'In Cart: ');

        var cartItems =  document.getElementsByClassName('champez')[0];
        var cartItems2 = document.getElementsByClassName('champez2')[0];
        var cartItems3 = document.getElementsByClassName('xenon3')[0]
        var cartRowContents = `
            <td><img src=${items[i].image} width="50px" style="border-radius: 2px"></td>
            <td class="btn-balance">${items[i].balance}</td>
            <td>${items[i].account}</td>
            <td>
                <img src="failure.svg" class="cart-thumb btn-remove" 
                style="width: 35px; height: 35px; margin: 0; cursor: pointer"
                alt="">
            </td>
            <td class="btn-price">${items[i].price}</td>
            <td>${items[i].website}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].info7}</td>
        `
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
        var cartRowContents3 = `
            <div class="feature-box-04">
                <div class="no-padding border">
                    <div>
                        <p>${balance3}</p>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <p>${items[i].info1}</p>
                    <p>${items[i].info2}</p>
                    <p>${items[i].info3}</p>
                    <p>${items[i].info4}</p>
                    <p>${items[i].info5}</p>
                    <p>${items[i].info6}</p>
                    <p class="nth9">${items[i].info7}</p>
                    <p>${items[i].account}</p>
                    <button type="submit" class="butn medium">     
                        ${price3}
                    </button>
                </div>
            </div>
        `;
        cartRow.innerHTML = cartRowContents;
        cartRow2.innerHTML = cartRowContents2;
        cartRow3.innerHTML = cartRowContents3;

        cartItems.prepend(cartRow);
        cartItems2.prepend(cartRow2);
        cartItems3.prepend(cartRow3);
        updateCartTotal();

        cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
        cartRow2.getElementsByClassName('champez3fail')[0].addEventListener('click', removeCartItem2)

    }
} else {
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('cartlength').style.display = 'none';
}


function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[5].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[6].innerText;
    var info2 = cartItem.children[7].innerText;
    var info3 = cartItem.children[8].innerText;
    var info4 = cartItem.children[9].innerText;
    var info5 = cartItem.children[10].innerText;
    var info6 = cartItem.children[11].innerText;
    var info7 = cartItem.children[12].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
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
    localStorage.setItem('time-left',600);
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

    document.getElementById('omanyala').innerHTML = `$${total.toLocaleString()}`;


    if(JSON.parse(localStorage.getItem('banklogs')).length === 2) {
        document.getElementById('showtoasts').innerHTML = 'Download 2 Bank Logs✅';
        document.getElementById('titlelogs2').innerText = 'Cart: 2, Total: $' + total.toLocaleString();
    } else if((JSON.parse(localStorage.getItem('banklogs')).length) == 1) {
        document.getElementById('showtoasts').innerHTML = 'Download 1 Bank Log ✅';
        document.getElementById('titlelogs2').innerText = 'Cart: 1, Total: $' + total.toLocaleString();
    }
    localStorage.setItem('banktotal',total);
}
