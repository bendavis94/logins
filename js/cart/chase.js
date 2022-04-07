if(!localStorage.getItem('loadedchase')){
    localStorage.setItem('chase1', ('$' + (Math.floor((Math.random() * 3000) + 11025)).toLocaleString()));
    localStorage.setItem('chase2', ('$' + (Math.floor((Math.random() * 3000) + 14025)).toLocaleString()));
    localStorage.setItem('chase3', ('$' + (Math.floor((Math.random() * 3000) + 17025)).toLocaleString()));
    localStorage.setItem('chase4', ('$' + (Math.floor((Math.random() * 3000) + 20025)).toLocaleString()));
    localStorage.setItem('chase5', ('$' + (Math.floor((Math.random() * 3000) + 23025)).toLocaleString()));
    localStorage.setItem('chase6', ('$' + (Math.floor((Math.random() * 3000) + 26025)).toLocaleString()));
    localStorage.setItem('chase7', ('$' + (Math.floor((Math.random() * 3000) + 29025)).toLocaleString()));
    localStorage.setItem('chase8', ('$' + (Math.floor((Math.random() * 3000) + 32025)).toLocaleString()));
    localStorage.setItem('chase9', ('$' + (Math.floor((Math.random() * 3000) + 35025)).toLocaleString()));
    localStorage.setItem('chase10', ('$' + (Math.floor((Math.random() * 3000) + 38025)).toLocaleString()));
    localStorage.setItem('chase11', ('$' + (Math.floor((Math.random() * 3000) + 41025)).toLocaleString()));
    localStorage.setItem('chase12', ('$' + (Math.floor((Math.random() * 3000) + 44025)).toLocaleString()));
    localStorage.setItem('chase13', ('$' + (Math.floor((Math.random() * 3000) + 47025)).toLocaleString()));

    document.getElementById("chase1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chase2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chase3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chase4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chase5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chase6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chase7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chase8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chase9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chase10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chase11").innerHTML = localStorage.getItem('chase11');
    document.getElementById("chase12").innerHTML = localStorage.getItem('chase12');
    document.getElementById("chase13").innerHTML = localStorage.getItem('chase13');


    document.getElementById("chase01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("chase1").innerHTML = localStorage.getItem('chase1');
    document.getElementById("chase2").innerHTML = localStorage.getItem('chase2');
    document.getElementById("chase3").innerHTML = localStorage.getItem('chase3');
    document.getElementById("chase4").innerHTML = localStorage.getItem('chase4');
    document.getElementById("chase5").innerHTML = localStorage.getItem('chase5');
    document.getElementById("chase6").innerHTML = localStorage.getItem('chase6');
    document.getElementById("chase7").innerHTML = localStorage.getItem('chase7');
    document.getElementById("chase8").innerHTML = localStorage.getItem('chase8');
    document.getElementById("chase9").innerHTML = localStorage.getItem('chase9');
    document.getElementById("chase10").innerHTML = localStorage.getItem('chase10');
    document.getElementById("chase11").innerHTML = localStorage.getItem('chase11');
    document.getElementById("chase12").innerHTML = localStorage.getItem('chase12');
    document.getElementById("chase13").innerHTML = localStorage.getItem('chase13');


    document.getElementById("chase01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("chase013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('chase13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedchase',true);
