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



function fir98(event) {
    var price = 'Price: $112';
    var balance = 'Balance: $2,824';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-2.8.jpg';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir25(event) {
    var price = 'Price: $1,328';
    var balance = 'Balance: $33,200';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-33.png';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir97(event) {
    var price = 'Price: $229';
    var balance = 'Balance: $5,745';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-5.7.jpg';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir23(event) {
    var price = 'Price: $190';
    var balance = 'Balance: $4,833';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-4.png';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir24(event) {
    var price = 'Price: $1,088';
    var balance = 'Balance: $27,212';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-27.png';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function fir21(event) {
    var price = 'Price: $282';
    var balance = 'Balance: $7,001';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-7.png';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir22(event) {
    var price = 'Price: $150';
    var balance = 'Balance: $3,798';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-3.png';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function fir99(event) {
    var price = 'Price: $232';
    var balance = 'Balance: $5,813';
    var website = 'chase.com';
    var info1 = 'Username + Password';
    var info2 = 'Account& Routing No';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ UserAgent';
    var info6 = 'Name+ Email Access';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/new/chase-5.jpg';
    var account = 'Chase Bank [CHECKING]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

























function jaze1(event) {
    var price = 'Price: $488';
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
    var price = 'Price: $546';
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
    var price = 'Price: $548';
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
    var price = 'Price: $578';
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
    var price = 'Price: $592';
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
    var price = 'Price: $598';
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
    var price = 'Price: $604';
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
    var price = 'Price: $614';
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

function jaze9(event) {
    var price = 'Price: $628';
    var balance = 'Balance: $15,740';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Card';
    var info4 = 'Carrier: AT&T Mobility, Zelle ON';
    var info5 = 'Social Security No';
    var info6 = 'Account& Routing No';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase15-3.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze10(event) {
    var price = 'Price: $640';
    var balance = 'Balance: $16,112';
    var website = 'chase.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Billing';
    var info4 = 'Carrier PIN';
    var info5 = 'Carrier: Verizon';
    var info6 = 'Name + Address';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/chase16.jpg';
    var account = 'Chase Bank [BUSINESS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze11(event) {
    var price = 'Price: $694';
    var balance = 'Balance: $17,387';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing+ Carrier PIN';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle ON, Wire ON';
    var info7 = 'Carrier: T-Mobile';
    var image = 'https://darknet.id/img/chase17-2.jpg';
    var account = 'Chase Bank [SPENDING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze12(event) {
    var price = 'Price: $704';
    var balance = 'Balance: $17,678';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, Carrier: T-Mobile';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'ClientIP + Useragent, State: Ohio';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle ON, Wire ON, Bill PAY ON, Wire History';
    var info7 = 'Good ZELLE History';
    var image = 'https://darknet.id/img/chase17.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze13(event) {
    var price = 'Price: $764';
    var balance = 'Balance: $18,957';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'ClientIP + Useragent';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'Carrier PIN, Bill Pay ON, Wire ON';
    var info5 = 'Account& Routing No';
    var info6 = 'Carrier Bill in Mailbox';
    var info7 = 'Debit Card with ATM PIN, Carrier: T-Mobile';
    var image = 'https://darknet.id/img/chase18.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze14(event) {
    var price = 'Price: $772';
    var balance = 'Balance: $19,321';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Social Security No, Carrier: T-Mobile';
    var info4 = 'Debit Card Details + ATM PIN';
    var info5 = 'ClientIP + Useragent, Account& Routing No';
    var info6 = 'Zelle ON, Wire ON, State: Texas';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase19-3.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze15(event) {
    var price = 'Price: $782';
    var balance = 'Balance: $19,638';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + ATM PIN + Social Security No';
    var info3 = 'ClientIP + Useragent';
    var info4 = 'Carrier: T-Mobile, State: Missouri';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Debit Details, Wire ON';
    var info7 = 'Date of Birth, Zelle ON';
    var image = 'https://darknet.id/img/chase19.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze16(event) {
    var price = 'Price: $788';
    var balance = 'Balance: $19,720';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'ClientIP + Useragent, Carrier: Verizon';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Wire ON, Zelle ON, Wire History';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/chase17.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze17(event) {
    var price = 'Price: $794';
    var balance = 'Balance: $19,922';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Carrier PIN';
    var info3 = 'Social Security No';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Carrier: T-Mobile';
    var info6 = 'Bill PAY ON, Wire ON, Zelle ON';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase19-2.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze18(event) {
    var price = 'Price: $816';
    var balance = 'Balance: $20,015';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Zelle ON, Bill Pay OFF, Wire ON';
    var info3 = 'Billing + Date of Birth';
    var info4 = 'Carrier: T-Mobile, State: Texas';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Debit Card with ATM PIN, Carrier: T-Mobile';
    var info7 = 'Account& Routing No';
    var image = 'https://darknet.id/img/chase20.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze19(event) {
    var price = 'Price: $860';
    var balance = 'Balance: $21,462';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, Carrier PIN, T-Mobile';
    var info2 = 'Billing + Social Security No';
    var info3 = 'Debit Card+ ATM PIN';
    var info4 = 'Account& Routing No';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'ClientIP+Useragent, Date of Birth';
    var info7 = 'Bill Pay ON, Wire ON';
    var image = 'https://darknet.id/img/chase21.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze20(event) {
    var price = 'Price: $890';
    var balance = 'Balance: $22,038';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Credit Card Fullz';
    var info4 = 'Zelle History, Carrier PIN';
    var info5 = 'Date of Birth';
    var info6 = 'Social Security No';
    var info7 = 'Mothers Maiden Name';
    var image = 'https://darknet.id/img/chase22-3.jpg';
    var account = 'Chase Bank [TRUST ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze21(event) {
    var price = 'Price: $902';
    var balance = 'Balance: $22,526';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Social Security Number';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier PIN + Date of Birth';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'ClientIP + Useragent, Carrier: T-Mobile';
    var info7 = 'Bill Pay ON, Wire ON';
    var image = 'https://darknet.id/img/chase22.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze22(event) {
    var price = 'Price: $914';
    var balance = 'Balance: $22,995';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'Date of Birth';
    var info5 = 'Account& Routing No';
    var info6 = 'Zelle Enabled';
    var info7 = 'Name + Address';
    var image = 'https://darknet.id/img/chase22-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze23(event) {
    var price = 'Price: $924';
    var balance = 'Balance: $23,089';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'ClientIP + Useragent';
    var info3 = 'Billing + Date of Birth';
    var info4 = 'Social Security No, Zelle ON, Wire ON';
    var info5 = 'Driving License, Carrier: T-Mobile';
    var info6 = 'Account& Routing No, State: Colorado';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase23-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze24(event) {
    var price = 'Price: $934';
    var balance = 'Balance: $23,649';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, + Billing';
    var info2 = 'Date of Birth, Carrier: Verizon';
    var info3 = 'Account& Routing No';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Gender: Male, State: Florida';
    var info6 = 'Wire ON, Zelle and Bill Pay ON';
    var info7 = 'Date of Birth: 06/02/1957';
    var image = 'https://darknet.id/img/chase23-3.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze25(event) {
    var price = 'Price: $936';
    var balance = 'Balance: $23,354';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, Carrier: Verizon';
    var info2 = 'Billing+ Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Credit Card Details, State: Massachusetts';
    var info6 = 'Carrier Bill in Mailbox';
    var info7 = 'Zelle ON, Wire ON, Bill Pay ON';
    var image = 'https://darknet.id/img/chase23.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze26(event) {
    var price = 'Price: $1,034';
    var balance = 'Balance: $26,005';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Date of Birth + Driving License';
    var info4 = 'Billing + Social Security Number';
    var info5 = 'Wire Enabled';
    var info6 = 'Zelle History';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase26-5.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze27(event) {
    var price = 'Price: $1,044';
    var balance = 'Balance: $26,147';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing+ Date of Birth';
    var info3 = 'Social Security No';
    var info4 = 'Carrier Bill in Mailbox';
    var info5 = 'ClientIP + Useragent, Carrier: T-Mobile';
    var info6 = 'Zelle ON, Wire ON, Bill Pay ON';
    var info7 = 'Date of Birth: 06/02/1957';
    var image = 'https://darknet.id/img/chase26.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze28(event) {
    var price = 'Price: $1,084';
    var balance = 'Balance: $26,410';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Carrier PIN + Date of Birth';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'Account& Routing Number';
    var info5 = 'ClientIP + Useragent';
    var info6 = 'Carrier: T-Mobile, Bill Pay ON, Wire ON';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase26-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze29(event) {
    var price = 'Price: $1,088';
    var balance = 'Balance: $26,526';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Carrier PIN';
    var info4 = 'Date of Birth';
    var info5 = 'Carrier: AT&T Mobility';
    var info6 = 'Driving License';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/chase26-4.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze30(event) {
    var price = 'Price: $1,132';
    var balance = 'Balance: $28,252';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Carrier: T-Mobile + Social Security No';
    var info4 = 'Carrier Bill in Mailbox';
    var info5 = 'Zelle ON, Wire ON, ACH ON';
    var info6 = 'Billing + Date of Birth';
    var info7 = 'ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase28.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze31(event) {
    var price = 'Price: $1,248';
    var balance = 'Balance: $31,476';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing+ Carrier PIN: T-Mobile';
    var info3 = 'Social Security No + Date of Birth';
    var info4 = 'Driving License(front and back scannable)';
    var info5 = 'ClientIP + Useragent, Zelle ON';
    var info6 = 'Carrier Bill in Mailbox';
    var info7 = 'Wire ON(Has more than 10 wire history)';
    var image = 'https://darknet.id/img/chase31.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze32(event) {
    var price = 'Price: $1,368';
    var balance = 'Balance: $34,238';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, Billing Info';
    var info2 = 'ClientIP + Useragent';
    var info3 = 'Account& Routing No';
    var info4 = 'Bill Pay ON, Wire ON';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'MALE + Date of Birth: 12/08/1979';
    var info7 = 'Carrier: T-Mobile, State: New York';
    var image = 'https://darknet.id/img/chase34.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}


function jaze33(event) {
    var price = 'Price: $1,520';
    var balance = 'Balance: $38,004';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Good Zelle History + Driving License';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'Account& Routing No + Carrier PIN';
    var info5 = 'ClientIP+ Useragent, Carrier: Verizon';
    var info6 = 'Gender: Male, State: Florida, DOB: 07/24/1974';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase38.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze34(event) {
    var price = 'Price: $1,552';
    var balance = 'Balance: $38,806';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Account& Routing Number';
    var info4 = 'Date of Birth: 12/09/1971';
    var info5 = 'Gender: Male, Wire OFF, Zelle ON';
    var info6 = 'Carrier: SPRINT';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase38-2.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze35(event) {
    var price = 'Price: $1,604';
    var balance = 'Balance: $40,010';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'Date of Birth';
    var info5 = 'Carrier: T-Mobile, Carrier PIN';
    var info6 = 'Credit Card Details';
    var info7 = 'ATM PIN';
    var image = 'https://darknet.id/img/chase40-2.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze36(event) {
    var price = 'Price: $1,624';
    var balance = 'Balance: $40,480';
    var website = 'chase.com';
    var info1 = 'Wire History, Zelle ON';
    var info2 = 'Name:Duncan Boswell, State California';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier PIN + Social Security No';
    var info5 = 'ClientIP: 107.218.63.173 + Useragent';
    var info6 = '15571 VISTA VICENTE DR RAMONA, CA 92065 -4318';
    var info7 = 'Chase Credit/Debit Card ON';
    var image = 'https://darknet.id/img/chase40-3.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze37(event) {
    var price = 'Price: $1,654';
    var balance = 'Balance: $41,690';
    var website = 'chase.com';
    var info1 = 'Email Access (SBC Global)';
    var info2 = 'CC Details';
    var info3 = 'Login Access';
    var info4 = 'Carrier PIN, T-Mobile';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle ON, Wire ON + Social Security No';
    var info7 = 'ATM PIN, Date of Birth';
    var image = 'https://darknet.id/img/chase41.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze38(event) {
    var price = 'Price: $1,682';
    var balance = 'Balance: $40,787';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth, Zelle ON, Wire ON';
    var info5 = 'Card + ATM PIN';
    var info6 = 'ClientIP + Useragent';
    var info7 = 'Bin of Cards: 475055,414720';
    var image = 'https://darknet.id/img/chase40.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze39(event) {
    var price = 'Price: $1,862';
    var balance = 'Balance: $46,761';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Billing';
    var info4 = 'Driving LIcense';
    var info5 = 'Date of Birth';
    var info6 = 'Carrier PIN + AT&T Mobility';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/chase46.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze40(event) {
    var price = 'Price: $1,904';
    var balance = 'Balance: $47,775';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Email Access';
    var info3 = 'Social Security No';
    var info4 = 'Date of Birth';
    var info5 = 'ClientIP+ Useragent';
    var info6 = 'State: New Jersey';
    var info7 = 'Billing';
    var image = 'https://darknet.id/img/chase47.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze41(event) {
    var price = 'Price: $1,936';
    var balance = 'Balance: $48,503';
    var website = 'chase.com';
    var info1 = 'Login Access';
    var info2 = 'Mail Access';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier PIN';
    var info5 = 'Billing';
    var info6 = 'Unchecked PayPal and Venmo Log(same victim)';
    var info7 = 'Social Security No';
    var image = 'https://darknet.id/img/chase48.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze42(event) {
    var price = 'Price: $2,284';
    var balance = 'Balance: $56,629';
    var website = 'chase.com';
    var info1 = 'Carrier: T-Mobile';
    var info2 = 'Social Security No';
    var info3 = 'Mothers Maiden Name, Date of Birth';
    var info4 = 'Bank + Mail Access, Billing + Card';
    var info5 = 'Zelle ON, Client IP+ Useragent';
    var info6 = 'Chase Credit/Debit Card ON';
    var info7 = 'Owner Complete Fullz';
    var image = 'https://darknet.id/img/chase56.jpg';
    var account = 'Chase Bank [SAVINGS ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze43(event) {
    var price = 'Price: $2,780';
    var balance = 'Balance: $69,304';
    var website = 'chase.com';
    var info1 = 'Login + Email Access';
    var info2 = 'Billing + Date of Birth';
    var info3 = 'Account& Routing No';
    var info4 = 'Carrier: T-Mobile, ClientIP+ Useragent';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle and Bill Pay ON, State: California';
    var info7 = 'Wire ON, Zelle ON';
    var image = 'https://darknet.id/img/chase69.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze44(event) {
    var price = 'Price: $2,936';
    var balance = 'Balance: $72,417';
    var website = 'chase.com';
    var info1 = 'Online Access';
    var info2 = 'Email Access';
    var info3 = 'Billing + Social Security Number';
    var info4 = 'ClientIP + Useragent';
    var info5 = 'Date of Birth';
    var info6 = 'Carrier PIN';
    var info7 = 'Wire ON, Carrier: Verizon';
    var image = 'https://darknet.id/img/chase72.jpg';
    var account = 'Chase Bank [SPENDING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze45(event) {
    var price = 'Price: $3,648';
    var balance = 'Balance: $90,646';
    var website = 'chase.com';
    var info1 = 'Gender: Female';
    var info2 = 'Date of Birth: 07/09/1948';
    var info3 = 'Social Security No';
    var info4 = 'Carrier: Verizon, State: California';
    var info5 = 'Info: Bank + Mail Access + Billing + Card';
    var info6 = 'Account& Routing No, Chase Credit/Debit Card ON';
    var info7 = 'Zelle ON, Wire ON, ClientIP + Useragent';
    var image = 'https://darknet.id/img/chase90.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze46(event) {
    var price = 'Price: $10,538';
    var balance = 'Balance: $263,896';
    var website = 'chase.com';
    var info1 = 'Login + Email Access, Carrier PIN: T-Mobile';
    var info2 = 'Zelle ON, Bill Pay OFF, Wire ON';
    var info3 = 'Billing + Social Security No, State: New York';
    var info4 = 'Account& Routing No, Wire ON';
    var info5 = 'Debit Details + ATM PIN';
    var info6 = 'ClientIP + Useragent, Good Zelle History';
    var info7 = 'Carrier Bill in Mailbox';
    var image = 'https://darknet.id/img/chase263.jpg';
    var account = 'Chase Bank [CHECKING ACCOUNT]';
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
}

function jaze47(event) {
    var price = 'Price: $82,490';
    var balance = 'Balance: $2,010,261';
    var website = 'chase.com';
    var info1 = 'Online + Email Login';
    var info2 = 'Billing+ Carrier PIN';
    var info3 = 'ClientIP + UserAgent';
    var info4 = 'Carrier: AT&T Mobility';
    var info5 = 'Carrier Bill in Mailbox';
    var info6 = 'Zelle Enabled';
    var info7 = 'Wire Enabled';
    var image = 'https://darknet.id/img/chase2mil.jpg';
    var account = 'Chase Bank [Private Client]';
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