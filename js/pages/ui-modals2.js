var addToCartButtons = document.getElementsByClassName('medium');
for(var i = 0; i <addToCartButtons.length; i++){
  var btn = addToCartButtons[i];
  btn.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event){
    var btn = event.target;
    var price = btn.innerText;
    var image = btn.parentElement.parentElement.children[0].children[1].src;
    var balance = btn.parentElement.parentElement.children[0].children[0].innerText;
    var website = btn.parentElement.children[0].innerText;
    var info1 = btn.parentElement.children[1].innerText;
    var info2 = btn.parentElement.children[2].innerText;
    var info3 = btn.parentElement.children[3].innerText;
    var info4 = btn.parentElement.children[4].innerText;
    var info5 = btn.parentElement.children[5].innerText;
    var info6 = btn.parentElement.children[6].innerText;
    var info7 = btn.parentElement.children[7].innerText;
    var account = btn.parentElement.children[8].innerText;
    

    $("#exampleModal").on("show.bs.modal", function (event) {
      ("use strict");
      var modal = $(this);
      modal.find(".modal-title").text(account);
      modal.find(".moneycoming").text(price);
      modal.find(".website p").text(website);
      modal.find(".balance p").text("Balance: " + balance);
      modal.find(".info1 p").text(info1);
      modal.find(".info2 p").text(info2);
      modal.find(".info3 p").text(info3);
      modal.find(".info4 p").text(info4);
      modal.find(".info5 p").text(info5);
      modal.find(".info6 p").text(info6);
      modal.find(".info7 p").text(info7);
      modal.find(".image p").text(image);
      modal.find(".account p").text(account);
    });
}
