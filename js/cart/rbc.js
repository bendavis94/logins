if (!localStorage.getItem("loadedrbc")) {
    localStorage.setItem("rbc1", "$" + Math.floor(Math.random() * 700 + 5025).toLocaleString());
    localStorage.setItem("rbc2", "$" + Math.floor(Math.random() * 700 + 5725).toLocaleString());
    localStorage.setItem("rbc3", "$" + Math.floor(Math.random() * 700 + 6425).toLocaleString());
    localStorage.setItem("rbc4", "$" + Math.floor(Math.random() * 700 + 7125).toLocaleString());
    localStorage.setItem("rbc5", "$" + Math.floor(Math.random() * 700 + 7825).toLocaleString());
    localStorage.setItem("rbc6", "$" + Math.floor(Math.random() * 700 + 8525).toLocaleString());
    localStorage.setItem("rbc7", "$" + Math.floor(Math.random() * 700 + 9225).toLocaleString());
    localStorage.setItem("rbc8", "$" + Math.floor(Math.random() * 700 + 9925).toLocaleString());
    localStorage.setItem("rbc9", "$" + Math.floor(Math.random() * 700 + 10625).toLocaleString());
    localStorage.setItem("rbc10", "$" + Math.floor(Math.random() * 700 + 11325).toLocaleString());
    localStorage.setItem("rbc11", "$" + Math.floor(Math.random() * 700 + 12025).toLocaleString());
    localStorage.setItem("rbc12", "$" + Math.floor(Math.random() * 700 + 12725).toLocaleString());
    localStorage.setItem("rbc13", "$" + Math.floor(Math.random() * 700 + 13425).toLocaleString());
    localStorage.setItem("rbc14", "$" + Math.floor(Math.random() * 700 + 14125).toLocaleString());
    localStorage.setItem("rbc15", "$" + Math.floor(Math.random() * 700 + 14825).toLocaleString());
    localStorage.setItem("rbc16", "$" + Math.floor(Math.random() * 700 + 15525).toLocaleString());
    localStorage.setItem("rbc17", "$" + Math.floor(Math.random() * 700 + 16225).toLocaleString());
    localStorage.setItem("rbc18", "$" + Math.floor(Math.random() * 700 + 16925).toLocaleString());
    localStorage.setItem("rbc19", "$" + Math.floor(Math.random() * 700 + 17625).toLocaleString());
    localStorage.setItem("rbc20", "$" + Math.floor(Math.random() * 700 + 18325).toLocaleString());
    localStorage.setItem("rbc21", "$" + Math.floor(Math.random() * 700 + 19025).toLocaleString());

    document.getElementById("rbc1").innerHTML = localStorage.getItem("rbc1");
    document.getElementById("rbc2").innerHTML = localStorage.getItem("rbc2");
    document.getElementById("rbc3").innerHTML = localStorage.getItem("rbc3");
    document.getElementById("rbc4").innerHTML = localStorage.getItem("rbc4");
    document.getElementById("rbc5").innerHTML = localStorage.getItem("rbc5");
    document.getElementById("rbc6").innerHTML = localStorage.getItem("rbc6");
    document.getElementById("rbc7").innerHTML = localStorage.getItem("rbc7");
    document.getElementById("rbc8").innerHTML = localStorage.getItem("rbc8");
    document.getElementById("rbc9").innerHTML = localStorage.getItem("rbc9");
    document.getElementById("rbc10").innerHTML = localStorage.getItem("rbc10");
    document.getElementById("rbc11").innerHTML = localStorage.getItem("rbc11");
    document.getElementById("rbc12").innerHTML = localStorage.getItem("rbc12");
    document.getElementById("rbc13").innerHTML = localStorage.getItem("rbc13");
    document.getElementById("rbc14").innerHTML = localStorage.getItem("rbc14");
    document.getElementById("rbc15").innerHTML = localStorage.getItem("rbc15");
    document.getElementById("rbc16").innerHTML = localStorage.getItem("rbc16");
    document.getElementById("rbc17").innerHTML = localStorage.getItem("rbc17");
    document.getElementById("rbc18").innerHTML = localStorage.getItem("rbc18");
    document.getElementById("rbc19").innerHTML = localStorage.getItem("rbc19");
    document.getElementById("rbc20").innerHTML = localStorage.getItem("rbc20");
    document.getElementById("rbc21").innerHTML = localStorage.getItem("rbc21");

    document.getElementById("rbc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc1").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc2").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc3").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc4").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc5").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc6").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc7").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc8").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc9").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc10").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc11").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc12").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc13").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc14").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc15").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc16").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc17").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc18").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc19").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc20").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc21").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();

  } else {
    document.getElementById("rbc1").innerHTML = localStorage.getItem("rbc1");
    document.getElementById("rbc2").innerHTML = localStorage.getItem("rbc2");
    document.getElementById("rbc3").innerHTML = localStorage.getItem("rbc3");
    document.getElementById("rbc4").innerHTML = localStorage.getItem("rbc4");
    document.getElementById("rbc5").innerHTML = localStorage.getItem("rbc5");
    document.getElementById("rbc6").innerHTML = localStorage.getItem("rbc6");
    document.getElementById("rbc7").innerHTML = localStorage.getItem("rbc7");
    document.getElementById("rbc8").innerHTML = localStorage.getItem("rbc8");
    document.getElementById("rbc9").innerHTML = localStorage.getItem("rbc9");
    document.getElementById("rbc10").innerHTML = localStorage.getItem("rbc10");
    document.getElementById("rbc11").innerHTML = localStorage.getItem("rbc11");
    document.getElementById("rbc12").innerHTML = localStorage.getItem("rbc12");
    document.getElementById("rbc13").innerHTML = localStorage.getItem("rbc13");
    document.getElementById("rbc14").innerHTML = localStorage.getItem("rbc14");
    document.getElementById("rbc15").innerHTML = localStorage.getItem("rbc15");
    document.getElementById("rbc16").innerHTML = localStorage.getItem("rbc16");
    document.getElementById("rbc17").innerHTML = localStorage.getItem("rbc17");
    document.getElementById("rbc18").innerHTML = localStorage.getItem("rbc18");
    document.getElementById("rbc19").innerHTML = localStorage.getItem("rbc19");
    document.getElementById("rbc20").innerHTML = localStorage.getItem("rbc20");
    document.getElementById("rbc21").innerHTML = localStorage.getItem("rbc21");

    document.getElementById("rbc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc1").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc2").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc3").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc4").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc5").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc6").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc7").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc8").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc9").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc10").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc11").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc12").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc13").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc14").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc15").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc16").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc17").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc18").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc19").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc20").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();
    document.getElementById("rbc021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("rbc21").replace("$", "").replace(",", "") / 50).toFixed(0)).toLocaleString();

  }

  localStorage.setItem("loadedrbc", true);
  