if(!localStorage.getItem('loadedhunt')){
    localStorage.setItem('hunt1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('hunt2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('hunt3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('hunt4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('hunt5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('hunt6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('hunt7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('hunt8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('hunt9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('hunt10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('hunt11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('hunt12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));
    localStorage.setItem('hunt13', ('$' + (Math.floor((Math.random() * 700) + 13425)).toLocaleString()));

    document.getElementById("hunt1").innerHTML = localStorage.getItem('hunt1');
    document.getElementById("hunt2").innerHTML = localStorage.getItem('hunt2');
    document.getElementById("hunt3").innerHTML = localStorage.getItem('hunt3');
    document.getElementById("hunt4").innerHTML = localStorage.getItem('hunt4');
    document.getElementById("hunt5").innerHTML = localStorage.getItem('hunt5');
    document.getElementById("hunt6").innerHTML = localStorage.getItem('hunt6');
    document.getElementById("hunt7").innerHTML = localStorage.getItem('hunt7');
    document.getElementById("hunt8").innerHTML = localStorage.getItem('hunt8');
    document.getElementById("hunt9").innerHTML = localStorage.getItem('hunt9');
    document.getElementById("hunt10").innerHTML = localStorage.getItem('hunt10');
    document.getElementById("hunt11").innerHTML = localStorage.getItem('hunt11');
    document.getElementById("hunt12").innerHTML = localStorage.getItem('hunt12');
    document.getElementById("hunt13").innerHTML = localStorage.getItem('hunt13');
    
    document.getElementById("hunt01").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt02").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt03").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt04").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt05").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt06").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt07").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt08").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt09").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt010").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt011").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt012").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt013").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt13').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("hunt1").innerHTML = localStorage.getItem('hunt1');
    document.getElementById("hunt2").innerHTML = localStorage.getItem('hunt2');
    document.getElementById("hunt3").innerHTML = localStorage.getItem('hunt3');
    document.getElementById("hunt4").innerHTML = localStorage.getItem('hunt4');
    document.getElementById("hunt5").innerHTML = localStorage.getItem('hunt5');
    document.getElementById("hunt6").innerHTML = localStorage.getItem('hunt6');
    document.getElementById("hunt7").innerHTML = localStorage.getItem('hunt7');
    document.getElementById("hunt8").innerHTML = localStorage.getItem('hunt8');
    document.getElementById("hunt9").innerHTML = localStorage.getItem('hunt9');
    document.getElementById("hunt10").innerHTML = localStorage.getItem('hunt10');
    document.getElementById("hunt11").innerHTML = localStorage.getItem('hunt11');
    document.getElementById("hunt12").innerHTML = localStorage.getItem('hunt12');
    document.getElementById("hunt13").innerHTML = localStorage.getItem('hunt13');

    document.getElementById("hunt01").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt02").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt03").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt04").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt05").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt06").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt07").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt08").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt09").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt010").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt011").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt012").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("hunt013").innerHTML = 'Buy: $' + ((localStorage.getItem('hunt13').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadedhunt',true);