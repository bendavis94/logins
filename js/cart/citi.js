if(!localStorage.getItem('loadedciti')){
    localStorage.setItem('citi1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('citi2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('citi3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('citi4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('citi5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('citi6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('citi7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('citi8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('citi9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('citi10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('citi11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));
    localStorage.setItem('citi12', ('$' + (Math.floor((Math.random() * 3000) + 44025)).toLocaleString()));
    localStorage.setItem('citi13', ('$' + (Math.floor((Math.random() * 3000) + 47025)).toLocaleString()));

    document.getElementById("citi1").innerHTML = localStorage.getItem('citi1');
    document.getElementById("citi2").innerHTML = localStorage.getItem('citi2');
    document.getElementById("citi3").innerHTML = localStorage.getItem('citi3');
    document.getElementById("citi4").innerHTML = localStorage.getItem('citi4');
    document.getElementById("citi5").innerHTML = localStorage.getItem('citi5');
    document.getElementById("citi6").innerHTML = localStorage.getItem('citi6');
    document.getElementById("citi7").innerHTML = localStorage.getItem('citi7');
    document.getElementById("citi8").innerHTML = localStorage.getItem('citi8');
    document.getElementById("citi9").innerHTML = localStorage.getItem('citi9');
    document.getElementById("citi10").innerHTML = localStorage.getItem('citi10');
    document.getElementById("citi11").innerHTML = localStorage.getItem('citi11');
    document.getElementById("citi12").innerHTML = localStorage.getItem('citi12');
    document.getElementById("citi13").innerHTML = localStorage.getItem('citi13');


    document.getElementById("citi01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("citi1").innerHTML = localStorage.getItem('citi1');
    document.getElementById("citi2").innerHTML = localStorage.getItem('citi2');
    document.getElementById("citi3").innerHTML = localStorage.getItem('citi3');
    document.getElementById("citi4").innerHTML = localStorage.getItem('citi4');
    document.getElementById("citi5").innerHTML = localStorage.getItem('citi5');
    document.getElementById("citi6").innerHTML = localStorage.getItem('citi6');
    document.getElementById("citi7").innerHTML = localStorage.getItem('citi7');
    document.getElementById("citi8").innerHTML = localStorage.getItem('citi8');
    document.getElementById("citi9").innerHTML = localStorage.getItem('citi9');
    document.getElementById("citi10").innerHTML = localStorage.getItem('citi10');
    document.getElementById("citi11").innerHTML = localStorage.getItem('citi11');
    document.getElementById("citi12").innerHTML = localStorage.getItem('citi12');
    document.getElementById("citi13").innerHTML = localStorage.getItem('citi13');


    document.getElementById("citi01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("citi013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('citi13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedciti',true);
