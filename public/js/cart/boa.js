if (!localStorage.getItem("loadedboa")) {
    localStorage.setItem("boa1", "$" + Math.floor(Math.random() * 700 + 2025).toLocaleString());
    localStorage.setItem("boa2", "$" + Math.floor(Math.random() * 700 + 2725).toLocaleString());
    localStorage.setItem("boa3", "$" + Math.floor(Math.random() * 700 + 3425).toLocaleString());
    localStorage.setItem("boa4", "$" + Math.floor(Math.random() * 700 + 4125).toLocaleString());
    localStorage.setItem("boa5", "$" + Math.floor(Math.random() * 700 + 4825).toLocaleString());
    localStorage.setItem("boa6", "$" + Math.floor(Math.random() * 700 + 5525).toLocaleString());
    localStorage.setItem("boa7", "$" + Math.floor(Math.random() * 700 + 6225).toLocaleString());
    localStorage.setItem("boa8", "$" + Math.floor(Math.random() * 700 + 7925).toLocaleString());
    localStorage.setItem("boa9", "$" + Math.floor(Math.random() * 700 + 8625).toLocaleString());
    localStorage.setItem("boa10", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
    localStorage.setItem("boa11", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
    localStorage.setItem("boa12", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
    localStorage.setItem("boa13", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
    localStorage.setItem("boa14", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
    localStorage.setItem("boa15", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
    localStorage.setItem("boa16", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
    localStorage.setItem("boa17", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
    localStorage.setItem("boa18", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
    localStorage.setItem("boa19", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
    localStorage.setItem("boa20", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());
    localStorage.setItem("boa21", "$" + Math.floor(Math.random() * 700 + 16025).toLocaleString());
    document.getElementById("boa1").innerHTML = localStorage.getItem("boa1");
    document.getElementById("boa2").innerHTML = localStorage.getItem("boa2");
    document.getElementById("boa3").innerHTML = localStorage.getItem("boa3");
    document.getElementById("boa4").innerHTML = localStorage.getItem("boa4");
    document.getElementById("boa5").innerHTML = localStorage.getItem("boa5");
    document.getElementById("boa6").innerHTML = localStorage.getItem("boa6");
    document.getElementById("boa7").innerHTML = localStorage.getItem("boa7");
    document.getElementById("boa8").innerHTML = localStorage.getItem("boa8");
    document.getElementById("boa9").innerHTML = localStorage.getItem("boa9");
    document.getElementById("boa10").innerHTML = localStorage.getItem("boa10");
    document.getElementById("boa11").innerHTML = localStorage.getItem("boa11");
    document.getElementById("boa12").innerHTML = localStorage.getItem("boa12");
    document.getElementById("boa13").innerHTML = localStorage.getItem("boa13");
    document.getElementById("boa14").innerHTML = localStorage.getItem("boa14");
    document.getElementById("boa15").innerHTML = localStorage.getItem("boa15");
    document.getElementById("boa16").innerHTML = localStorage.getItem("boa16");
    document.getElementById("boa17").innerHTML = localStorage.getItem("boa17");
    document.getElementById("boa18").innerHTML = localStorage.getItem("boa18");
    document.getElementById("boa19").innerHTML = localStorage.getItem("boa19");
    document.getElementById("boa20").innerHTML = localStorage.getItem("boa20");
    document.getElementById("boa21").innerHTML = localStorage.getItem("boa21");
    document.getElementById("boa01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("boa1").innerHTML = localStorage.getItem("boa1");
    document.getElementById("boa2").innerHTML = localStorage.getItem("boa2");
    document.getElementById("boa3").innerHTML = localStorage.getItem("boa3");
    document.getElementById("boa4").innerHTML = localStorage.getItem("boa4");
    document.getElementById("boa5").innerHTML = localStorage.getItem("boa5");
    document.getElementById("boa6").innerHTML = localStorage.getItem("boa6");
    document.getElementById("boa7").innerHTML = localStorage.getItem("boa7");
    document.getElementById("boa8").innerHTML = localStorage.getItem("boa8");
    document.getElementById("boa9").innerHTML = localStorage.getItem("boa9");
    document.getElementById("boa10").innerHTML = localStorage.getItem("boa10");
    document.getElementById("boa11").innerHTML = localStorage.getItem("boa11");
    document.getElementById("boa12").innerHTML = localStorage.getItem("boa12");
    document.getElementById("boa13").innerHTML = localStorage.getItem("boa13");
    document.getElementById("boa14").innerHTML = localStorage.getItem("boa14");
    document.getElementById("boa15").innerHTML = localStorage.getItem("boa15");
    document.getElementById("boa16").innerHTML = localStorage.getItem("boa16");
    document.getElementById("boa17").innerHTML = localStorage.getItem("boa17");
    document.getElementById("boa18").innerHTML = localStorage.getItem("boa18");
    document.getElementById("boa19").innerHTML = localStorage.getItem("boa19");
    document.getElementById("boa20").innerHTML = localStorage.getItem("boa20");
    document.getElementById("boa21").innerHTML = localStorage.getItem("boa21");
    document.getElementById("boa01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("boa021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("boa21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  ;
  localStorage.setItem("loadedboa", true);
  