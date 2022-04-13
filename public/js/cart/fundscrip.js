if(!localStorage.getItem('loadedfund')){
    localStorage.setItem('fund1', ('$' + (Math.floor((Math.random() * 700) + 2025)).toLocaleString()));
    localStorage.setItem('fund2', ('$' + (Math.floor((Math.random() * 700) + 2725)).toLocaleString()));
    localStorage.setItem('fund3', ('$' + (Math.floor((Math.random() * 700) + 3425)).toLocaleString()));
    localStorage.setItem('fund4', ('$' + (Math.floor((Math.random() * 700) + 4125)).toLocaleString()));
    localStorage.setItem('fund5', ('$' + (Math.floor((Math.random() * 700) + 4825)).toLocaleString()));
    localStorage.setItem('fund6', ('$' + (Math.floor((Math.random() * 700) + 5525)).toLocaleString()));
    localStorage.setItem('fund7', ('$' + (Math.floor((Math.random() * 700) + 6225)).toLocaleString()));
    localStorage.setItem('fund8', ('$' + (Math.floor((Math.random() * 700) + 6925)).toLocaleString()));


    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');

    document.getElementById("fund01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
} else{
    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');

    document.getElementById("fund01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedfund',true);
