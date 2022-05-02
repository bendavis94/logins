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

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    updateCartTotal()
} else {
    document.getElementById('cartlength').style.display = 'none';
}


function jaze1(event) {
    var price = 'Price: $244';
    var balance = 'Balance: $12,245';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier: Verizon, Sex: Male';
    var info5 = 'Bill Pay ON';
    var info6 = 'Wire ON, State: New York';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase74.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze2(event) {
    var price = 'Price: $273';
    var balance = 'Balance: $13,636';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Social Security Number';
    var info3 = 'Date of Birth + Driving License';
    var info4 = 'Carrier Bill in Mailbox';
    var info5 = 'Carrier: T-Mobile';
    var info6 = 'Zelle ON, Wire ON, Has Wire History';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase13.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze3(event) {
    var price = 'Price: $274';
    var balance = 'Balance: $13,691';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, State: Ohio';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No, Wire ON, Wire History';
    var info4 = 'Carrier Bill in Mailbox';
    var info5 = 'Zelle ON, Bill Pay ON';
    var info6 = 'Good Zelle History';
    var info7 = 'ClientIP + Useragent, Carrier: AT&T Mobility';
    var image = 'https://darknet.id/img/chase13-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze4(event) {
    var price = 'Price: $289';
    var balance = 'Balance: $14,516';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, State: New York';
    var info2 = 'Billing + Date of Birth, Account& Routing No';
    var info3 = 'Gender: Male, Carrier: T-Mobile';
    var info4 = 'Carrier Bill in Mailbox';
    var info5 = 'Zelle ON, Bill Pay ON';
    var info6 = 'Good Zelle History';
    var info7 = 'ClientIP + Useragent, Wire ON';
    var image = 'https://darknet.id/img/chase14.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze5(event) {
    var price = 'Price: $296';
    var balance = 'Balance: $14,843';
    var website = 'chase.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'ClientIP + Useragent';
    var info4 = 'Billing';
    var info5 = 'Social Security No';
    var info6 = 'Account& Routing No';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase14-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze6(event) {
    var price = 'Price: $299';
    var balance = 'Balance: $15,001';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier: T-Mobile, MALE Sex';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle ON, Wire ON, Bill Pay ON';
    var info7 = 'State: Florida';
    var image = 'https://darknet.id/img/chase15-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze7(event) {
    var price = 'Price: $302';
    var balance = 'Balance: $15,198';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Fullz Info';
    var info4 = 'Carrier: T-Mobile + PIN';
    var info5 = 'Zelle and Wire History';
    var info6 = 'Billing';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase15-4.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze8(event) {
    var price = 'Price: $307';
    var balance = 'Balance: $15,281';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Social Security Number';
    var info3 = 'Date of Birth, State: California';
    var info4 = 'Carrier: T-Mobile with PIN';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Carrier Bill in Mailbox';
    var info7 = 'Bil Pay ON, Zelle ON';
    var image = 'https://darknet.id/img/chase152.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
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
    updateCartTotal2()
}

function addItemToCart(price, balance, account,website, image,info1,info2,info3,info4,info5,info6,info7){

    var cartItems = document.getElementsByClassName('champez3')[0]
    var cartItemNames = cartItems.getElementsByTagName('tr');
    for (var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerHTML.includes(balance)){
            alert(`${account} with ${balance} is in cart`)
            return
        }
        if(cartItemNames.length > 2.5) {
            alert(`Cart is full, checkout the 3 logs in cart first, follow the steps to cashout carefully, then buy more later`);
            window.location.assign('invoice')
            return
        }
    }

    var image1 = `<td><img src=${image} width="50px" style="border-radius: 2px"></td>`
    var balance1 = `<td class="btn-balance">${balance}</td>`
    var price1 = `<td class="btn-price">${price}</td>`
    var remove1 = `<td><img src="failure.svg" class="cart-thumb btn-remove" style="width: 35px; height: 35px; margin: 0; cursor: pointer" alt=""></td>`;
    var account1 = `<td>${account}</td>`
    var website1 = `<td>${website}</td>`
    var info11 = `<td>${info1}</td>`
    var info21 = `<td>${info2}</td>`
    var info31 = `<td>${info3}</td>`
    var info41 = `<td>${info4}</td>`
    var info51 = `<td>${info5}</td>`
    var info61 = `<td>${info6}</td>`
    var info71 = `<td>${info7}</td>`

    addToLocalStorage(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);

    table1.row.add([
        image1,
        balance1,      
        account1,   
        remove1,
        price1,
        website1,   
        info11,   
        info21,   
        info31,   
        info41,   
        info51,   
        info61,   
        info71,   
    ]).draw();

    table3.row.add([
        image1,
        balance1,      
        account1,   
        remove1,
        price1,
        website1,   
        info11,   
        info21,   
        info31,   
        info41,   
        info51,   
        info61,   
        info71,   
    ]).draw();

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    if (localStorage.getItem('received-funds') != null){
        localStorage.removeItem('received-funds');
    }
}


function addToLocalStorage(price, balance, account,website, image,info1,info2,info3,info4,info5,info6,info7){
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
    items.push(item);
    localStorage.setItem('banklogs', JSON.stringify(items));
    if(localStorage.getItem('banklogs')){
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
        document.getElementById('cartlength').style.display = 'block';
    }
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

    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('thetot1').innerHTML = `Checkout:  $${total.toLocaleString()}`;
    document.getElementById('thetot3').innerHTML = `
        Checkout: $<span class="countup checkout">${total.toLocaleString()}</span>
    `;

    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    document.getElementById('theno3').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();



    var logsContainer =  document.getElementsByClassName('gallery')[0];
    var singleLog = logsContainer.getElementsByClassName('medium');
    for(var i = 0; i < singleLog.length; i++){
        let cart = JSON.parse(localStorage.getItem('banklogs'));
        cart.map(data=>{
            data.price3 = data.price.replace('Price: ','');
            if(singleLog[i].innerText == data.price.replace('Price: ', 'Buy: ') && singleLog[i].parentElement.children[1].innerText == data.website){
                singleLog[i].innerHTML = `
                In Cart ${data.price3}
                `;
                singleLog[i].classList.add('theme');
                singleLog[i].style.background = 'yellow';
                singleLog[i].style.fontWeight = '700';
                singleLog[i].style.fontSize = '20px';
                singleLog[i].style.color = '#121d33';
                var bunist = singleLog[i].parentElement.parentElement;
                var buni = bunist.parentElement;
                buni.dataset.subHtml = `
                <button type='submit' class='butn medium white display-nones' 
                style='background: lime' data-toggle='modal' data-target='#profileModal'>In Cart: ${data.price3}</button>`;
                bunist.classList.add('display-nones');
                singleLog[i].disabled = 'disabled';
            } 
        });
    }
    localStorage.setItem('time-left',600)
}


function updateCartTotal2() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('thetot1').innerHTML = `Checkout:  $${total.toLocaleString()}`;
    document.getElementById('thetot3').innerHTML = `
        Checkout: $<span class="countup checkout">${total.toLocaleString()}</span>
    `;

    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    document.getElementById('theno3').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();


    localStorage.setItem('time-left',600)
}