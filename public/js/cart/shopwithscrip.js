if(!localStorage.getItem('loadedshop')){
    localStorage.setItem('shop1', ('$' + (Math.floor((Math.random() * 700) + 3025)).toLocaleString()));
    localStorage.setItem('shop2', ('$' + (Math.floor((Math.random() * 700) + 3725)).toLocaleString()));
    localStorage.setItem('shop3', ('$' + (Math.floor((Math.random() * 700) + 4425)).toLocaleString()));
    localStorage.setItem('shop4', ('$' + (Math.floor((Math.random() * 700) + 5125)).toLocaleString()));
    localStorage.setItem('shop5', ('$' + (Math.floor((Math.random() * 700) + 5825)).toLocaleString()));
    localStorage.setItem('shop6', ('$' + (Math.floor((Math.random() * 700) + 6525)).toLocaleString()));
    localStorage.setItem('shop7', ('$' + (Math.floor((Math.random() * 700) + 7225)).toLocaleString()));
    localStorage.setItem('shop8', ('$' + (Math.floor((Math.random() * 700) + 7925)).toLocaleString()));


    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');

    document.getElementById("shop01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("shop1").innerHTML = localStorage.getItem('shop1');
    document.getElementById("shop2").innerHTML = localStorage.getItem('shop2');
    document.getElementById("shop3").innerHTML = localStorage.getItem('shop3');
    document.getElementById("shop4").innerHTML = localStorage.getItem('shop4');
    document.getElementById("shop5").innerHTML = localStorage.getItem('shop5');
    document.getElementById("shop6").innerHTML = localStorage.getItem('shop6');
    document.getElementById("shop7").innerHTML = localStorage.getItem('shop7');
    document.getElementById("shop8").innerHTML = localStorage.getItem('shop8');

    document.getElementById("shop01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("shop08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('shop8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedshop',true);
