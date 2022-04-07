if(!localStorage.getItem('loadedboa')){
    localStorage.setItem('bankofamerica1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('bankofamerica2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('bankofamerica3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('bankofamerica4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('bankofamerica5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('bankofamerica6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('bankofamerica7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));

    document.getElementById("bankofamerica1").innerHTML = localStorage.getItem('bankofamerica1');
    document.getElementById("bankofamerica2").innerHTML = localStorage.getItem('bankofamerica2');
    document.getElementById("bankofamerica3").innerHTML = localStorage.getItem('bankofamerica3');
    document.getElementById("bankofamerica4").innerHTML = localStorage.getItem('bankofamerica4');
    document.getElementById("bankofamerica5").innerHTML = localStorage.getItem('bankofamerica5');
    document.getElementById("bankofamerica6").innerHTML = localStorage.getItem('bankofamerica6');
    document.getElementById("bankofamerica7").innerHTML = localStorage.getItem('bankofamerica7');


    document.getElementById("bankofamerica01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("bankofamerica1").innerHTML = localStorage.getItem('bankofamerica1');
    document.getElementById("bankofamerica2").innerHTML = localStorage.getItem('bankofamerica2');
    document.getElementById("bankofamerica3").innerHTML = localStorage.getItem('bankofamerica3');
    document.getElementById("bankofamerica4").innerHTML = localStorage.getItem('bankofamerica4');
    document.getElementById("bankofamerica5").innerHTML = localStorage.getItem('bankofamerica5');
    document.getElementById("bankofamerica6").innerHTML = localStorage.getItem('bankofamerica6');
    document.getElementById("bankofamerica7").innerHTML = localStorage.getItem('bankofamerica7');


    document.getElementById("bankofamerica01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("bankofamerica07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('bankofamerica7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedboa',true);
