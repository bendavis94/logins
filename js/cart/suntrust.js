if(!localStorage.getItem('loadedsun')){
    localStorage.setItem('sun1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('sun2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('sun3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('sun4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('sun5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('sun6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('sun7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('sun8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('sun9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));

    document.getElementById("sun1").innerHTML = localStorage.getItem('sun1');
    document.getElementById("sun2").innerHTML = localStorage.getItem('sun2');
    document.getElementById("sun3").innerHTML = localStorage.getItem('sun3');
    document.getElementById("sun4").innerHTML = localStorage.getItem('sun4');
    document.getElementById("sun5").innerHTML = localStorage.getItem('sun5');
    document.getElementById("sun6").innerHTML = localStorage.getItem('sun6');
    document.getElementById("sun7").innerHTML = localStorage.getItem('sun7');
    document.getElementById("sun8").innerHTML = localStorage.getItem('sun8');
    document.getElementById("sun9").innerHTML = localStorage.getItem('sun9');

    document.getElementById("sun01").innerHTML = 'Buy: $' + ((localStorage.getItem('sun1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun02").innerHTML = 'Buy: $' + ((localStorage.getItem('sun2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun03").innerHTML = 'Buy: $' + ((localStorage.getItem('sun3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun04").innerHTML = 'Buy: $' + ((localStorage.getItem('sun4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun05").innerHTML = 'Buy: $' + ((localStorage.getItem('sun5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun06").innerHTML = 'Buy: $' + ((localStorage.getItem('sun6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun07").innerHTML = 'Buy: $' + ((localStorage.getItem('sun7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun08").innerHTML = 'Buy: $' + ((localStorage.getItem('sun8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun09").innerHTML = 'Buy: $' + ((localStorage.getItem('sun9').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("sun1").innerHTML = localStorage.getItem('sun1');
    document.getElementById("sun2").innerHTML = localStorage.getItem('sun2');
    document.getElementById("sun3").innerHTML = localStorage.getItem('sun3');
    document.getElementById("sun4").innerHTML = localStorage.getItem('sun4');
    document.getElementById("sun5").innerHTML = localStorage.getItem('sun5');
    document.getElementById("sun6").innerHTML = localStorage.getItem('sun6');
    document.getElementById("sun7").innerHTML = localStorage.getItem('sun7');
    document.getElementById("sun8").innerHTML = localStorage.getItem('sun8');
    document.getElementById("sun9").innerHTML = localStorage.getItem('sun9');

    document.getElementById("sun01").innerHTML = 'Buy: $' + ((localStorage.getItem('sun1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun02").innerHTML = 'Buy: $' + ((localStorage.getItem('sun2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun03").innerHTML = 'Buy: $' + ((localStorage.getItem('sun3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun04").innerHTML = 'Buy: $' + ((localStorage.getItem('sun4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun05").innerHTML = 'Buy: $' + ((localStorage.getItem('sun5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun06").innerHTML = 'Buy: $' + ((localStorage.getItem('sun6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun07").innerHTML = 'Buy: $' + ((localStorage.getItem('sun7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun08").innerHTML = 'Buy: $' + ((localStorage.getItem('sun8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("sun09").innerHTML = 'Buy: $' + ((localStorage.getItem('sun9').replace('$','').replace(',','')) / 50).toFixed(0);

}

localStorage.setItem('loadedsun',true);
