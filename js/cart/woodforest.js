if (!localStorage.getItem("loadwood")) {
    localStorage.setItem("wood1", "$" + Math.floor(Math.random() * 700 + 2025).toLocaleString());
    localStorage.setItem("wood2", "$" + Math.floor(Math.random() * 700 + 2725).toLocaleString());
    localStorage.setItem("wood3", "$" + Math.floor(Math.random() * 700 + 3425).toLocaleString());
    localStorage.setItem("wood4", "$" + Math.floor(Math.random() * 700 + 4125).toLocaleString());
    localStorage.setItem("wood5", "$" + Math.floor(Math.random() * 700 + 4825).toLocaleString());
    localStorage.setItem("wood6", "$" + Math.floor(Math.random() * 700 + 5525).toLocaleString());
    localStorage.setItem("wood7", "$" + Math.floor(Math.random() * 700 + 6225).toLocaleString());
    localStorage.setItem("wood8", "$" + Math.floor(Math.random() * 700 + 7925).toLocaleString());
    localStorage.setItem("wood9", "$" + Math.floor(Math.random() * 700 + 8625).toLocaleString());
    localStorage.setItem("wood10", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
    localStorage.setItem("wood11", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
    localStorage.setItem("wood12", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
    localStorage.setItem("wood13", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
    localStorage.setItem("wood14", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
    localStorage.setItem("wood15", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
    localStorage.setItem("wood16", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
    localStorage.setItem("wood17", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
    localStorage.setItem("wood18", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
    localStorage.setItem("wood19", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
    localStorage.setItem("wood20", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());

    document.getElementById("wood1").innerHTML = localStorage.getItem("wood1");
    document.getElementById("wood2").innerHTML = localStorage.getItem("wood2");
    document.getElementById("wood3").innerHTML = localStorage.getItem("wood3");
    document.getElementById("wood4").innerHTML = localStorage.getItem("wood4");
    document.getElementById("wood5").innerHTML = localStorage.getItem("wood5");
    document.getElementById("wood6").innerHTML = localStorage.getItem("wood6");
    document.getElementById("wood7").innerHTML = localStorage.getItem("wood7");
    document.getElementById("wood8").innerHTML = localStorage.getItem("wood8");
    document.getElementById("wood9").innerHTML = localStorage.getItem("wood9");
    document.getElementById("wood10").innerHTML = localStorage.getItem("wood10");
    document.getElementById("wood11").innerHTML = localStorage.getItem("wood11");
    document.getElementById("wood12").innerHTML = localStorage.getItem("wood12");
    document.getElementById("wood13").innerHTML = localStorage.getItem("wood13");
    document.getElementById("wood14").innerHTML = localStorage.getItem("wood14");
    document.getElementById("wood15").innerHTML = localStorage.getItem("wood15");
    document.getElementById("wood16").innerHTML = localStorage.getItem("wood16");
    document.getElementById("wood17").innerHTML = localStorage.getItem("wood17");
    document.getElementById("wood18").innerHTML = localStorage.getItem("wood18");
    document.getElementById("wood19").innerHTML = localStorage.getItem("wood19");
    document.getElementById("wood20").innerHTML = localStorage.getItem("wood20");
    document.getElementById("wood01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("wood1").innerHTML = localStorage.getItem("wood1");
    document.getElementById("wood2").innerHTML = localStorage.getItem("wood2");
    document.getElementById("wood3").innerHTML = localStorage.getItem("wood3");
    document.getElementById("wood4").innerHTML = localStorage.getItem("wood4");
    document.getElementById("wood5").innerHTML = localStorage.getItem("wood5");
    document.getElementById("wood6").innerHTML = localStorage.getItem("wood6");
    document.getElementById("wood7").innerHTML = localStorage.getItem("wood7");
    document.getElementById("wood8").innerHTML = localStorage.getItem("wood8");
    document.getElementById("wood9").innerHTML = localStorage.getItem("wood9");
    document.getElementById("wood10").innerHTML = localStorage.getItem("wood10");
    document.getElementById("wood11").innerHTML = localStorage.getItem("wood11");
    document.getElementById("wood12").innerHTML = localStorage.getItem("wood12");
    document.getElementById("wood13").innerHTML = localStorage.getItem("wood13");
    document.getElementById("wood14").innerHTML = localStorage.getItem("wood14");
    document.getElementById("wood15").innerHTML = localStorage.getItem("wood15");
    document.getElementById("wood16").innerHTML = localStorage.getItem("wood16");
    document.getElementById("wood17").innerHTML = localStorage.getItem("wood17");
    document.getElementById("wood18").innerHTML = localStorage.getItem("wood18");
    document.getElementById("wood19").innerHTML = localStorage.getItem("wood19");
    document.getElementById("wood20").innerHTML = localStorage.getItem("wood20");
    document.getElementById("wood01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("wood020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  ;
  localStorage.setItem("loadwood", true);
  