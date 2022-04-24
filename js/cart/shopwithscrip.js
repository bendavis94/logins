if(!localStorage.getItem('loadedshop')){
    localStorage.setItem('shop1', ('$' + (Math.floor((Math.random() * 700) + 10025)).toLocaleString()));
    localStorage.setItem('shop2', ('$' + (Math.floor((Math.random() * 700) + 10725)).toLocaleString()));
    localStorage.setItem('shop3', ('$' + (Math.floor((Math.random() * 700) + 11425)).toLocaleString()));
    localStorage.setItem('shop4', ('$' + (Math.floor((Math.random() * 700) + 12125)).toLocaleString()));
    localStorage.setItem('shop5', ('$' + (Math.floor((Math.random() * 700) + 12825)).toLocaleString()));
    localStorage.setItem('shop6', ('$' + (Math.floor((Math.random() * 700) + 13525)).toLocaleString()));
    localStorage.setItem('shop7', ('$' + (Math.floor((Math.random() * 700) + 14225)).toLocaleString()));
    localStorage.setItem('shop8', ('$' + (Math.floor((Math.random() * 700) + 14925)).toLocaleString()));
    localStorage.setItem('shop9', ('$' + (Math.floor((Math.random() * 700) + 15625)).toLocaleString()));
    localStorage.setItem('shop10', ('$' + (Math.floor((Math.random() * 700) + 16325)).toLocaleString()));
    localStorage.setItem('shop11', ('$' + (Math.floor((Math.random() * 700) + 17025)).toLocaleString()));
    localStorage.setItem('shop12', ('$' + (Math.floor((Math.random() * 700) + 18725)).toLocaleString()));
    localStorage.setItem('shop13', ('$' + (Math.floor((Math.random() * 700) + 18425)).toLocaleString()));
    localStorage.setItem('shop14', ('$' + (Math.floor((Math.random() * 700) + 19125)).toLocaleString()));
    localStorage.setItem('shop15', ('$' + (Math.floor((Math.random() * 700) + 19825)).toLocaleString()));
    localStorage.setItem('shop16', ('$' + (Math.floor((Math.random() * 700) + 20525)).toLocaleString()));
    localStorage.setItem('shop17', ('$' + (Math.floor((Math.random() * 700) + 21225)).toLocaleString()));
    localStorage.setItem('shop18', ('$' + (Math.floor((Math.random() * 700) + 21925)).toLocaleString()));
    localStorage.setItem('shop19', ('$' + (Math.floor((Math.random() * 700) + 22625)).toLocaleString()));
    localStorage.setItem('shop20', ('$' + (Math.floor((Math.random() * 700) + 23325)).toLocaleString()));
    localStorage.setItem('shop21', ('$' + (Math.floor((Math.random() * 700) + 24025)).toLocaleString()));
    localStorage.setItem('shop22', ('$' + (Math.floor((Math.random() * 700) + 24725)).toLocaleString()));
    localStorage.setItem('shop23', ('$' + (Math.floor((Math.random() * 700) + 25425)).toLocaleString()));


    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');
    document.getElementById("shop9").innerHTML = localStorage.getItem('shop9');
    document.getElementById("shop10").innerHTML = localStorage.getItem('shop10');

    document.getElementById("shop11").innerHTML = localStorage.getItem('shop11');
    document.getElementById("shop12").innerHTML = localStorage.getItem('shop12');
    document.getElementById("shop13").innerHTML = localStorage.getItem('shop13');
    document.getElementById("shop14").innerHTML = localStorage.getItem('shop14');
    document.getElementById("shop15").innerHTML = localStorage.getItem('shop15');
    document.getElementById("shop16").innerHTML = localStorage.getItem('shop16');
    document.getElementById("shop17").innerHTML = localStorage.getItem('shop17');
    document.getElementById("shop18").innerHTML = localStorage.getItem('shop18');
    document.getElementById("shop19").innerHTML = localStorage.getItem('shop19');
    document.getElementById("shop20").innerHTML = localStorage.getItem('shop20');
    document.getElementById("shop21").innerHTML = localStorage.getItem('shop21');
    document.getElementById("shop22").innerHTML = localStorage.getItem('shop22');
    document.getElementById("shop23").innerHTML = localStorage.getItem('shop23');


    document.getElementById("shop01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

    document.getElementById("shop011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');
    document.getElementById("shop9").innerHTML = localStorage.getItem('shop9');
    document.getElementById("shop10").innerHTML = localStorage.getItem('shop10');

    document.getElementById("shop11").innerHTML = localStorage.getItem('shop11');
    document.getElementById("shop12").innerHTML = localStorage.getItem('shop12');
    document.getElementById("shop13").innerHTML = localStorage.getItem('shop13');
    document.getElementById("shop14").innerHTML = localStorage.getItem('shop14');
    document.getElementById("shop15").innerHTML = localStorage.getItem('shop15');
    document.getElementById("shop16").innerHTML = localStorage.getItem('shop16');
    document.getElementById("shop17").innerHTML = localStorage.getItem('shop17');
    document.getElementById("shop18").innerHTML = localStorage.getItem('shop18');
    document.getElementById("shop19").innerHTML = localStorage.getItem('shop19');
    document.getElementById("shop20").innerHTML = localStorage.getItem('shop20');
    document.getElementById("shop21").innerHTML = localStorage.getItem('shop21');
    document.getElementById("shop22").innerHTML = localStorage.getItem('shop22');
    document.getElementById("shop23").innerHTML = localStorage.getItem('shop23');


    document.getElementById("shop01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

    document.getElementById("shop011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedshop',true);
