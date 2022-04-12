if(!localStorage.getItem('loadedscotia')){
    localStorage.setItem('scotia1', ('$' + (Math.floor((Math.random() * 2000) + 5025)).toLocaleString()));
    localStorage.setItem('scotia2', ('$' + (Math.floor((Math.random() * 2000) + 7025)).toLocaleString()));
    localStorage.setItem('scotia3', ('$' + (Math.floor((Math.random() * 2000) + 9025)).toLocaleString()));
    localStorage.setItem('scotia4', ('$' + (Math.floor((Math.random() * 2000) + 11025)).toLocaleString()));
    localStorage.setItem('scotia5', ('$' + (Math.floor((Math.random() * 2000) + 13025)).toLocaleString()));
    localStorage.setItem('scotia6', ('$' + (Math.floor((Math.random() * 2000) + 15025)).toLocaleString()));
    localStorage.setItem('scotia7', ('$' + (Math.floor((Math.random() * 2000) + 17025)).toLocaleString()));
    localStorage.setItem('scotia8', ('$' + (Math.floor((Math.random() * 2000) + 19025)).toLocaleString()));

    document.getElementById("scotia1").innerHTML = localStorage.getItem('scotia1');
    document.getElementById("scotia2").innerHTML = localStorage.getItem('scotia2');
    document.getElementById("scotia3").innerHTML = localStorage.getItem('scotia3');
    document.getElementById("scotia4").innerHTML = localStorage.getItem('scotia4');
    document.getElementById("scotia5").innerHTML = localStorage.getItem('scotia5');
    document.getElementById("scotia6").innerHTML = localStorage.getItem('scotia6');
    document.getElementById("scotia7").innerHTML = localStorage.getItem('scotia7');
    document.getElementById("scotia8").innerHTML = localStorage.getItem('scotia8');

    document.getElementById("scotia01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("scotia1").innerHTML = localStorage.getItem('scotia1');
    document.getElementById("scotia2").innerHTML = localStorage.getItem('scotia2');
    document.getElementById("scotia3").innerHTML = localStorage.getItem('scotia3');
    document.getElementById("scotia4").innerHTML = localStorage.getItem('scotia4');
    document.getElementById("scotia5").innerHTML = localStorage.getItem('scotia5');
    document.getElementById("scotia6").innerHTML = localStorage.getItem('scotia6');
    document.getElementById("scotia7").innerHTML = localStorage.getItem('scotia7');
    document.getElementById("scotia8").innerHTML = localStorage.getItem('scotia8');

    document.getElementById("scotia01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("scotia08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('scotia8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedscotia',true);
