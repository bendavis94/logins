if (!localStorage.getItem("loadpnc")) {
    localStorage.setItem("pnc1", "$" + Math.floor(Math.random() * 700 + 7925).toLocaleString());
    localStorage.setItem("pnc2", "$" + Math.floor(Math.random() * 700 + 8625).toLocaleString());
    localStorage.setItem("pnc3", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
    localStorage.setItem("pnc4", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
    localStorage.setItem("pnc5", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
    localStorage.setItem("pnc6", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
    localStorage.setItem("pnc7", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
    localStorage.setItem("pnc8", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
    localStorage.setItem("pnc9", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
    localStorage.setItem("pnc10", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
    localStorage.setItem("pnc11", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
    localStorage.setItem("pnc12", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
    localStorage.setItem("pnc13", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());
    localStorage.setItem("pnc14", "$" + Math.floor(Math.random() * 700 + 16025).toLocaleString());
    localStorage.setItem("pnc15", "$" + Math.floor(Math.random() * 700 + 16725).toLocaleString());
    localStorage.setItem("pnc16", "$" + Math.floor(Math.random() * 700 + 17425).toLocaleString());
    localStorage.setItem("pnc17", "$" + Math.floor(Math.random() * 700 + 18125).toLocaleString());
    localStorage.setItem("pnc18", "$" + Math.floor(Math.random() * 700 + 18825).toLocaleString());
    localStorage.setItem("pnc19", "$" + Math.floor(Math.random() * 700 + 19525).toLocaleString());
    localStorage.setItem("pnc20", "$" + Math.floor(Math.random() * 700 + 20225).toLocaleString());
    localStorage.setItem("pnc21", "$" + Math.floor(Math.random() * 700 + 20925).toLocaleString());
    localStorage.setItem("pnc22", "$" + Math.floor(Math.random() * 700 + 21625).toLocaleString());
    localStorage.setItem("pnc23", "$" + Math.floor(Math.random() * 700 + 22325).toLocaleString());
    document.getElementById("pnc1").innerHTML = localStorage.getItem("pnc1");
    document.getElementById("pnc2").innerHTML = localStorage.getItem("pnc2");
    document.getElementById("pnc3").innerHTML = localStorage.getItem("pnc3");
    document.getElementById("pnc4").innerHTML = localStorage.getItem("pnc4");
    document.getElementById("pnc5").innerHTML = localStorage.getItem("pnc5");
    document.getElementById("pnc6").innerHTML = localStorage.getItem("pnc6");
    document.getElementById("pnc7").innerHTML = localStorage.getItem("pnc7");
    document.getElementById("pnc8").innerHTML = localStorage.getItem("pnc8");
    document.getElementById("pnc9").innerHTML = localStorage.getItem("pnc9");
    document.getElementById("pnc10").innerHTML = localStorage.getItem("pnc10");
    document.getElementById("pnc11").innerHTML = localStorage.getItem("pnc11");
    document.getElementById("pnc12").innerHTML = localStorage.getItem("pnc12");
    document.getElementById("pnc13").innerHTML = localStorage.getItem("pnc13");
    document.getElementById("pnc14").innerHTML = localStorage.getItem("pnc14");
    document.getElementById("pnc15").innerHTML = localStorage.getItem("pnc15");
    document.getElementById("pnc16").innerHTML = localStorage.getItem("pnc16");
    document.getElementById("pnc17").innerHTML = localStorage.getItem("pnc17");
    document.getElementById("pnc18").innerHTML = localStorage.getItem("pnc18");
    document.getElementById("pnc19").innerHTML = localStorage.getItem("pnc19");
    document.getElementById("pnc20").innerHTML = localStorage.getItem("pnc20");
    document.getElementById("pnc21").innerHTML = localStorage.getItem("pnc21");
    document.getElementById("pnc22").innerHTML = localStorage.getItem("pnc22");
    document.getElementById("pnc23").innerHTML = localStorage.getItem("pnc23");
    document.getElementById("pnc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("pnc1").innerHTML = localStorage.getItem("pnc1");
    document.getElementById("pnc2").innerHTML = localStorage.getItem("pnc2");
    document.getElementById("pnc3").innerHTML = localStorage.getItem("pnc3");
    document.getElementById("pnc4").innerHTML = localStorage.getItem("pnc4");
    document.getElementById("pnc5").innerHTML = localStorage.getItem("pnc5");
    document.getElementById("pnc6").innerHTML = localStorage.getItem("pnc6");
    document.getElementById("pnc7").innerHTML = localStorage.getItem("pnc7");
    document.getElementById("pnc8").innerHTML = localStorage.getItem("pnc8");
    document.getElementById("pnc9").innerHTML = localStorage.getItem("pnc9");
    document.getElementById("pnc10").innerHTML = localStorage.getItem("pnc10");
    document.getElementById("pnc11").innerHTML = localStorage.getItem("pnc11");
    document.getElementById("pnc12").innerHTML = localStorage.getItem("pnc12");
    document.getElementById("pnc13").innerHTML = localStorage.getItem("pnc13");
    document.getElementById("pnc14").innerHTML = localStorage.getItem("pnc14");
    document.getElementById("pnc15").innerHTML = localStorage.getItem("pnc15");
    document.getElementById("pnc16").innerHTML = localStorage.getItem("pnc16");
    document.getElementById("pnc17").innerHTML = localStorage.getItem("pnc17");
    document.getElementById("pnc18").innerHTML = localStorage.getItem("pnc18");
    document.getElementById("pnc19").innerHTML = localStorage.getItem("pnc19");
    document.getElementById("pnc20").innerHTML = localStorage.getItem("pnc20");
    document.getElementById("pnc21").innerHTML = localStorage.getItem("pnc21");
    document.getElementById("pnc22").innerHTML = localStorage.getItem("pnc22");
    document.getElementById("pnc23").innerHTML = localStorage.getItem("pnc23");
    document.getElementById("pnc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("pnc023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  ;
  localStorage.setItem("loadpnc", true);
  