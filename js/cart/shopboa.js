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



function fir1(event) {
    var price = 'Price: $115';
    var balance = 'Balance: $5,757';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-5.7.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir2(event) {
    var price = 'Price: $140';
    var balance = 'Balance: $7,000';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-7.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk97(event) {
    var price = 'Price: $120';
    var balance = 'Balance: $6,013';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chime-6.jpg';
    var account = 'Chime Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}





function fir11(event) {
    var price = 'Price: $2,615';
    var balance = 'Balance: $130,750';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-130.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir14(event) {
    var price = 'Price: $128';
    var balance = 'Balance: $6,422';
    var website = 'navyfederal.org';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/navy-6.png';
    var account = 'Navy Federal [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir90(event) {
    var price = 'Price: $194';
    var balance = 'Balance: $9,711';
    var website = 'navyfederal.org';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/navy-9.png';
    var account = 'Navy Federal [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir65(event) {
    var price = 'Price: $607';
    var balance = 'Balance: $30,374';
    var website = 'navyfederal.org';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/navy-30.png';
    var account = 'Navy Federal [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir16(event) {
    var price = 'Price: $338';
    var balance = 'Balance: $16,905';
    var website = 'td.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Question & Answer';
    var info4 = 'Name + Address';
    var info5 = 'Card Information';
    var info6 = 'Account& Routing No';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/td-16.png';
    var account = 'TD Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir17(event) {
    var price = 'Price: $81';
    var balance = 'Balance: $3,953';
    var website = 'td.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Question & Answer';
    var info4 = 'Name + Address';
    var info5 = 'Card Information';
    var info6 = 'Account& Routing No';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/td-3.png';
    var account = 'TD Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir20(event) {
    var price = 'Price: $67';
    var balance = 'Balance: $3,300';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-3.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}
function fir26(event) {
    var price = 'Price: $206';
    var balance = 'Balance: $10,304';
    var website = 'citi.com';
    var info1 = 'Username + Password';
    var info2 = 'Name+ Address';
    var info3 = 'Email Access';
    var info4 = 'Social Security No';
    var info5 = 'Account& Routing No';
    var info6 = 'Date of Birth';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/citi-10.png';
    var account = 'Citi Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir27(event) {
    var price = 'Price: $129';
    var balance = 'Balance: $6,041';
    var website = 'navyfederal.org';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/navy-6.0.png';
    var account = 'Navy Federal [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir28(event) {
    var price = 'Price: $669';
    var balance = 'Balance: $33,475';
    var website = 'td.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Question & Answer';
    var info4 = 'Name + Address';
    var info5 = 'Card Information';
    var info6 = 'Account& Routing No';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/td-33.png';
    var account = 'TD Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir37(event) {
    var price = 'Price: $888';
    var balance = 'Balance: $44,426';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-44.jpg';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}



































































function uk1(event) {
    var price = 'Price: $180';
    var balance = 'Balance: $9,000';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-9.jpg';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk2(event) {
    var price = 'Price: $196';
    var balance = 'Balance: $9,804';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-9.8.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk3(event) {
    var price = 'Price: $199';
    var balance = 'Balance: $9,978';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-9.9.jpg';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk5(event) {
    var price = 'Price: $237';
    var balance = 'Balance: $11,871';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/boa-11k.jpg';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk7(event) {
    var price = 'Price: $256';
    var balance = 'Balance: $12,568';
    var website = 'citi.com';
    var info1 = 'Username + Password';
    var info2 = 'Name + Address';
    var info3 = 'Email Access';
    var info4 = 'Social Security No';
    var info5 = 'Date of Birth';
    var info6 = 'Account& Routing No';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/images/sale.jpg';
    var account = 'Citi Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk13(event) {
    var price = 'Price: $280';
    var balance = 'Balance: $14,015';
    var website = 'bankofamerica.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/boa-14.png';
    var account = 'Bank of America [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk18(event) {
    var price = 'Price: $290';
    var balance = 'Balance: $14,218';
    var website = 'citi.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Driving License';
    var info4 = 'Billing Details';
    var info5 = 'Social Security No';
    var info6 = 'Carrier PIN';
    var info7 = 'Date of Birth';
    var image = 'https://darknet.id/img/citi14.jpg';
    var account = 'Citi Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk26(event) {
    var price = 'Price: $396';
    var balance = 'Balance: $19,909';
    var website = 'huntington.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Questions & Answers';
    var info5 = 'Driving License';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Billing + D.O.B';
    var image = 'https://darknet.id/img/hunt-19.jpg';
    var account = 'Huntington Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk33(event) {
    var price = 'Price: $673';
    var balance = 'Balance: $33,575';
    var website = 'ally.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Debit Details';
    var info4 = 'Billing Details';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/ally33.jpg';
    var account = 'Ally Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}




function uk45(event) {
    var price = 'Price: $2,804';
    var balance = 'Balance: $140,075';
    var website = 'bankofamerica.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Complete Fullz';
    var info4 = 'Card Details';
    var info5 = 'Name + Address';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/natalya.jpg';
    var account = 'Bank of America [SAVINGS]';
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