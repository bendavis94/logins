if(!localStorage.getItem('loadedbar')){
    localStorage.setItem('barclays1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('barclays2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('barclays3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('barclays4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('barclays5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('barclays6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('barclays7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('barclays8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('barclays9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('barclays10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));

    document.getElementById("barclays1").innerHTML = localStorage.getItem('barclays1');
    document.getElementById("barclays2").innerHTML = localStorage.getItem('barclays2');
    document.getElementById("barclays3").innerHTML = localStorage.getItem('barclays3');
    document.getElementById("barclays4").innerHTML = localStorage.getItem('barclays4');
    document.getElementById("barclays5").innerHTML = localStorage.getItem('barclays5');
    document.getElementById("barclays6").innerHTML = localStorage.getItem('barclays6');
    document.getElementById("barclays7").innerHTML = localStorage.getItem('barclays7');
    document.getElementById("barclays8").innerHTML = localStorage.getItem('barclays8');
    document.getElementById("barclays9").innerHTML = localStorage.getItem('barclays9');
    document.getElementById("barclays10").innerHTML = localStorage.getItem('barclays10');


    document.getElementById("barclays01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
} else{
    document.getElementById("barclays1").innerHTML = localStorage.getItem('barclays1');
    document.getElementById("barclays2").innerHTML = localStorage.getItem('barclays2');
    document.getElementById("barclays3").innerHTML = localStorage.getItem('barclays3');
    document.getElementById("barclays4").innerHTML = localStorage.getItem('barclays4');
    document.getElementById("barclays5").innerHTML = localStorage.getItem('barclays5');
    document.getElementById("barclays6").innerHTML = localStorage.getItem('barclays6');
    document.getElementById("barclays7").innerHTML = localStorage.getItem('barclays7');
    document.getElementById("barclays8").innerHTML = localStorage.getItem('barclays8');
    document.getElementById("barclays9").innerHTML = localStorage.getItem('barclays9');
    document.getElementById("barclays10").innerHTML = localStorage.getItem('barclays10');


    document.getElementById("barclays01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedbar',true);
