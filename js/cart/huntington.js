if(!localStorage.getItem('loadedhunt')){
    localStorage.setItem('hunt1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('hunt2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('hunt3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('hunt4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('hunt5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('hunt6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('hunt7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('hunt8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('hunt9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('hunt10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('hunt11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));
    localStorage.setItem('hunt12', ('$' + (Math.floor((Math.random() * 3000) + 44025)).toLocaleString()));
    localStorage.setItem('hunt13', ('$' + (Math.floor((Math.random() * 3000) + 47025)).toLocaleString()));

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


    document.getElementById("hunt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt12').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt13').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();

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


    document.getElementById("hunt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt12').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("hunt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('hunt13').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedhunt',true);
