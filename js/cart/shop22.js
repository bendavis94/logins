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
    updateCartTotal();
} else {
    document.getElementById('cartlength').style.display = 'none';
}

var addToCartButtons = document.getElementsByClassName('moneycoming');
for(var i = 0; i <addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    var button = event.target;
    var pri = button.innerText;
    var pric = pri.replace('Buy: ','');
    var price = 'Price: '+  pric;
    var balance = button.parentElement.parentElement.children[0].children[0].innerText;
    var website = button.parentElement.parentElement.children[1].children[0].innerText;
    var info1 = button.parentElement.parentElement.children[2].children[0].innerText;
    var info2 = button.parentElement.parentElement.children[3].children[0].innerText;
    var info3 = button.parentElement.parentElement.children[4].children[0].innerText;
    var info4 = button.parentElement.parentElement.children[5].children[0].innerText;
    var info5 = button.parentElement.parentElement.children[6].children[0].innerText;
    var info6 = button.parentElement.parentElement.children[7].children[0].innerText;
    var info7 = button.parentElement.parentElement.children[8].children[0].innerText;
    var image = button.parentElement.parentElement.children[9].children[0].innerText;
    var account = button.parentElement.parentElement.children[10].children[0].innerText;
    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,info7);
    updateCartTotal();
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

    var cartItemNames = document.getElementsByClassName('btn-balance');
    for(var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames.length > 25) {
            alert(`Cart is full, checkout the 2 logs in cart first, follow the steps to cashout carefully, then buy more later`);
            window.location.assign('invoice')
            return
        }
    }

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
                bunist.classList.add('display-nones');
                singleLog[i].disabled = 'disabled';
            } 
        });
    }
    localStorage.setItem('time-left',600)
}


function updateCartTotal2() {
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
    localStorage.setItem('time-left',600)
}