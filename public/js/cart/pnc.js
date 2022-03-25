if(!localStorage.getItem('loadedpnc')){
    localStorage.setItem('pnc1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('pnc2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('pnc3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('pnc4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('pnc5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('pnc6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('pnc7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('pnc8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('pnc9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('pnc10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('pnc11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('pnc12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));
    localStorage.setItem('pnc13', ('$' + (Math.floor((Math.random() * 700) + 13425)).toLocaleString()));

    document.getElementById("pnc1").innerHTML = localStorage.getItem('pnc1');
    document.getElementById("pnc2").innerHTML = localStorage.getItem('pnc2');
    document.getElementById("pnc3").innerHTML = localStorage.getItem('pnc3');
    document.getElementById("pnc4").innerHTML = localStorage.getItem('pnc4');
    document.getElementById("pnc5").innerHTML = localStorage.getItem('pnc5');
    document.getElementById("pnc6").innerHTML = localStorage.getItem('pnc6');
    document.getElementById("pnc7").innerHTML = localStorage.getItem('pnc7');
    document.getElementById("pnc8").innerHTML = localStorage.getItem('pnc8');
    document.getElementById("pnc9").innerHTML = localStorage.getItem('pnc9');
    document.getElementById("pnc10").innerHTML = localStorage.getItem('pnc10');
    document.getElementById("pnc11").innerHTML = localStorage.getItem('pnc11');
    document.getElementById("pnc12").innerHTML = localStorage.getItem('pnc12');
    document.getElementById("pnc13").innerHTML = localStorage.getItem('pnc13');

    document.getElementById("pnc01").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc02").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc03").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc04").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc05").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc06").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc07").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc08").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc09").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc010").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc011").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc012").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc013").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc13').replace('$','').replace(',','')) / 50).toFixed(0);
} else{
    document.getElementById("pnc1").innerHTML = localStorage.getItem('pnc1');
    document.getElementById("pnc2").innerHTML = localStorage.getItem('pnc2');
    document.getElementById("pnc3").innerHTML = localStorage.getItem('pnc3');
    document.getElementById("pnc4").innerHTML = localStorage.getItem('pnc4');
    document.getElementById("pnc5").innerHTML = localStorage.getItem('pnc5');
    document.getElementById("pnc6").innerHTML = localStorage.getItem('pnc6');
    document.getElementById("pnc7").innerHTML = localStorage.getItem('pnc7');
    document.getElementById("pnc8").innerHTML = localStorage.getItem('pnc8');
    document.getElementById("pnc9").innerHTML = localStorage.getItem('pnc9');
    document.getElementById("pnc10").innerHTML = localStorage.getItem('pnc10');
    document.getElementById("pnc11").innerHTML = localStorage.getItem('pnc11');
    document.getElementById("pnc12").innerHTML = localStorage.getItem('pnc12');
    document.getElementById("pnc13").innerHTML = localStorage.getItem('pnc13');

    document.getElementById("pnc01").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc02").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc03").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc04").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc05").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc06").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc07").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc08").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc09").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc010").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc011").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc012").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("pnc013").innerHTML = 'Buy: $' + ((localStorage.getItem('pnc13').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadedpnc',true);
