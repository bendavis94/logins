if (!localStorage.getItem("loadedbbva")) {
    localStorage.setItem("bbva1", "$" + Math.floor(Math.random() * 700 + 5025).toLocaleString());
    localStorage.setItem("bbva2", "$" + Math.floor(Math.random() * 700 + 5725).toLocaleString());
    localStorage.setItem("bbva3", "$" + Math.floor(Math.random() * 700 + 6425).toLocaleString());
    localStorage.setItem("bbva4", "$" + Math.floor(Math.random() * 700 + 7125).toLocaleString());
    localStorage.setItem("bbva5", "$" + Math.floor(Math.random() * 700 + 7825).toLocaleString());
    localStorage.setItem("bbva6", "$" + Math.floor(Math.random() * 700 + 8525).toLocaleString());
    localStorage.setItem("bbva7", "$" + Math.floor(Math.random() * 700 + 9225).toLocaleString());
    localStorage.setItem("bbva8", "$" + Math.floor(Math.random() * 700 + 9925).toLocaleString());
    localStorage.setItem("bbva9", "$" + Math.floor(Math.random() * 700 + 10625).toLocaleString());
    localStorage.setItem("bbva10", "$" + Math.floor(Math.random() * 700 + 11325).toLocaleString());
    localStorage.setItem("bbva11", "$" + Math.floor(Math.random() * 700 + 12025).toLocaleString());
    localStorage.setItem("bbva12", "$" + Math.floor(Math.random() * 700 + 12725).toLocaleString());
    localStorage.setItem("bbva13", "$" + Math.floor(Math.random() * 700 + 13425).toLocaleString());
    localStorage.setItem("bbva14", "$" + Math.floor(Math.random() * 700 + 14125).toLocaleString());
    localStorage.setItem("bbva15", "$" + Math.floor(Math.random() * 700 + 14825).toLocaleString());
    localStorage.setItem("bbva16", "$" + Math.floor(Math.random() * 700 + 15525).toLocaleString());
    localStorage.setItem("bbva17", "$" + Math.floor(Math.random() * 700 + 16225).toLocaleString());
    localStorage.setItem("bbva18", "$" + Math.floor(Math.random() * 700 + 16925).toLocaleString());
    localStorage.setItem("bbva19", "$" + Math.floor(Math.random() * 700 + 17625).toLocaleString());
    localStorage.setItem("bbva20", "$" + Math.floor(Math.random() * 700 + 18325).toLocaleString());
    localStorage.setItem("bbva21", "$" + Math.floor(Math.random() * 700 + 19025).toLocaleString());
    localStorage.setItem("bbva22", "$" + Math.floor(Math.random() * 700 + 19725).toLocaleString());
    localStorage.setItem("bbva23", "$" + Math.floor(Math.random() * 700 + 20425).toLocaleString());
    localStorage.setItem("bbva24", "$" + Math.floor(Math.random() * 700 + 21125).toLocaleString());


    document.getElementById("bbva1").innerHTML = localStorage.getItem("bbva1");
    document.getElementById("bbva2").innerHTML = localStorage.getItem("bbva2");
    document.getElementById("bbva3").innerHTML = localStorage.getItem("bbva3");
    document.getElementById("bbva4").innerHTML = localStorage.getItem("bbva4");
    document.getElementById("bbva5").innerHTML = localStorage.getItem("bbva5");
    document.getElementById("bbva6").innerHTML = localStorage.getItem("bbva6");
    document.getElementById("bbva7").innerHTML = localStorage.getItem("bbva7");
    document.getElementById("bbva8").innerHTML = localStorage.getItem("bbva8");
    document.getElementById("bbva9").innerHTML = localStorage.getItem("bbva9");
    document.getElementById("bbva10").innerHTML = localStorage.getItem("bbva10");
    document.getElementById("bbva11").innerHTML = localStorage.getItem("bbva11");
    document.getElementById("bbva12").innerHTML = localStorage.getItem("bbva12");
    document.getElementById("bbva13").innerHTML = localStorage.getItem("bbva13");
    document.getElementById("bbva14").innerHTML = localStorage.getItem("bbva14");
    document.getElementById("bbva15").innerHTML = localStorage.getItem("bbva15");
    document.getElementById("bbva16").innerHTML = localStorage.getItem("bbva16");
    document.getElementById("bbva17").innerHTML = localStorage.getItem("bbva17");
    document.getElementById("bbva18").innerHTML = localStorage.getItem("bbva18");
    document.getElementById("bbva19").innerHTML = localStorage.getItem("bbva19");
    document.getElementById("bbva20").innerHTML = localStorage.getItem("bbva20");
    document.getElementById("bbva21").innerHTML = localStorage.getItem("bbva21");
    document.getElementById("bbva22").innerHTML = localStorage.getItem("bbva22");
    document.getElementById("bbva23").innerHTML = localStorage.getItem("bbva23");
    document.getElementById("bbva24").innerHTML = localStorage.getItem("bbva24");
    document.getElementById("bbva01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("bbva1").innerHTML = localStorage.getItem("bbva1");
    document.getElementById("bbva2").innerHTML = localStorage.getItem("bbva2");
    document.getElementById("bbva3").innerHTML = localStorage.getItem("bbva3");
    document.getElementById("bbva4").innerHTML = localStorage.getItem("bbva4");
    document.getElementById("bbva5").innerHTML = localStorage.getItem("bbva5");
    document.getElementById("bbva6").innerHTML = localStorage.getItem("bbva6");
    document.getElementById("bbva7").innerHTML = localStorage.getItem("bbva7");
    document.getElementById("bbva8").innerHTML = localStorage.getItem("bbva8");
    document.getElementById("bbva9").innerHTML = localStorage.getItem("bbva9");
    document.getElementById("bbva10").innerHTML = localStorage.getItem("bbva10");
    document.getElementById("bbva11").innerHTML = localStorage.getItem("bbva11");
    document.getElementById("bbva12").innerHTML = localStorage.getItem("bbva12");
    document.getElementById("bbva13").innerHTML = localStorage.getItem("bbva13");
    document.getElementById("bbva14").innerHTML = localStorage.getItem("bbva14");
    document.getElementById("bbva15").innerHTML = localStorage.getItem("bbva15");
    document.getElementById("bbva16").innerHTML = localStorage.getItem("bbva16");
    document.getElementById("bbva17").innerHTML = localStorage.getItem("bbva17");
    document.getElementById("bbva18").innerHTML = localStorage.getItem("bbva18");
    document.getElementById("bbva19").innerHTML = localStorage.getItem("bbva19");
    document.getElementById("bbva20").innerHTML = localStorage.getItem("bbva20");
    document.getElementById("bbva21").innerHTML = localStorage.getItem("bbva21");
    document.getElementById("bbva22").innerHTML = localStorage.getItem("bbva22");
    document.getElementById("bbva23").innerHTML = localStorage.getItem("bbva23");
    document.getElementById("bbva24").innerHTML = localStorage.getItem("bbva24");
    document.getElementById("bbva01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("bbva024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bbva24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  
  localStorage.setItem("loadedbbva", true);
  