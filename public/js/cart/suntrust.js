if(!localStorage.getItem('loadedsun')){
    localStorage.setItem('sun1', ('$' + (Math.floor((Math.random() * 2000) + 5025)).toLocaleString()));
    localStorage.setItem('sun2', ('$' + (Math.floor((Math.random() * 2000) + 7025)).toLocaleString()));
    localStorage.setItem('sun3', ('$' + (Math.floor((Math.random() * 2000) + 9025)).toLocaleString()));
    localStorage.setItem('sun4', ('$' + (Math.floor((Math.random() * 2000) + 11025)).toLocaleString()));
    localStorage.setItem('sun5', ('$' + (Math.floor((Math.random() * 2000) + 13025)).toLocaleString()));
    localStorage.setItem('sun6', ('$' + (Math.floor((Math.random() * 2000) + 15025)).toLocaleString()));
    localStorage.setItem('sun7', ('$' + (Math.floor((Math.random() * 2000) + 17025)).toLocaleString()));
    localStorage.setItem('sun8', ('$' + (Math.floor((Math.random() * 2000) + 19025)).toLocaleString()));
    localStorage.setItem('sun9', ('$' + (Math.floor((Math.random() * 2000) + 21025)).toLocaleString()));

    document.getElementById("sun1").innerHTML = localStorage.getItem('sun1');
    document.getElementById("sun2").innerHTML = localStorage.getItem('sun2');
    document.getElementById("sun3").innerHTML = localStorage.getItem('sun3');
    document.getElementById("sun4").innerHTML = localStorage.getItem('sun4');
    document.getElementById("sun5").innerHTML = localStorage.getItem('sun5');
    document.getElementById("sun6").innerHTML = localStorage.getItem('sun6');
    document.getElementById("sun7").innerHTML = localStorage.getItem('sun7');
    document.getElementById("sun8").innerHTML = localStorage.getItem('sun8');
    document.getElementById("sun9").innerHTML = localStorage.getItem('sun9');


    document.getElementById("sun01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
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


    document.getElementById("sun01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("sun09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('sun9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedsun',true);
