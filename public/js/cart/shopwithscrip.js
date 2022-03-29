if(!localStorage.getItem('loadedshop')){
    localStorage.setItem('shop1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('shop2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('shop3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('shop4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('shop5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('shop6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('shop7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('shop8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));

    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');

    document.getElementById("shop01").innerHTML = 'Buy: $' + ((localStorage.getItem('shop1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop02").innerHTML = 'Buy: $' + ((localStorage.getItem('shop2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop03").innerHTML = 'Buy: $' + ((localStorage.getItem('shop3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop04").innerHTML = 'Buy: $' + ((localStorage.getItem('shop4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop05").innerHTML = 'Buy: $' + ((localStorage.getItem('shop5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop06").innerHTML = 'Buy: $' + ((localStorage.getItem('shop6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop07").innerHTML = 'Buy: $' + ((localStorage.getItem('shop7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop08").innerHTML = 'Buy: $' + ((localStorage.getItem('shop8').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');

    document.getElementById("shop01").innerHTML = 'Buy: $' + ((localStorage.getItem('shop1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop02").innerHTML = 'Buy: $' + ((localStorage.getItem('shop2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop03").innerHTML = 'Buy: $' + ((localStorage.getItem('shop3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop04").innerHTML = 'Buy: $' + ((localStorage.getItem('shop4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop05").innerHTML = 'Buy: $' + ((localStorage.getItem('shop5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop06").innerHTML = 'Buy: $' + ((localStorage.getItem('shop6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop07").innerHTML = 'Buy: $' + ((localStorage.getItem('shop7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("shop08").innerHTML = 'Buy: $' + ((localStorage.getItem('shop8').replace('$','').replace(',','')) / 50).toFixed(0);

}

localStorage.setItem('loadedshop',true);
