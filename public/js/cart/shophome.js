let items = [];
var table1 = jQuery('#example1').DataTable();
var table3 = jQuery('#example3').DataTable();


if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image} width="50px" style="border-radius: 2px"></td>`
        var balance = `<td class="btn-balance">${data.balance}</td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var remove = `<td><img src="failure.svg" class="cart-thumb btn-remove" style="width: 35px; height: 35px; margin: 0; cursor: pointer" alt=""></td>`;
        var account = `<td>${data.account}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        var info7 = `<td>${data.info7}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            website,   
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            info7,   
        ]).draw();
        table3.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            website,   
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            info7,   
        ]).draw();
    });

    for(var i = 0; i < items.length; i++) {
        var cartRow2 = document.createElement('li');
        var cartRow3 = document.createElement('li');
        cartRow2.classList.add('bg-black','champez3li');
        cartRow3.classList.add('bg-black','champez3li');
        var cartItems2 = document.getElementsByClassName('mobile1')[0];
        var cartItems3 = document.getElementsByClassName('mobile2')[0];
        var cartRowContents2 = `
            <table class="table table-bordered table-mobile">
                <thead>
                    <tr>
                        <th>
                            <img src=${items[i].image} class="champez3img">
                        </th>
                        <th class="btn-balance">
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

        cartRow2.innerHTML = cartRowContents2;
        cartRow3.innerHTML = cartRowContents2;
        cartItems2.prepend(cartRow2);
        cartItems3.prepend(cartRow3);
        cartRow2.getElementsByClassName('champez3fail')[0].addEventListener('click', removeCartItem2);
        cartRow3.getElementsByClassName('champez3fail')[0].addEventListener('click', removeCartItem2);
    
    }

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    updateCartTotal();
} else {
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
    items = items.filter(checkAdult);
    window.location.reload()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('champez1')[0];
    var cartRows = cartItemContainer.getElementsByTagName('tr');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.children[4];
        var pric = priceElement.innerHTML.replace('Price: $','')
        var price2 = parseFloat(pric.replace(',',''))
        total = total + (price2 * 1);
    }
    document.getElementById('thetot1').innerHTML = `Checkout:  $${total.toLocaleString()}`;
    document.getElementById('thetot3').innerHTML = `Checkout:  $${total.toLocaleString()}`;

    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    document.getElementById('theno3').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    localStorage.setItem('time-left',600);
}
