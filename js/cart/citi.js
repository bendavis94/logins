if (!localStorage.getItem("loadedciti")) {
  localStorage.setItem("citi1", "$" + Math.floor(Math.random() * 700 + 2025).toLocaleString());
  localStorage.setItem("citi2", "$" + Math.floor(Math.random() * 700 + 2725).toLocaleString());
  localStorage.setItem("citi3", "$" + Math.floor(Math.random() * 700 + 3425).toLocaleString());
  localStorage.setItem("citi4", "$" + Math.floor(Math.random() * 700 + 4125).toLocaleString());
  localStorage.setItem("citi5", "$" + Math.floor(Math.random() * 700 + 4825).toLocaleString());
  localStorage.setItem("citi6", "$" + Math.floor(Math.random() * 700 + 5525).toLocaleString());
  localStorage.setItem("citi7", "$" + Math.floor(Math.random() * 700 + 6225).toLocaleString());
  localStorage.setItem("citi8", "$" + Math.floor(Math.random() * 700 + 7925).toLocaleString());
  localStorage.setItem("citi9", "$" + Math.floor(Math.random() * 700 + 8625).toLocaleString());
  localStorage.setItem("citi10", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
  localStorage.setItem("citi11", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
  localStorage.setItem("citi12", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
  localStorage.setItem("citi13", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
  localStorage.setItem("citi14", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
  localStorage.setItem("citi15", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
  localStorage.setItem("citi16", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
  localStorage.setItem("citi17", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
  localStorage.setItem("citi18", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
  localStorage.setItem("citi19", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
  localStorage.setItem("citi20", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());
  localStorage.setItem("citi21", "$" + Math.floor(Math.random() * 700 + 16025).toLocaleString());
  localStorage.setItem("citi22", "$" + Math.floor(Math.random() * 700 + 16725).toLocaleString());
  localStorage.setItem("citi23", "$" + Math.floor(Math.random() * 700 + 17425).toLocaleString());
  localStorage.setItem("citi24", "$" + Math.floor(Math.random() * 700 + 18125).toLocaleString());
  localStorage.setItem("citi25", "$" + Math.floor(Math.random() * 700 + 19825).toLocaleString());
  localStorage.setItem("citi26", "$" + Math.floor(Math.random() * 700 + 19525).toLocaleString());
  localStorage.setItem("citi27", "$" + Math.floor(Math.random() * 700 + 20225).toLocaleString());

    document.getElementById("citi1").innerHTML = localStorage.getItem("citi1");
    document.getElementById("citi2").innerHTML = localStorage.getItem("citi2");
    document.getElementById("citi3").innerHTML = localStorage.getItem("citi3");
    document.getElementById("citi4").innerHTML = localStorage.getItem("citi4");
    document.getElementById("citi5").innerHTML = localStorage.getItem("citi5");
    document.getElementById("citi6").innerHTML = localStorage.getItem("citi6");
    document.getElementById("citi7").innerHTML = localStorage.getItem("citi7");
    document.getElementById("citi8").innerHTML = localStorage.getItem("citi8");
    document.getElementById("citi9").innerHTML = localStorage.getItem("citi9");
    document.getElementById("citi10").innerHTML = localStorage.getItem("citi10");
    document.getElementById("citi11").innerHTML = localStorage.getItem("citi11");
    document.getElementById("citi12").innerHTML = localStorage.getItem("citi12");
    document.getElementById("citi13").innerHTML = localStorage.getItem("citi13");
    document.getElementById("citi14").innerHTML = localStorage.getItem("citi14");
    document.getElementById("citi15").innerHTML = localStorage.getItem("citi15");
    document.getElementById("citi16").innerHTML = localStorage.getItem("citi16");
    document.getElementById("citi17").innerHTML = localStorage.getItem("citi17");
    document.getElementById("citi18").innerHTML = localStorage.getItem("citi18");
    document.getElementById("citi19").innerHTML = localStorage.getItem("citi19");
    document.getElementById("citi20").innerHTML = localStorage.getItem("citi20");
    document.getElementById("citi21").innerHTML = localStorage.getItem("citi21");
    document.getElementById("citi22").innerHTML = localStorage.getItem("citi22");
    document.getElementById("citi23").innerHTML = localStorage.getItem("citi23");
    document.getElementById("citi24").innerHTML = localStorage.getItem("citi24");
    document.getElementById("citi25").innerHTML = localStorage.getItem("citi25");
    document.getElementById("citi26").innerHTML = localStorage.getItem("citi26");
    document.getElementById("citi27").innerHTML = localStorage.getItem("citi27");
    document.getElementById("citi01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi027").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi27").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("citi1").innerHTML = localStorage.getItem("citi1");
    document.getElementById("citi2").innerHTML = localStorage.getItem("citi2");
    document.getElementById("citi3").innerHTML = localStorage.getItem("citi3");
    document.getElementById("citi4").innerHTML = localStorage.getItem("citi4");
    document.getElementById("citi5").innerHTML = localStorage.getItem("citi5");
    document.getElementById("citi6").innerHTML = localStorage.getItem("citi6");
    document.getElementById("citi7").innerHTML = localStorage.getItem("citi7");
    document.getElementById("citi8").innerHTML = localStorage.getItem("citi8");
    document.getElementById("citi9").innerHTML = localStorage.getItem("citi9");
    document.getElementById("citi10").innerHTML = localStorage.getItem("citi10");
    document.getElementById("citi11").innerHTML = localStorage.getItem("citi11");
    document.getElementById("citi12").innerHTML = localStorage.getItem("citi12");
    document.getElementById("citi13").innerHTML = localStorage.getItem("citi13");
    document.getElementById("citi14").innerHTML = localStorage.getItem("citi14");
    document.getElementById("citi15").innerHTML = localStorage.getItem("citi15");
    document.getElementById("citi16").innerHTML = localStorage.getItem("citi16");
    document.getElementById("citi17").innerHTML = localStorage.getItem("citi17");
    document.getElementById("citi18").innerHTML = localStorage.getItem("citi18");
    document.getElementById("citi19").innerHTML = localStorage.getItem("citi19");
    document.getElementById("citi20").innerHTML = localStorage.getItem("citi20");
    document.getElementById("citi21").innerHTML = localStorage.getItem("citi21");
    document.getElementById("citi22").innerHTML = localStorage.getItem("citi22");
    document.getElementById("citi23").innerHTML = localStorage.getItem("citi23");
    document.getElementById("citi24").innerHTML = localStorage.getItem("citi24");
    document.getElementById("citi25").innerHTML = localStorage.getItem("citi25");
    document.getElementById("citi26").innerHTML = localStorage.getItem("citi26");
    document.getElementById("citi27").innerHTML = localStorage.getItem("citi27");
    document.getElementById("citi01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("citi027").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("citi27").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  ;
  ;
  ;
  localStorage.setItem("loadedciti", true);
  