if(!localStorage.getItem('loadedwood')){
    localStorage.setItem('wood1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('wood2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('wood3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('wood4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('wood5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('wood6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('wood7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('wood8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('wood9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('wood10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));

    document.getElementById("wood1").innerHTML = localStorage.getItem('wood1');
    document.getElementById("wood2").innerHTML = localStorage.getItem('wood2');
    document.getElementById("wood3").innerHTML = localStorage.getItem('wood3');
    document.getElementById("wood4").innerHTML = localStorage.getItem('wood4');
    document.getElementById("wood5").innerHTML = localStorage.getItem('wood5');
    document.getElementById("wood6").innerHTML = localStorage.getItem('wood6');
    document.getElementById("wood7").innerHTML = localStorage.getItem('wood7');
    document.getElementById("wood8").innerHTML = localStorage.getItem('wood8');
    document.getElementById("wood9").innerHTML = localStorage.getItem('wood9');
    document.getElementById("wood10").innerHTML = localStorage.getItem('wood10');


    document.getElementById("wood01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();

} else{
    document.getElementById("wood1").innerHTML = localStorage.getItem('wood1');
    document.getElementById("wood2").innerHTML = localStorage.getItem('wood2');
    document.getElementById("wood3").innerHTML = localStorage.getItem('wood3');
    document.getElementById("wood4").innerHTML = localStorage.getItem('wood4');
    document.getElementById("wood5").innerHTML = localStorage.getItem('wood5');
    document.getElementById("wood6").innerHTML = localStorage.getItem('wood6');
    document.getElementById("wood7").innerHTML = localStorage.getItem('wood7');
    document.getElementById("wood8").innerHTML = localStorage.getItem('wood8');
    document.getElementById("wood9").innerHTML = localStorage.getItem('wood9');
    document.getElementById("wood10").innerHTML = localStorage.getItem('wood10');


    document.getElementById("wood01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("wood010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('wood10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedwood',true);
