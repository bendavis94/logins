if (!localStorage.getItem("loadtruist")) {
    localStorage.setItem("truist1", "$" + Math.floor(Math.random() * 700 + 3425).toLocaleString());
    localStorage.setItem("truist2", "$" + Math.floor(Math.random() * 700 + 4125).toLocaleString());
    localStorage.setItem("truist3", "$" + Math.floor(Math.random() * 700 + 4825).toLocaleString());
    localStorage.setItem("truist4", "$" + Math.floor(Math.random() * 700 + 5525).toLocaleString());
    localStorage.setItem("truist5", "$" + Math.floor(Math.random() * 700 + 6225).toLocaleString());
    localStorage.setItem("truist6", "$" + Math.floor(Math.random() * 700 + 6925).toLocaleString());
    localStorage.setItem("truist7", "$" + Math.floor(Math.random() * 700 + 7625).toLocaleString());
    localStorage.setItem("truist8", "$" + Math.floor(Math.random() * 700 + 8325).toLocaleString());
    localStorage.setItem("truist9", "$" + Math.floor(Math.random() * 700 + 9025).toLocaleString());
    localStorage.setItem("truist10", "$" + Math.floor(Math.random() * 700 + 9725).toLocaleString());
    localStorage.setItem("truist11", "$" + Math.floor(Math.random() * 700 + 10425).toLocaleString());
    localStorage.setItem("truist12", "$" + Math.floor(Math.random() * 700 + 11125).toLocaleString());
    localStorage.setItem("truist13", "$" + Math.floor(Math.random() * 700 + 11825).toLocaleString());
    localStorage.setItem("truist14", "$" + Math.floor(Math.random() * 700 + 12525).toLocaleString());
    localStorage.setItem("truist15", "$" + Math.floor(Math.random() * 700 + 13225).toLocaleString());
    localStorage.setItem("truist16", "$" + Math.floor(Math.random() * 700 + 13925).toLocaleString());
    localStorage.setItem("truist17", "$" + Math.floor(Math.random() * 700 + 14625).toLocaleString());
    localStorage.setItem("truist18", "$" + Math.floor(Math.random() * 700 + 15325).toLocaleString());
    localStorage.setItem("truist19", "$" + Math.floor(Math.random() * 700 + 16025).toLocaleString());
    localStorage.setItem("truist20", "$" + Math.floor(Math.random() * 700 + 16725).toLocaleString());
    localStorage.setItem("truist21", "$" + Math.floor(Math.random() * 700 + 17425).toLocaleString());
    localStorage.setItem("truist22", "$" + Math.floor(Math.random() * 700 + 18125).toLocaleString());
    document.getElementById("truist1").innerHTML = localStorage.getItem("truist1");
    document.getElementById("truist2").innerHTML = localStorage.getItem("truist2");
    document.getElementById("truist3").innerHTML = localStorage.getItem("truist3");
    document.getElementById("truist4").innerHTML = localStorage.getItem("truist4");
    document.getElementById("truist5").innerHTML = localStorage.getItem("truist5");
    document.getElementById("truist6").innerHTML = localStorage.getItem("truist6");
    document.getElementById("truist7").innerHTML = localStorage.getItem("truist7");
    document.getElementById("truist8").innerHTML = localStorage.getItem("truist8");
    document.getElementById("truist9").innerHTML = localStorage.getItem("truist9");
    document.getElementById("truist10").innerHTML = localStorage.getItem("truist10");
    document.getElementById("truist11").innerHTML = localStorage.getItem("truist11");
    document.getElementById("truist12").innerHTML = localStorage.getItem("truist12");
    document.getElementById("truist13").innerHTML = localStorage.getItem("truist13");
    document.getElementById("truist14").innerHTML = localStorage.getItem("truist14");
    document.getElementById("truist15").innerHTML = localStorage.getItem("truist15");
    document.getElementById("truist16").innerHTML = localStorage.getItem("truist16");
    document.getElementById("truist17").innerHTML = localStorage.getItem("truist17");
    document.getElementById("truist18").innerHTML = localStorage.getItem("truist18");
    document.getElementById("truist19").innerHTML = localStorage.getItem("truist19");
    document.getElementById("truist20").innerHTML = localStorage.getItem("truist20");
    document.getElementById("truist21").innerHTML = localStorage.getItem("truist21");
    document.getElementById("truist22").innerHTML = localStorage.getItem("truist22");
    document.getElementById("truist01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("truist1").innerHTML = localStorage.getItem("truist1");
    document.getElementById("truist2").innerHTML = localStorage.getItem("truist2");
    document.getElementById("truist3").innerHTML = localStorage.getItem("truist3");
    document.getElementById("truist4").innerHTML = localStorage.getItem("truist4");
    document.getElementById("truist5").innerHTML = localStorage.getItem("truist5");
    document.getElementById("truist6").innerHTML = localStorage.getItem("truist6");
    document.getElementById("truist7").innerHTML = localStorage.getItem("truist7");
    document.getElementById("truist8").innerHTML = localStorage.getItem("truist8");
    document.getElementById("truist9").innerHTML = localStorage.getItem("truist9");
    document.getElementById("truist10").innerHTML = localStorage.getItem("truist10");
    document.getElementById("truist11").innerHTML = localStorage.getItem("truist11");
    document.getElementById("truist12").innerHTML = localStorage.getItem("truist12");
    document.getElementById("truist13").innerHTML = localStorage.getItem("truist13");
    document.getElementById("truist14").innerHTML = localStorage.getItem("truist14");
    document.getElementById("truist15").innerHTML = localStorage.getItem("truist15");
    document.getElementById("truist16").innerHTML = localStorage.getItem("truist16");
    document.getElementById("truist17").innerHTML = localStorage.getItem("truist17");
    document.getElementById("truist18").innerHTML = localStorage.getItem("truist18");
    document.getElementById("truist19").innerHTML = localStorage.getItem("truist19");
    document.getElementById("truist20").innerHTML = localStorage.getItem("truist20");
    document.getElementById("truist21").innerHTML = localStorage.getItem("truist21");
    document.getElementById("truist22").innerHTML = localStorage.getItem("truist22");
    document.getElementById("truist01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("truist022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("truist22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  ;
  localStorage.setItem("loadtruist", true);
  