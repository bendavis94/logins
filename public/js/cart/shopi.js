let items = [];

var table1 = jQuery('#example').DataTable();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image} width="50px" style="border-radius: 2px"></td>`
        var balance =`<td class="btn-balance">${data.balance}</td>`
        var account = `<td>${data.account}</td>`
        var remove = `<td>
        <img src="failure.svg" class="cart-thumb btn-remove" 
            style="width: 35px; height: 35px; margin: 0; cursor: pointer"
                alt="">
        </td>
        `
        var price = `<td class="btn-price">${data.price}</td>`
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
    });

    for(var i = 0; i < items.length; i++) {
        var cartRow2 = document.createElement('li');
        cartRow2.classList.add('bg-black','champez3li');

        var cartRow3 = document.createElement('div');
        cartRow3.classList.add('col-lg-3', 'col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');

        var balance2 = items[i].balance;
        var price2 = items[i].price;
        var balance3 = balance2.replace('Balance: ', '');
        var price3 = price2.replace('Price: ', 'In Cart: ');

        var cartItems2 = document.getElementsByClassName('mobile1')[0];
        var cartItems3 = document.getElementsByClassName('xenon3')[0];

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
        cartRow2.innerHTML = cartRowContents2;
        cartRow3.innerHTML = cartRowContents3;

        cartItems2.prepend(cartRow2);
        cartItems3.prepend(cartRow3);

        cartRow2.getElementsByClassName('champez3fail')[0].addEventListener('click', removeCartItem2);

    }

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
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
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    document.getElementById('omanyala').innerHTML = parseInt(total).toLocaleString();


    if(JSON.parse(localStorage.getItem('banklogs')).length === 1) {
        document.getElementById('showtoasts').innerHTML = 'Download 1 Bank Log✅';
        document.getElementById('titlelogs2').innerText = 'Cart: 1, Total: $' + total.toLocaleString();
    } else {
        document.getElementById('showtoasts').innerHTML = `Download 
            ${JSON.parse(localStorage.getItem('banklogs')).length}
        Bank Logs✅`;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    }
    localStorage.setItem('banktotal',total);
}