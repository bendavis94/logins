if(!localStorage.getItem('loadedchime')){
    localStorage.setItem('chime1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('chime2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('chime3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('chime4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('chime5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('chime6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('chime7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('chime8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('chime9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('chime10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('chime11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));

    document.getElementById("chime1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chase11');


    document.getElementById("chime01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
} else{
    document.getElementById("chime1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chase11');


    document.getElementById("chime01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime1').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime2').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime3').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime4').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime5').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime6').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime7').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime8').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime9').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime10').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
    document.getElementById("chime011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime11').replace('$','').replace(',','')/12.5).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedchime',true);
