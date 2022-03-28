if(!localStorage.getItem('loadednfcu')){
    localStorage.setItem('nfcu1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('nfcu2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('nfcu3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('nfcu4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('nfcu5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('nfcu6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('nfcu7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('nfcu8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('nfcu9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('nfcu10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('nfcu11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('nfcu12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));


    document.getElementById("nfcu1").innerHTML = localStorage.getItem('nfcu1');
    document.getElementById("nfcu2").innerHTML = localStorage.getItem('nfcu2');
    document.getElementById("nfcu3").innerHTML = localStorage.getItem('nfcu3');
    document.getElementById("nfcu4").innerHTML = localStorage.getItem('nfcu4');
    document.getElementById("nfcu5").innerHTML = localStorage.getItem('nfcu5');
    document.getElementById("nfcu6").innerHTML = localStorage.getItem('nfcu6');
    document.getElementById("nfcu7").innerHTML = localStorage.getItem('nfcu7');
    document.getElementById("nfcu8").innerHTML = localStorage.getItem('nfcu8');
    document.getElementById("nfcu9").innerHTML = localStorage.getItem('nfcu9');
    document.getElementById("nfcu10").innerHTML = localStorage.getItem('nfcu10');
    document.getElementById("nfcu11").innerHTML = localStorage.getItem('nfcu11');
    document.getElementById("nfcu12").innerHTML = localStorage.getItem('nfcu12');

    document.getElementById("nfcu01").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu02").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu03").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu04").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu05").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu06").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu07").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu08").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu09").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu010").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu011").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu012").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu12').replace('$','').replace(',','')) / 50).toFixed(0);
} else{
    document.getElementById("nfcu1").innerHTML = localStorage.getItem('nfcu1');
    document.getElementById("nfcu2").innerHTML = localStorage.getItem('nfcu2');
    document.getElementById("nfcu3").innerHTML = localStorage.getItem('nfcu3');
    document.getElementById("nfcu4").innerHTML = localStorage.getItem('nfcu4');
    document.getElementById("nfcu5").innerHTML = localStorage.getItem('nfcu5');
    document.getElementById("nfcu6").innerHTML = localStorage.getItem('nfcu6');
    document.getElementById("nfcu7").innerHTML = localStorage.getItem('nfcu7');
    document.getElementById("nfcu8").innerHTML = localStorage.getItem('nfcu8');
    document.getElementById("nfcu9").innerHTML = localStorage.getItem('nfcu9');
    document.getElementById("nfcu10").innerHTML = localStorage.getItem('nfcu10');
    document.getElementById("nfcu11").innerHTML = localStorage.getItem('nfcu11');
    document.getElementById("nfcu12").innerHTML = localStorage.getItem('nfcu12');


    document.getElementById("nfcu01").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu02").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu03").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu04").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu05").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu06").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu07").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu08").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu09").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu010").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu011").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("nfcu012").innerHTML = 'Buy: $' + ((localStorage.getItem('nfcu12').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadednfcu',true);
