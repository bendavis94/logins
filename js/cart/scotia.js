if (!localStorage.getItem("loadeddscotia")) {
    localStorage.setItem("scotia1", "$" + Math.floor(Math.random() * 700 + 5025).toLocaleString());
    localStorage.setItem("scotia2", "$" + Math.floor(Math.random() * 700 + 5725).toLocaleString());
    localStorage.setItem("scotia3", "$" + Math.floor(Math.random() * 700 + 6425).toLocaleString());
    localStorage.setItem("scotia4", "$" + Math.floor(Math.random() * 700 + 7125).toLocaleString());
    localStorage.setItem("scotia5", "$" + Math.floor(Math.random() * 700 + 7825).toLocaleString());
    localStorage.setItem("scotia6", "$" + Math.floor(Math.random() * 700 + 8525).toLocaleString());
    localStorage.setItem("scotia7", "$" + Math.floor(Math.random() * 700 + 9225).toLocaleString());
    localStorage.setItem("scotia8", "$" + Math.floor(Math.random() * 700 + 9925).toLocaleString());
    localStorage.setItem("scotia9", "$" + Math.floor(Math.random() * 700 + 10625).toLocaleString());
    localStorage.setItem("scotia10", "$" + Math.floor(Math.random() * 700 + 11325).toLocaleString());
    localStorage.setItem("scotia11", "$" + Math.floor(Math.random() * 700 + 12025).toLocaleString());
    localStorage.setItem("scotia12", "$" + Math.floor(Math.random() * 700 + 12725).toLocaleString());
    localStorage.setItem("scotia13", "$" + Math.floor(Math.random() * 700 + 13425).toLocaleString());
    localStorage.setItem("scotia14", "$" + Math.floor(Math.random() * 700 + 14125).toLocaleString());
    localStorage.setItem("scotia15", "$" + Math.floor(Math.random() * 700 + 14825).toLocaleString());
    localStorage.setItem("scotia16", "$" + Math.floor(Math.random() * 700 + 15525).toLocaleString());
    localStorage.setItem("scotia17", "$" + Math.floor(Math.random() * 700 + 16225).toLocaleString());

    document.getElementById("scotia1").innerHTML = localStorage.getItem("scotia1");
    document.getElementById("scotia2").innerHTML = localStorage.getItem("scotia2");
    document.getElementById("scotia3").innerHTML = localStorage.getItem("scotia3");
    document.getElementById("scotia4").innerHTML = localStorage.getItem("scotia4");
    document.getElementById("scotia5").innerHTML = localStorage.getItem("scotia5");
    document.getElementById("scotia6").innerHTML = localStorage.getItem("scotia6");
    document.getElementById("scotia7").innerHTML = localStorage.getItem("scotia7");
    document.getElementById("scotia8").innerHTML = localStorage.getItem("scotia8");
    document.getElementById("scotia9").innerHTML = localStorage.getItem("scotia9");
    document.getElementById("scotia10").innerHTML = localStorage.getItem("scotia10");
    document.getElementById("scotia11").innerHTML = localStorage.getItem("scotia11");
    document.getElementById("scotia12").innerHTML = localStorage.getItem("scotia12");
    document.getElementById("scotia13").innerHTML = localStorage.getItem("scotia13");
    document.getElementById("scotia14").innerHTML = localStorage.getItem("scotia14");
    document.getElementById("scotia15").innerHTML = localStorage.getItem("scotia15");
    document.getElementById("scotia16").innerHTML = localStorage.getItem("scotia16");
    document.getElementById("scotia17").innerHTML = localStorage.getItem("scotia17");

    document.getElementById("scotia01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();

  } else {
    document.getElementById("scotia1").innerHTML = localStorage.getItem("scotia1");
    document.getElementById("scotia2").innerHTML = localStorage.getItem("scotia2");
    document.getElementById("scotia3").innerHTML = localStorage.getItem("scotia3");
    document.getElementById("scotia4").innerHTML = localStorage.getItem("scotia4");
    document.getElementById("scotia5").innerHTML = localStorage.getItem("scotia5");
    document.getElementById("scotia6").innerHTML = localStorage.getItem("scotia6");
    document.getElementById("scotia7").innerHTML = localStorage.getItem("scotia7");
    document.getElementById("scotia8").innerHTML = localStorage.getItem("scotia8");
    document.getElementById("scotia9").innerHTML = localStorage.getItem("scotia9");
    document.getElementById("scotia10").innerHTML = localStorage.getItem("scotia10");
    document.getElementById("scotia11").innerHTML = localStorage.getItem("scotia11");
    document.getElementById("scotia12").innerHTML = localStorage.getItem("scotia12");
    document.getElementById("scotia13").innerHTML = localStorage.getItem("scotia13");
    document.getElementById("scotia14").innerHTML = localStorage.getItem("scotia14");
    document.getElementById("scotia15").innerHTML = localStorage.getItem("scotia15");
    document.getElementById("scotia16").innerHTML = localStorage.getItem("scotia16");
    document.getElementById("scotia17").innerHTML = localStorage.getItem("scotia17");

    document.getElementById("scotia01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("scotia017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("scotia17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();

  }

  localStorage.setItem("loadedscotia", true);
  