if(!localStorage.getItem('loadedchime')){
    localStorage.setItem('chime1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('chime2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('chime3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('chime4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('chime5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('chime6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('chime7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('chime8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('chime9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('chime10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('chime11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));

    document.getElementById("chime1").innerHTML = localStorage.getItem('chime1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chime2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chime3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chime4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chime5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chime6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chime7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chime8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chime9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chime10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chime11');

    document.getElementById("chime01").innerHTML = 'Buy: $' + ((localStorage.getItem('chime1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime02").innerHTML = 'Buy: $' + ((localStorage.getItem('chime2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime03").innerHTML = 'Buy: $' + ((localStorage.getItem('chime3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime04").innerHTML = 'Buy: $' + ((localStorage.getItem('chime4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime05").innerHTML = 'Buy: $' + ((localStorage.getItem('chime5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime06").innerHTML = 'Buy: $' + ((localStorage.getItem('chime6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime07").innerHTML = 'Buy: $' + ((localStorage.getItem('chime7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime08").innerHTML = 'Buy: $' + ((localStorage.getItem('chime8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime09").innerHTML = 'Buy: $' + ((localStorage.getItem('chime9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime010").innerHTML = 'Buy: $' + ((localStorage.getItem('chime10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime011").innerHTML = 'Buy: $' + ((localStorage.getItem('chime11').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("chime1").innerHTML = localStorage.getItem('chime1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chime2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chime3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chime4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chime5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chime6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chime7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chime8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chime9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chime10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chime11');

    document.getElementById("chime01").innerHTML = 'Buy: $' + ((localStorage.getItem('chime1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime02").innerHTML = 'Buy: $' + ((localStorage.getItem('chime2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime03").innerHTML = 'Buy: $' + ((localStorage.getItem('chime3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime04").innerHTML = 'Buy: $' + ((localStorage.getItem('chime4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime05").innerHTML = 'Buy: $' + ((localStorage.getItem('chime5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime06").innerHTML = 'Buy: $' + ((localStorage.getItem('chime6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime07").innerHTML = 'Buy: $' + ((localStorage.getItem('chime7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime08").innerHTML = 'Buy: $' + ((localStorage.getItem('chime8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime09").innerHTML = 'Buy: $' + ((localStorage.getItem('chime9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime010").innerHTML = 'Buy: $' + ((localStorage.getItem('chime10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chime011").innerHTML = 'Buy: $' + ((localStorage.getItem('chime11').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadedchime',true);
