if(!localStorage.getItem('loadedbar')){
    localStorage.setItem('barclays1', ('$' + (Math.floor((Math.random() * 700) + 10025)).toLocaleString()));
    localStorage.setItem('barclays2', ('$' + (Math.floor((Math.random() * 700) + 10725)).toLocaleString()));
    localStorage.setItem('barclays3', ('$' + (Math.floor((Math.random() * 700) + 11425)).toLocaleString()));
    localStorage.setItem('barclays4', ('$' + (Math.floor((Math.random() * 700) + 12125)).toLocaleString()));
    localStorage.setItem('barclays5', ('$' + (Math.floor((Math.random() * 700) + 12825)).toLocaleString()));
    localStorage.setItem('barclays6', ('$' + (Math.floor((Math.random() * 700) + 13525)).toLocaleString()));
    localStorage.setItem('barclays7', ('$' + (Math.floor((Math.random() * 700) + 14225)).toLocaleString()));
    localStorage.setItem('barclays8', ('$' + (Math.floor((Math.random() * 700) + 14925)).toLocaleString()));
    localStorage.setItem('barclays9', ('$' + (Math.floor((Math.random() * 700) + 15625)).toLocaleString()));
    localStorage.setItem('barclays10', ('$' + (Math.floor((Math.random() * 700) + 16325)).toLocaleString()));
    localStorage.setItem('barclays11', ('$' + (Math.floor((Math.random() * 700) + 17025)).toLocaleString()));
    localStorage.setItem('barclays12', ('$' + (Math.floor((Math.random() * 700) + 17725)).toLocaleString()));
    localStorage.setItem('barclays13', ('$' + (Math.floor((Math.random() * 700) + 18425)).toLocaleString()));
    localStorage.setItem('barclays14', ('$' + (Math.floor((Math.random() * 700) + 19125)).toLocaleString()));
    localStorage.setItem('barclays15', ('$' + (Math.floor((Math.random() * 700) + 19825)).toLocaleString()));
    localStorage.setItem('barclays16', ('$' + (Math.floor((Math.random() * 700) + 20525)).toLocaleString()));
    localStorage.setItem('barclays17', ('$' + (Math.floor((Math.random() * 700) + 21225)).toLocaleString()));
    localStorage.setItem('barclays18', ('$' + (Math.floor((Math.random() * 700) + 21925)).toLocaleString()));
    localStorage.setItem('barclays19', ('$' + (Math.floor((Math.random() * 700) + 22625)).toLocaleString()));
    localStorage.setItem('barclays20', ('$' + (Math.floor((Math.random() * 700) + 23325)).toLocaleString()));
    localStorage.setItem('barclays21', ('$' + (Math.floor((Math.random() * 700) + 24025)).toLocaleString()));
    localStorage.setItem('barclays22', ('$' + (Math.floor((Math.random() * 700) + 24725)).toLocaleString()));
    localStorage.setItem('barclays23', ('$' + (Math.floor((Math.random() * 700) + 25425)).toLocaleString()));
    localStorage.setItem('barclays24', ('$' + (Math.floor((Math.random() * 700) + 26125)).toLocaleString()));
    localStorage.setItem('barclays25', ('$' + (Math.floor((Math.random() * 700) + 27825)).toLocaleString()));
    localStorage.setItem('barclays26', ('$' + (Math.floor((Math.random() * 700) + 27525)).toLocaleString()));
    localStorage.setItem('barclays27', ('$' + (Math.floor((Math.random() * 700) + 28225)).toLocaleString()));
    localStorage.setItem('barclays28', ('$' + (Math.floor((Math.random() * 700) + 28925)).toLocaleString()));
    localStorage.setItem('barclays29', ('$' + (Math.floor((Math.random() * 700) + 29625)).toLocaleString()));
    localStorage.setItem('barclays30', ('$' + (Math.floor((Math.random() * 700) + 30325)).toLocaleString()));


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

    document.getElementById("barclays11").innerHTML = localStorage.getItem('barclays11');
    document.getElementById("barclays12").innerHTML = localStorage.getItem('barclays12');
    document.getElementById("barclays13").innerHTML = localStorage.getItem('barclays13');
    document.getElementById("barclays14").innerHTML = localStorage.getItem('barclays14');
    document.getElementById("barclays15").innerHTML = localStorage.getItem('barclays15');
    document.getElementById("barclays16").innerHTML = localStorage.getItem('barclays16');
    document.getElementById("barclays17").innerHTML = localStorage.getItem('barclays17');
    document.getElementById("barclays18").innerHTML = localStorage.getItem('barclays18');
    document.getElementById("barclays19").innerHTML = localStorage.getItem('barclays19');
    document.getElementById("barclays20").innerHTML = localStorage.getItem('barclays20');
    document.getElementById("barclays21").innerHTML = localStorage.getItem('barclays21');
    document.getElementById("barclays22").innerHTML = localStorage.getItem('barclays22');
    document.getElementById("barclays23").innerHTML = localStorage.getItem('barclays23');
    document.getElementById("barclays24").innerHTML = localStorage.getItem('barclays24');
    document.getElementById("barclays25").innerHTML = localStorage.getItem('barclays25');
    document.getElementById("barclays26").innerHTML = localStorage.getItem('barclays26');
    document.getElementById("barclays27").innerHTML = localStorage.getItem('barclays27');
    document.getElementById("barclays28").innerHTML = localStorage.getItem('barclays28');
    document.getElementById("barclays29").innerHTML = localStorage.getItem('barclays29');
    document.getElementById("barclays30").innerHTML = localStorage.getItem('barclays30');



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

    document.getElementById("barclays011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays024").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays24').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays025").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays25').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays026").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays26').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays027").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays27').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays028").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays28').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays029").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays29').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays030").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays30').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
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

    document.getElementById("barclays11").innerHTML = localStorage.getItem('barclays11');
    document.getElementById("barclays12").innerHTML = localStorage.getItem('barclays12');
    document.getElementById("barclays13").innerHTML = localStorage.getItem('barclays13');
    document.getElementById("barclays14").innerHTML = localStorage.getItem('barclays14');
    document.getElementById("barclays15").innerHTML = localStorage.getItem('barclays15');
    document.getElementById("barclays16").innerHTML = localStorage.getItem('barclays16');
    document.getElementById("barclays17").innerHTML = localStorage.getItem('barclays17');
    document.getElementById("barclays18").innerHTML = localStorage.getItem('barclays18');
    document.getElementById("barclays19").innerHTML = localStorage.getItem('barclays19');
    document.getElementById("barclays20").innerHTML = localStorage.getItem('barclays20');
    document.getElementById("barclays21").innerHTML = localStorage.getItem('barclays21');
    document.getElementById("barclays22").innerHTML = localStorage.getItem('barclays22');
    document.getElementById("barclays23").innerHTML = localStorage.getItem('barclays23');
    document.getElementById("barclays24").innerHTML = localStorage.getItem('barclays24');
    document.getElementById("barclays25").innerHTML = localStorage.getItem('barclays25');
    document.getElementById("barclays26").innerHTML = localStorage.getItem('barclays26');
    document.getElementById("barclays27").innerHTML = localStorage.getItem('barclays27');
    document.getElementById("barclays28").innerHTML = localStorage.getItem('barclays28');
    document.getElementById("barclays29").innerHTML = localStorage.getItem('barclays29');
    document.getElementById("barclays30").innerHTML = localStorage.getItem('barclays30');



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

    document.getElementById("barclays011").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays11').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays012").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays12').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays013").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays13').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays014").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays14').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays015").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays15').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays016").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays16').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays017").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays17').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays018").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays18').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays019").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays19').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays020").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays20').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays021").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays21').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays022").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays22').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays023").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays23').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays024").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays24').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays025").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays25').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays026").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays26').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays027").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays27').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays028").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays28').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays029").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays29').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
    document.getElementById("barclays030").innerHTML = 'Buy: $' + parseFloat((localStorage.getItem('barclays30').replace('$','').replace(',','')/50).toFixed(0)).toLocaleString();
}

localStorage.setItem('loadedbar',true);