if(!localStorage.getItem('loadedrbc')){
    localStorage.setItem('rbc1', ('$' + (Math.floor((Math.random() * 700) + 3025)).toLocaleString()));
    localStorage.setItem('rbc2', ('$' + (Math.floor((Math.random() * 700) + 3725)).toLocaleString()));
    localStorage.setItem('rbc3', ('$' + (Math.floor((Math.random() * 700) + 4425)).toLocaleString()));
    localStorage.setItem('rbc4', ('$' + (Math.floor((Math.random() * 700) + 5125)).toLocaleString()));
    localStorage.setItem('rbc5', ('$' + (Math.floor((Math.random() * 700) + 5825)).toLocaleString()));
    localStorage.setItem('rbc6', ('$' + (Math.floor((Math.random() * 700) + 6525)).toLocaleString()));
    localStorage.setItem('rbc7', ('$' + (Math.floor((Math.random() * 700) + 7225)).toLocaleString()));
    localStorage.setItem('rbc8', ('$' + (Math.floor((Math.random() * 700) + 7925)).toLocaleString()));
    localStorage.setItem('rbc9', ('$' + (Math.floor((Math.random() * 700) + 8625)).toLocaleString()));


    document.getElementById("rbc1").innerHTML = localStorage.getItem('rbc1');
    document.getElementById("rbc2").innerHTML = localStorage.getItem('rbc2');
    document.getElementById("rbc3").innerHTML = localStorage.getItem('rbc3');
    document.getElementById("rbc4").innerHTML = localStorage.getItem('rbc4');
    document.getElementById("rbc5").innerHTML = localStorage.getItem('rbc5');
    document.getElementById("rbc6").innerHTML = localStorage.getItem('rbc6');
    document.getElementById("rbc7").innerHTML = localStorage.getItem('rbc7');
    document.getElementById("rbc8").innerHTML = localStorage.getItem('rbc8');
    document.getElementById("rbc9").innerHTML = localStorage.getItem('rbc9');


    document.getElementById("rbc01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
} else{
    document.getElementById("rbc1").innerHTML = localStorage.getItem('rbc1');
    document.getElementById("rbc2").innerHTML = localStorage.getItem('rbc2');
    document.getElementById("rbc3").innerHTML = localStorage.getItem('rbc3');
    document.getElementById("rbc4").innerHTML = localStorage.getItem('rbc4');
    document.getElementById("rbc5").innerHTML = localStorage.getItem('rbc5');
    document.getElementById("rbc6").innerHTML = localStorage.getItem('rbc6');
    document.getElementById("rbc7").innerHTML = localStorage.getItem('rbc7');
    document.getElementById("rbc8").innerHTML = localStorage.getItem('rbc8');
    document.getElementById("rbc9").innerHTML = localStorage.getItem('rbc9');


    document.getElementById("rbc01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("rbc09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('rbc9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedrbc',true);
