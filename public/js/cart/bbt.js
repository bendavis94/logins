if(!localStorage.getItem('loadedbbt')){
    localStorage.setItem('bbt1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('bbt2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('bbt3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('bbt4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('bbt5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('bbt6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('bbt7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('bbt8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('bbt9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('bbt10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('bbt11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));
    localStorage.setItem('bbt12', ('$' + (Math.floor((Math.random() * 3000) + 44025)).toLocaleString()));
    localStorage.setItem('bbt13', ('$' + (Math.floor((Math.random() * 3000) + 47025)).toLocaleString()));

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


    document.getElementById("bbt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt12').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt13').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();

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


    document.getElementById("bbt01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt12').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("bbt013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bbt13').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedbbt',true);
