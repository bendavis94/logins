if(!localStorage.getItem('loadedfund')){
    localStorage.setItem('fund1', ('$' + (Math.floor((Math.random() * 700) + 5025)).toLocaleString()));
    localStorage.setItem('fund2', ('$' + (Math.floor((Math.random() * 700) + 5725)).toLocaleString()));
    localStorage.setItem('fund3', ('$' + (Math.floor((Math.random() * 700) + 6425)).toLocaleString()));
    localStorage.setItem('fund4', ('$' + (Math.floor((Math.random() * 700) + 7125)).toLocaleString()));
    localStorage.setItem('fund5', ('$' + (Math.floor((Math.random() * 700) + 7825)).toLocaleString()));
    localStorage.setItem('fund6', ('$' + (Math.floor((Math.random() * 700) + 8525)).toLocaleString()));
    localStorage.setItem('fund7', ('$' + (Math.floor((Math.random() * 700) + 9225)).toLocaleString()));
    localStorage.setItem('fund8', ('$' + (Math.floor((Math.random() * 700) + 9925)).toLocaleString()));
    localStorage.setItem('fund9', ('$' + (Math.floor((Math.random() * 700) + 10625)).toLocaleString()));
    localStorage.setItem('fund10', ('$' + (Math.floor((Math.random() * 700) + 11325)).toLocaleString()));
    localStorage.setItem('fund11', ('$' + (Math.floor((Math.random() * 700) + 12025)).toLocaleString()));
    localStorage.setItem('fund12', ('$' + (Math.floor((Math.random() * 700) + 12725)).toLocaleString()));
    localStorage.setItem('fund13', ('$' + (Math.floor((Math.random() * 700) + 13425)).toLocaleString()));
    localStorage.setItem('fund14', ('$' + (Math.floor((Math.random() * 700) + 14125)).toLocaleString()));
    localStorage.setItem('fund15', ('$' + (Math.floor((Math.random() * 700) + 14825)).toLocaleString()));
    localStorage.setItem('fund16', ('$' + (Math.floor((Math.random() * 700) + 15525)).toLocaleString()));
    localStorage.setItem('fund17', ('$' + (Math.floor((Math.random() * 700) + 16225)).toLocaleString()));
    localStorage.setItem('fund18', ('$' + (Math.floor((Math.random() * 700) + 16925)).toLocaleString()));
    localStorage.setItem('fund19', ('$' + (Math.floor((Math.random() * 700) + 17625)).toLocaleString()));
    localStorage.setItem('fund20', ('$' + (Math.floor((Math.random() * 700) + 18325)).toLocaleString()));
    localStorage.setItem('fund21', ('$' + (Math.floor((Math.random() * 700) + 19025)).toLocaleString()));
    localStorage.setItem('fund22', ('$' + (Math.floor((Math.random() * 700) + 19725)).toLocaleString()));
    localStorage.setItem('fund23', ('$' + (Math.floor((Math.random() * 700) + 20425)).toLocaleString()));
    localStorage.setItem('fund24', ('$' + (Math.floor((Math.random() * 700) + 21125)).toLocaleString()));
    localStorage.setItem('fund25', ('$' + (Math.floor((Math.random() * 700) + 22825)).toLocaleString()));
    localStorage.setItem('fund26', ('$' + (Math.floor((Math.random() * 700) + 22525)).toLocaleString()));
    localStorage.setItem('fund27', ('$' + (Math.floor((Math.random() * 700) + 23225)).toLocaleString()));



    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');
    document.getElementById("fund9").innerHTML = localStorage.getItem('fund9');
    document.getElementById("fund10").innerHTML = localStorage.getItem('fund10');

    document.getElementById("fund11").innerHTML = localStorage.getItem('fund11');
    document.getElementById("fund12").innerHTML = localStorage.getItem('fund12');
    document.getElementById("fund13").innerHTML = localStorage.getItem('fund13');
    document.getElementById("fund14").innerHTML = localStorage.getItem('fund14');
    document.getElementById("fund15").innerHTML = localStorage.getItem('fund15');
    document.getElementById("fund16").innerHTML = localStorage.getItem('fund16');
    document.getElementById("fund17").innerHTML = localStorage.getItem('fund17');
    document.getElementById("fund18").innerHTML = localStorage.getItem('fund18');
    document.getElementById("fund19").innerHTML = localStorage.getItem('fund19');
    document.getElementById("fund20").innerHTML = localStorage.getItem('fund20');
    document.getElementById("fund21").innerHTML = localStorage.getItem('fund21');
    document.getElementById("fund22").innerHTML = localStorage.getItem('fund22');
    document.getElementById("fund23").innerHTML = localStorage.getItem('fund23');
    document.getElementById("fund24").innerHTML = localStorage.getItem('fund24');
    document.getElementById("fund25").innerHTML = localStorage.getItem('fund25');
    document.getElementById("fund26").innerHTML = localStorage.getItem('fund26');
    document.getElementById("fund27").innerHTML = localStorage.getItem('fund27');


    document.getElementById("fund01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

    document.getElementById("fund011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund024").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund24').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund025").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund25').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund026").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund26').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund027").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund27').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

} else{
    document.getElementById("fund1").innerHTML = localStorage.getItem('fund1');
    document.getElementById("fund2").innerHTML = localStorage.getItem('fund2');
    document.getElementById("fund3").innerHTML = localStorage.getItem('fund3');
    document.getElementById("fund4").innerHTML = localStorage.getItem('fund4');
    document.getElementById("fund5").innerHTML = localStorage.getItem('fund5');
    document.getElementById("fund6").innerHTML = localStorage.getItem('fund6');
    document.getElementById("fund7").innerHTML = localStorage.getItem('fund7');
    document.getElementById("fund8").innerHTML = localStorage.getItem('fund8');
    document.getElementById("fund9").innerHTML = localStorage.getItem('fund9');
    document.getElementById("fund10").innerHTML = localStorage.getItem('fund10');

    document.getElementById("fund11").innerHTML = localStorage.getItem('fund11');
    document.getElementById("fund12").innerHTML = localStorage.getItem('fund12');
    document.getElementById("fund13").innerHTML = localStorage.getItem('fund13');
    document.getElementById("fund14").innerHTML = localStorage.getItem('fund14');
    document.getElementById("fund15").innerHTML = localStorage.getItem('fund15');
    document.getElementById("fund16").innerHTML = localStorage.getItem('fund16');
    document.getElementById("fund17").innerHTML = localStorage.getItem('fund17');
    document.getElementById("fund18").innerHTML = localStorage.getItem('fund18');
    document.getElementById("fund19").innerHTML = localStorage.getItem('fund19');
    document.getElementById("fund20").innerHTML = localStorage.getItem('fund20');
    document.getElementById("fund21").innerHTML = localStorage.getItem('fund21');
    document.getElementById("fund22").innerHTML = localStorage.getItem('fund22');
    document.getElementById("fund23").innerHTML = localStorage.getItem('fund23');
    document.getElementById("fund24").innerHTML = localStorage.getItem('fund24');
    document.getElementById("fund25").innerHTML = localStorage.getItem('fund25');
    document.getElementById("fund26").innerHTML = localStorage.getItem('fund26');
    document.getElementById("fund27").innerHTML = localStorage.getItem('fund27');


    document.getElementById("fund01").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund1').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund02").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund2').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund03").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund3').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund04").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund4').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund05").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund5').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund06").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund6').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund07").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund7').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund08").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund8').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund09").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund9').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund010").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund10').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

    document.getElementById("fund011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund024").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund24').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund025").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund25').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund026").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund26').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("fund027").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('fund27').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();

}

localStorage.setItem('loadedfund',true);
