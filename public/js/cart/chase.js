if(!localStorage.getItem('loadedchase')){
    localStorage.setItem('chase1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('chase2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('chase3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('chase4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('chase5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('chase6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('chase7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('chase8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('chase9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('chase10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('chase11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('chase12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));
    localStorage.setItem('chase13', ('$' + (Math.floor((Math.random() * 700) + 13425)).toLocaleString()));

    document.getElementById("chase1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chase2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chase3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chase4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chase5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chase6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chase7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chase8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chase9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chase10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chase11").innerHTML = localStorage.getItem('chase11');
    document.getElementById("chase12").innerHTML = localStorage.getItem('chase12');
    document.getElementById("chase13").innerHTML = localStorage.getItem('chase13');


    document.getElementById("chase01").innerHTML = 'Buy: $' + ((localStorage.getItem('chase1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase02").innerHTML = 'Buy: $' + ((localStorage.getItem('chase2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase03").innerHTML = 'Buy: $' + ((localStorage.getItem('chase3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase04").innerHTML = 'Buy: $' + ((localStorage.getItem('chase4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase05").innerHTML = 'Buy: $' + ((localStorage.getItem('chase5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase06").innerHTML = 'Buy: $' + ((localStorage.getItem('chase6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase07").innerHTML = 'Buy: $' + ((localStorage.getItem('chase7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase08").innerHTML = 'Buy: $' + ((localStorage.getItem('chase8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase09").innerHTML = 'Buy: $' + ((localStorage.getItem('chase9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase010").innerHTML = 'Buy: $' + ((localStorage.getItem('chase10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase011").innerHTML = 'Buy: $' + ((localStorage.getItem('chase11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase012").innerHTML = 'Buy: $' + ((localStorage.getItem('chase12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase013").innerHTML = 'Buy: $' + ((localStorage.getItem('chase13').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("chase1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chase2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chase3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chase4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chase5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chase6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chase7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chase8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chase9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chase10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chase11").innerHTML = localStorage.getItem('chase11');
    document.getElementById("chase12").innerHTML = localStorage.getItem('chase12');
    document.getElementById("chase13").innerHTML = localStorage.getItem('chase13');


    document.getElementById("chase01").innerHTML = 'Buy: $' + ((localStorage.getItem('chase1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase02").innerHTML = 'Buy: $' + ((localStorage.getItem('chase2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase03").innerHTML = 'Buy: $' + ((localStorage.getItem('chase3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase04").innerHTML = 'Buy: $' + ((localStorage.getItem('chase4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase05").innerHTML = 'Buy: $' + ((localStorage.getItem('chase5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase06").innerHTML = 'Buy: $' + ((localStorage.getItem('chase6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase07").innerHTML = 'Buy: $' + ((localStorage.getItem('chase7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase08").innerHTML = 'Buy: $' + ((localStorage.getItem('chase8').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase09").innerHTML = 'Buy: $' + ((localStorage.getItem('chase9').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase010").innerHTML = 'Buy: $' + ((localStorage.getItem('chase10').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase011").innerHTML = 'Buy: $' + ((localStorage.getItem('chase11').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase012").innerHTML = 'Buy: $' + ((localStorage.getItem('chase12').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("chase013").innerHTML = 'Buy: $' + ((localStorage.getItem('chase13').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadedchase',true);
