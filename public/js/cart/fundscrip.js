if(!localStorage.getItem('loadedfundz')){
    localStorage.setItem('fund1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('fund2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('fund3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('fund4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('fund5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('fund6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('fund7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('fund8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));

    
    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');

    document.getElementById("fund01").innerHTML = 'Buy: $' + ((localStorage.getItem('fund1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund02").innerHTML = 'Buy: $' + ((localStorage.getItem('fund2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund03").innerHTML = 'Buy: $' + ((localStorage.getItem('fund3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund04").innerHTML = 'Buy: $' + ((localStorage.getItem('fund4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund05").innerHTML = 'Buy: $' + ((localStorage.getItem('fund5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund06").innerHTML = 'Buy: $' + ((localStorage.getItem('fund6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund07").innerHTML = 'Buy: $' + ((localStorage.getItem('fund7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund08").innerHTML = 'Buy: $' + ((localStorage.getItem('fund8').replace('$','').replace(',','')) / 50).toFixed(0);

} else{
    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');

    document.getElementById("fund01").innerHTML = 'Buy: $' + ((localStorage.getItem('fund1').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund02").innerHTML = 'Buy: $' + ((localStorage.getItem('fund2').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund03").innerHTML = 'Buy: $' + ((localStorage.getItem('fund3').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund04").innerHTML = 'Buy: $' + ((localStorage.getItem('fund4').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund05").innerHTML = 'Buy: $' + ((localStorage.getItem('fund5').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund06").innerHTML = 'Buy: $' + ((localStorage.getItem('fund6').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund07").innerHTML = 'Buy: $' + ((localStorage.getItem('fund7').replace('$','').replace(',','')) / 50).toFixed(0);
    document.getElementById("fund08").innerHTML = 'Buy: $' + ((localStorage.getItem('fund8').replace('$','').replace(',','')) / 50).toFixed(0);
}

localStorage.setItem('loadedfundz',true);
