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

function fir5(event) {
    var price = 'Price: $1,164';
    var balance = 'Balance: $29,145';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-29.1.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir6(event) {
    var price = 'Price: $414';
    var balance = 'Balance: $10,392';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-10.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir7(event) {
    var price = 'Price: $298';
    var balance = 'Balance: $7,476';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-7.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir8(event) {
    var price = 'Price: $200';
    var balance = 'Balance: $5,027';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-5.0.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir9(event) {
    var price = 'Price: $220';
    var balance = 'Balance: $5,513';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-5.5.jpg';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir10(event) {
    var price = 'Price: $228';
    var balance = 'Balance: $5,728';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-5.7.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir12(event) {
    var price = 'Price: $174';
    var balance = 'Balance: $4,200';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-4.2.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir13(event) {
    var price = 'Price: $192';
    var balance = 'Balance: $4,900';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-4.9.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir15(event) {
    var price = 'Price: $158';
    var balance = 'Balance: $3,925';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-3.9.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir18(event) {
    var price = 'Price: $152';
    var balance = 'Balance: $3,800';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-3.8.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir19(event) {
    var price = 'Price: $304';
    var balance = 'Balance: $7,625';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-7.6.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}



function fir30(event) {
    var price = 'Price: $304';
    var balance = 'Balance: $7,625';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-7.6.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir31(event) {
    var price = 'Price: $368';
    var balance = 'Balance: $9,231';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-9.2.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir32(event) {
    var price = 'Price: $180';
    var balance = 'Balance: $4,500';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-4.5.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir33(event) {
    var price = 'Price: $496';
    var balance = 'Balance: $12,437';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-12.4.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir34(event) {
    var price = 'Price: $348';
    var balance = 'Balance: $8,705';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-8.7.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir35(event) {
    var price = 'Price: $2,320';
    var balance = 'Balance: $58,000';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-58.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir38(event) {
    var price = 'Price: $201';
    var balance = 'Balance: $5,041';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-5.0.2.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir39(event) {
    var price = 'Price: $401';
    var balance = 'Balance: $10,003';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-10.0.2.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}










function uk6(event) {
    var price = 'Price: $500';
    var balance = 'Balance: $12,550';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-12.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk14(event) {
    var price = 'Price: $564';
    var balance = 'Balance: $14,107';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-14.jpg';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk15(event) {
    var price = 'Price: $572';
    var balance = 'Balance: $14,303';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-14-3.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk16(event) {
    var price = 'Price: $568';
    var balance = 'Balance: $14,226';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-14-2.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk19(event) {
    var price = 'Price: $582';
    var balance = 'Balance: $14,537';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Name+ Email Access';
    var info6 = 'Owner\'s Complete Fullz';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/new/chime-14.jpg';
    var account = 'Chime Bank [SPENDING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk25(event) {
    var price = 'Price: $786';
    var balance = 'Balance: $19,724';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Name+ Email Access';
    var info6 = 'Owner\'s Complete Fullz';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/new/chime-19.png';
    var account = 'Chime Bank [SPENDING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}




function uk30(event) {
    var price = 'Price: $840';
    var balance = 'Balance: $20,834';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Name+ Email Access';
    var info6 = 'Owner\'s Complete Fullz';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/new/chime-20.jpg';
    var account = 'Chime Bank [SPENDING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk32(event) {
    var price = 'Price: $1,160';
    var balance = 'Balance: $29,007';
    var website = 'truist.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/new/truist-29.png';
    var account = 'Truist Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk37(event) {
    var price = 'Price: $2,000';
    var balance = 'Balance: $50,000';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Name+ Email Access';
    var info6 = 'Owner\'s Complete Fullz';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/new/chime-50.jpg';
    var account = 'Chime Bank [SPENDING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk40(event) {
    var price = 'Price: $2,492';
    var balance = 'Balance: $62,333';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/chime-60.jpg';
    var account = 'Chime Bank [SPENDING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk97(event) {
    var price = 'Price: $240';
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
    var account = 'Chime Bank [SPENDING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk41(event) {
    var price = 'Price: $2,796';
    var balance = 'Balance: $69,900';
    var website = 'chime.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Date of Birth';
    var info4 = 'Social Security No';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chime-69.jpg';
    var account = 'Chime Bank [SPENDING]';
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