if (!localStorage.getItem("loadednfcu")) {
  localStorage.setItem("nfcu1", "$" + Math.floor(Math.random() * 700 + 2025).toLocaleString());
  localStorage.setItem("nfcu2", "$" + Math.floor(Math.random() * 700 + 2725).toLocaleString());
  localStorage.setItem("nfcu3", "$" + Math.floor(Math.random() * 700 + 3425).toLocaleString());
  localStorage.setItem("nfcu4", "$" + Math.floor(Math.random() * 700 + 4125).toLocaleString());
  localStorage.setItem("nfcu5", "$" + Math.floor(Math.random() * 700 + 4825).toLocaleString());
  localStorage.setItem("nfcu6", "$" + Math.floor(Math.random() * 700 + 5525).toLocaleString());
  localStorage.setItem("nfcu7", "$" + Math.floor(Math.random() * 700 + 6225).toLocaleString());
  localStorage.setItem("nfcu8", "$" + Math.floor(Math.random() * 700 + 6925).toLocaleString());
  localStorage.setItem("nfcu9", "$" + Math.floor(Math.random() * 700 + 7625).toLocaleString());
  localStorage.setItem("nfcu10", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
  localStorage.setItem("nfcu11", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
  localStorage.setItem("nfcu12", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
  localStorage.setItem("nfcu13", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
  localStorage.setItem("nfcu14", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
  localStorage.setItem("nfcu15", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
  localStorage.setItem("nfcu16", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
  localStorage.setItem("nfcu17", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
  localStorage.setItem("nfcu18", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
  localStorage.setItem("nfcu19", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
  localStorage.setItem("nfcu20", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());
  localStorage.setItem("nfcu21", "$" + Math.floor(Math.random() * 700 + 16025).toLocaleString());


    document.getElementById("nfcu1").innerHTML = localStorage.getItem("nfcu1");
    document.getElementById("nfcu2").innerHTML = localStorage.getItem("nfcu2");
    document.getElementById("nfcu3").innerHTML = localStorage.getItem("nfcu3");
    document.getElementById("nfcu4").innerHTML = localStorage.getItem("nfcu4");
    document.getElementById("nfcu5").innerHTML = localStorage.getItem("nfcu5");
    document.getElementById("nfcu6").innerHTML = localStorage.getItem("nfcu6");
    document.getElementById("nfcu7").innerHTML = localStorage.getItem("nfcu7");
    document.getElementById("nfcu8").innerHTML = localStorage.getItem("nfcu8");
    document.getElementById("nfcu9").innerHTML = localStorage.getItem("nfcu9");
    document.getElementById("nfcu10").innerHTML = localStorage.getItem("nfcu10");
    document.getElementById("nfcu11").innerHTML = localStorage.getItem("nfcu11");
    document.getElementById("nfcu12").innerHTML = localStorage.getItem("nfcu12");
    document.getElementById("nfcu13").innerHTML = localStorage.getItem("nfcu13");
    document.getElementById("nfcu14").innerHTML = localStorage.getItem("nfcu14");
    document.getElementById("nfcu15").innerHTML = localStorage.getItem("nfcu15");
    document.getElementById("nfcu16").innerHTML = localStorage.getItem("nfcu16");
    document.getElementById("nfcu17").innerHTML = localStorage.getItem("nfcu17");
    document.getElementById("nfcu18").innerHTML = localStorage.getItem("nfcu18");
    document.getElementById("nfcu19").innerHTML = localStorage.getItem("nfcu19");
    document.getElementById("nfcu20").innerHTML = localStorage.getItem("nfcu20");
    document.getElementById("nfcu21").innerHTML = localStorage.getItem("nfcu21");

    document.getElementById("nfcu01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();

  } else {
    document.getElementById("nfcu1").innerHTML = localStorage.getItem("nfcu1");
    document.getElementById("nfcu2").innerHTML = localStorage.getItem("nfcu2");
    document.getElementById("nfcu3").innerHTML = localStorage.getItem("nfcu3");
    document.getElementById("nfcu4").innerHTML = localStorage.getItem("nfcu4");
    document.getElementById("nfcu5").innerHTML = localStorage.getItem("nfcu5");
    document.getElementById("nfcu6").innerHTML = localStorage.getItem("nfcu6");
    document.getElementById("nfcu7").innerHTML = localStorage.getItem("nfcu7");
    document.getElementById("nfcu8").innerHTML = localStorage.getItem("nfcu8");
    document.getElementById("nfcu9").innerHTML = localStorage.getItem("nfcu9");
    document.getElementById("nfcu10").innerHTML = localStorage.getItem("nfcu10");
    document.getElementById("nfcu11").innerHTML = localStorage.getItem("nfcu11");
    document.getElementById("nfcu12").innerHTML = localStorage.getItem("nfcu12");
    document.getElementById("nfcu13").innerHTML = localStorage.getItem("nfcu13");
    document.getElementById("nfcu14").innerHTML = localStorage.getItem("nfcu14");
    document.getElementById("nfcu15").innerHTML = localStorage.getItem("nfcu15");
    document.getElementById("nfcu16").innerHTML = localStorage.getItem("nfcu16");
    document.getElementById("nfcu17").innerHTML = localStorage.getItem("nfcu17");
    document.getElementById("nfcu18").innerHTML = localStorage.getItem("nfcu18");
    document.getElementById("nfcu19").innerHTML = localStorage.getItem("nfcu19");
    document.getElementById("nfcu20").innerHTML = localStorage.getItem("nfcu20");
    document.getElementById("nfcu21").innerHTML = localStorage.getItem("nfcu21");

    document.getElementById("nfcu01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("nfcu021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();

  }

  localStorage.setItem("loadednfcu", true);
  