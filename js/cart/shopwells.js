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



function fir4(event) {
    var price = 'Price: $195';
    var balance = 'Balance: $9,800';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Account& Routing No';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Email Access';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Name + Address';
    var image = 'https://darknet.id/img/new/wells-9.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir29(event) {
    var price = 'Price: $365';
    var balance = 'Balance: $18,264';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Account& Routing No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/new/wells-18.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk4(event) {
    var price = 'Price: $227';
    var balance = 'Balance: $11,362';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Account& Routing No';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Email Access';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Name + Address';
    var image = 'https://darknet.id/img/new/wells-11.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk8(event) {
    var price = 'Price: $261';
    var balance = 'Balance: $13,080';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Account& Routing No';
    var info4 = 'Billing Details';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Name + Address';
    var image = 'https://darknet.id/img/wells13.jpg';
    var account = 'Wells Fargo [Preferred Checking]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk9(event) {
    var price = 'Price: $262';
    var balance = 'Balance: $13,575';
    var website = 'wellsfargo.com';
    var info1 = 'Online& Email Access';
    var info2 = 'Account& Routing No';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Date of Birth';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Zelle History';
    var image = 'https://darknet.id/img/derrick.jpg';
    var account = 'Wells Fargo [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk10(event) {
    var price = 'Price: $276';
    var balance = 'Balance: $13,977';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Fullz Info';
    var info4 = 'Billing Details';
    var info5 = 'Date of Birth';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Card Details';
    var image = 'https://darknet.id/img/wells13-2.jpg';
    var account = 'Wells Fargo [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk11(event) {
    var price = 'Price: $278';
    var balance = 'Balance: $13,881';
    var website = 'citizensbank.com';
    var info1 = 'Question & Answer';
    var info2 = 'Name: "James"+ Address';
    var info3 = 'Carrier: Verizon';
    var info4 = 'Account& Routing No';
    var info5 = 'ATM PIN + Debit Info';
    var info6 = 'Online & Email Access';
    var info7 = 'ClientIP+ UserAgent';
    var image = 'https://darknet.id/img/jamescitizen.jpg';
    var account = 'Citizens Bank [DEPOSIT ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk12(event) {
    var price = 'Price: $279';
    var balance = 'Balance: $13,993';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Account& Routing No';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Email Access';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Name + Address';
    var image = 'https://darknet.id/img/new/wells-13.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk17(event) {
    var price = 'Price: $283';
    var balance = 'Balance: $14,474';
    var website = 'citizensbank.com';
    var info1 = 'Question & Answer';
    var info2 = 'Name: "Michael"';
    var info3 = 'Carrier: T-Mobile';
    var info4 = 'Account& Routing No';
    var info5 = 'CC Info + Address';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Online Access';
    var image = 'https://darknet.id/img/michael.jpg';
    var account = 'Citizens Bank [DEPOSIT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk20(event) {
    var price = 'Price: $317';
    var balance = 'Balance: $18,542';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Billing Details';
    var info5 = 'Account& Routing No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Date of Birth';
    var image = 'https://darknet.id/img/wells15.jpg';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk21(event) {
    var price = 'Price: $304';
    var balance = 'Balance: $15,228';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Billing Details';
    var info5 = 'Account& Routing No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Date of Birth';
    var image = 'https://darknet.id/img/new/wells-15.jpg';
    var account = 'Wells Fargo [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk22(event) {
    var price = 'Price: $373';
    var balance = 'Balance: $16,917';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'State: New York';
    var info4 = 'Social Security No';
    var info5 = 'Date of Birth';
    var info6 = 'Debit Details';
    var info7 = 'ATM PIN';
    var image = 'https://darknet.id/img/sharon.jpg';
    var account = 'Wells Fargo [Way2Save Checking]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk23(event) {
    var price = 'Price: $377';
    var balance = 'Balance: $18,878';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Billing Details';
    var info3 = 'Email Access';
    var info4 = 'Social Security No';
    var info5 = 'Accont& Routing No';
    var info6 = 'Date of Birth';
    var info7 = 'Owner\'s Complete Fullz';
    var image = 'https://darknet.id/img/wells18.jpg';
    var account = 'Wells Fargo Everyday Checking';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk24(event) {
    var price = 'Price: $390';
    var balance = 'Balance: $19,325';
    var website = 'citizensbank.com';
    var info1 = '10 Question & Answer';
    var info2 = 'Name: Edward+ Address';
    var info3 = 'Carrier: Verizon';
    var info4 = 'Account& Routing No';
    var info5 = 'Online& Email Access';
    var info6 = 'ATM PIN, Debit Card';
    var info7 = 'ClientIP+ UserAgent';
    var image = 'https://darknet.id/img/edward.jpg';
    var account = 'Citizens Bank [DEPOSIT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk27(event) {
    var price = 'Price: $395';
    var balance = 'Balance: $18,542';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Carrier PIN';
    var info4 = 'Billing Details';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Date of Birth';
    var image = 'https://darknet.id/img/wells18-2.jpg';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk28(event) {
    var price = 'Price: $406';
    var balance = 'Balance: $20,312';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier PIN';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Date of Birth';
    var image = 'https://darknet.id/img/wells20.jpg';
    var account = 'Wells Fargo [Preferred Checking]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk29(event) {
    var price = 'Price: $416';
    var balance = 'Balance: $20,806';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Billing Details';
    var info5 = 'Account& Routing No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/wells20-2.jpg';
    var account = 'Wells Fargo [Retirement Savings]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk31(event) {
    var price = 'Price: $451';
    var balance = 'Balance: $22,592';
    var website = 'citizensbank.com';
    var info1 = 'Question & Answer';
    var info2 = 'Name: Julio+ Address';
    var info3 = 'Carrier: Verizon';
    var info4 = 'Account& Routing No';
    var info5 = 'Online Access';
    var info6 = 'Email Access';
    var info7 = 'ClientIP+ UserAgent';
    var image = 'https://darknet.id/img/julio.jpg';
    var account = 'Citizens Bank [DEPOSIT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}




function uk34(event) {
    var price = 'Price: $706';
    var balance = 'Balance: $35,306';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Account& Routing No';
    var info4 = 'Billing + Fullz';
    var info5 = 'Social Security No';
    var info6 = 'Name + Address';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/wells2m.jpg';
    var account = 'Wells Fargo [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk35(event) {
    var price = 'Price: $854';
    var balance = 'Balance: $42,710';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Billing Details';
    var info4 = 'Account& Routing No';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/new/wells42.jpg';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk99(event) {
    var price = 'Price: $415';
    var balance = 'Balance: $20,728';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Billing Details';
    var info4 = 'Account& Routing No';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/new/wells-20.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk98(event) {
    var price = 'Price: $82';
    var balance = 'Balance: $4,148';
    var website = 'wellsfargo.com';
    var info1 = 'Online + Email Access';
    var info2 = 'PIN(verified), Sex: Male, State: Texas';
    var info3 = 'Owner Signature + Billing';
    var info4 = 'Account& Routing No';
    var info5 = 'Debit Card Info w/ATM';
    var info6 = 'Personal Fullz + IP';
    var info7 = 'Address + Phone Number';
    var image = 'https://darknet.id/img/new/wells-4.jpg';
    var account = 'Wells Fargo [EVERYDAY CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk36(event) {
    var price = 'Price: $718';
    var balance = 'Balance: $35,337';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Fullz Info + Billing';
    var info4 = 'Debit Details';
    var info5 = 'Carrier PIN';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Carrier: T-Mobile';
    var image = 'https://darknet.id/img/ronald.jpg';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk38(event) {
    var price = 'Price: $1,001';
    var balance = 'Balance: $50,075';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Bill Pay ON';
    var info4 = 'Carrier Bill in MailBox';
    var info5 = 'Name + Address';
    var info6 = 'Carrier: Verizon';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/new/wells-50.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk39(event) {
    var price = 'Price: $1,065';
    var balance = 'Balance: $53,298';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Bill Pay ON';
    var info4 = 'Carrier Bill in MailBox';
    var info5 = 'Name + Address';
    var info6 = 'Carrier: T-Mobile';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/unknown2.jpg';
    var account = 'Wells Fargo [Lakehouse Checking]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk42(event) {
    var price = 'Price: $1,560';
    var balance = 'Balance: $78,000';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Accont& Routing No';
    var info6 = 'Date of Birth';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/new/wells-78.png';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk43(event) {
    var price = 'Price: $2,067';
    var balance = 'Balance: $103,318';
    var website = 'wellsfargo.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing Details';
    var info4 = 'Social Security No';
    var info5 = 'Accont& Routing No';
    var info6 = 'Date of Birth';
    var info7 = 'Carrier PIN';
    var image = 'https://darknet.id/img/wells103.jpg';
    var account = 'Wells Fargo [SAVINGS]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk44(event) {
    var price = 'Price: $2,410';
    var balance = 'Balance: $120,612';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Account& Routing No';
    var info4 = 'Card Details';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + UserAgent';
    var info7 = 'Complete Fullz';
    var image = 'https://darknet.id/img/wells120.jpg';
    var account = 'Wells Fargo [High Perf MMM]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function uk46(event) {
    var price = 'Price: $3,925';
    var balance = 'Balance: $195,305';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Zelle Active + Address';
    var info4 = 'Account& Routing No';
    var info5 = 'Social Security No';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Card Details + Name';
    var image = 'https://darknet.id/img/dorry.jpg';
    var account = 'Wells Fargo [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function uk47(event) {
    var price = 'Price: $4,718';
    var balance = 'Balance: $236,176';
    var website = 'wellsfargo.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Owner Complete Fullz';
    var info4 = 'Account& Routing No';
    var info5 = 'Carrier PIN: T-Mobile';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/john.jpg';
    var account = 'Wells Fargo [HIGH PERF MMA]';
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