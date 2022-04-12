if(!localStorage.getItem('loadedbbt')){
    localStorage.setItem('bbt1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('bbt2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('bbt3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('bbt4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('bbt5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('bbt6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('bbt7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('bbt8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('bbt9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('bbt10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('bbt11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('bbt12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));
    localStorage.setItem('bbt13', ('$' + (Math.floor((Math.random() * 700) + 13425)).toLocaleString()));

    document.getElementById("bbt1").innerHTML = localStorage.getItem('bbt1');
    document.getElementById("bbt2").innerHTML = localStorage.getItem('bbt2');
    document.getElementById("bbt3").innerHTML = localStorage.getItem('bbt3');
    document.getElementById("bbt4").innerHTML = localStorage.getItem('bbt4');
    document.getElementById("bbt5").innerHTML = localStorage.getItem('bbt5');
    document.getElementById("bbt6").innerHTML = localStorage.getItem('bbt6');
    document.getElementById("bbt7").innerHTML = localStorage.getItem('bbt7');
    document.getElementById("bbt8").innerHTML = localStorage.getItem('bbt8');
    document.getElementById("bbt9").innerHTML = localStorage.getItem('bbt9');
    document.getElementById("bbt10").innerHTML = localStorage.getItem('bbt10');
    document.getElementById("bbt11").innerHTML = localStorage.getItem('bbt11');
    document.getElementById("bbt12").innerHTML = localStorage.getItem('bbt12');
    document.getElementById("bbt13").innerHTML = localStorage.getItem('bbt13');


    document.getElementById("bbt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("bbt1").innerHTML = localStorage.getItem('bbt1');
    document.getElementById("bbt2").innerHTML = localStorage.getItem('bbt2');
    document.getElementById("bbt3").innerHTML = localStorage.getItem('bbt3');
    document.getElementById("bbt4").innerHTML = localStorage.getItem('bbt4');
    document.getElementById("bbt5").innerHTML = localStorage.getItem('bbt5');
    document.getElementById("bbt6").innerHTML = localStorage.getItem('bbt6');
    document.getElementById("bbt7").innerHTML = localStorage.getItem('bbt7');
    document.getElementById("bbt8").innerHTML = localStorage.getItem('bbt8');
    document.getElementById("bbt9").innerHTML = localStorage.getItem('bbt9');
    document.getElementById("bbt10").innerHTML = localStorage.getItem('bbt10');
    document.getElementById("bbt11").innerHTML = localStorage.getItem('bbt11');
    document.getElementById("bbt12").innerHTML = localStorage.getItem('bbt12');
    document.getElementById("bbt13").innerHTML = localStorage.getItem('bbt13');


    document.getElementById("bbt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bbt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedbbt',true);
