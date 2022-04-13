if(!localStorage.getItem('loadedchime')){
    localStorage.setItem('chime1', ('$' + (Math.floor((Math.random() * 700) + 2025)).toLocaleString()));
    localStorage.setItem('chime2', ('$' + (Math.floor((Math.random() * 700) + 2725)).toLocaleString()));
    localStorage.setItem('chime3', ('$' + (Math.floor((Math.random() * 700) + 3425)).toLocaleString()));
    localStorage.setItem('chime4', ('$' + (Math.floor((Math.random() * 700) + 4125)).toLocaleString()));
    localStorage.setItem('chime5', ('$' + (Math.floor((Math.random() * 700) + 4825)).toLocaleString()));
    localStorage.setItem('chime6', ('$' + (Math.floor((Math.random() * 700) + 5525)).toLocaleString()));
    localStorage.setItem('chime7', ('$' + (Math.floor((Math.random() * 700) + 6225)).toLocaleString()));
    localStorage.setItem('chime8', ('$' + (Math.floor((Math.random() * 700) + 6925)).toLocaleString()));
    localStorage.setItem('chime9', ('$' + (Math.floor((Math.random() * 700) + 7625)).toLocaleString()));
    localStorage.setItem('chime10', ('$' + (Math.floor((Math.random() * 700) + 8325)).toLocaleString()));
    localStorage.setItem('chime11', ('$' + (Math.floor((Math.random() * 700) + 9025)).toLocaleString()));

    document.getElementById("chime1").innerHTML = localStorage.getItem('chime1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chime2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chime3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chime4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chime5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chime6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chime7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chime8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chime9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chime10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chime11');


    document.getElementById("chime01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("chime1").innerHTML = localStorage.getItem('chime1');
    document.getElementById("chime2").innerHTML = localStorage.getItem('chime2');
    document.getElementById("chime3").innerHTML = localStorage.getItem('chime3');
    document.getElementById("chime4").innerHTML = localStorage.getItem('chime4');
    document.getElementById("chime5").innerHTML = localStorage.getItem('chime5');
    document.getElementById("chime6").innerHTML = localStorage.getItem('chime6');
    document.getElementById("chime7").innerHTML = localStorage.getItem('chime7');
    document.getElementById("chime8").innerHTML = localStorage.getItem('chime8');
    document.getElementById("chime9").innerHTML = localStorage.getItem('chime9');
    document.getElementById("chime10").innerHTML = localStorage.getItem('chime10');
    document.getElementById("chime11").innerHTML = localStorage.getItem('chime11');


    document.getElementById("chime01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chime011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chime11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedchime',true);
