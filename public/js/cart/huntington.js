if (!localStorage.getItem("loadhunt")) {
    localStorage.setItem("hunt1", "$" + Math.floor(Math.random() * 700 + 6025).toLocaleString());
    localStorage.setItem("hunt2", "$" + Math.floor(Math.random() * 700 + 6725).toLocaleString());
    localStorage.setItem("hunt3", "$" + Math.floor(Math.random() * 700 + 7425).toLocaleString());
    localStorage.setItem("hunt4", "$" + Math.floor(Math.random() * 700 + 8125).toLocaleString());
    localStorage.setItem("hunt5", "$" + Math.floor(Math.random() * 700 + 8825).toLocaleString());
    localStorage.setItem("hunt6", "$" + Math.floor(Math.random() * 700 + 9525).toLocaleString());
    localStorage.setItem("hunt7", "$" + Math.floor(Math.random() * 700 + 10225).toLocaleString());
    localStorage.setItem("hunt8", "$" + Math.floor(Math.random() * 700 + 10925).toLocaleString());
    localStorage.setItem("hunt9", "$" + Math.floor(Math.random() * 700 + 11625).toLocaleString());
    localStorage.setItem("hunt10", "$" + Math.floor(Math.random() * 700 + 12325).toLocaleString());
    localStorage.setItem("hunt11", "$" + Math.floor(Math.random() * 700 + 13025).toLocaleString());
    localStorage.setItem("hunt12", "$" + Math.floor(Math.random() * 700 + 13725).toLocaleString());
    localStorage.setItem("hunt13", "$" + Math.floor(Math.random() * 700 + 14425).toLocaleString());
    localStorage.setItem("hunt14", "$" + Math.floor(Math.random() * 700 + 15125).toLocaleString());
    localStorage.setItem("hunt15", "$" + Math.floor(Math.random() * 700 + 15825).toLocaleString());
    localStorage.setItem("hunt16", "$" + Math.floor(Math.random() * 700 + 16525).toLocaleString());
    localStorage.setItem("hunt17", "$" + Math.floor(Math.random() * 700 + 17225).toLocaleString());
    localStorage.setItem("hunt18", "$" + Math.floor(Math.random() * 700 + 17925).toLocaleString());
    localStorage.setItem("hunt19", "$" + Math.floor(Math.random() * 700 + 18625).toLocaleString());
    localStorage.setItem("hunt20", "$" + Math.floor(Math.random() * 700 + 19325).toLocaleString());
    localStorage.setItem("hunt21", "$" + Math.floor(Math.random() * 700 + 20025).toLocaleString());
    localStorage.setItem("hunt22", "$" + Math.floor(Math.random() * 700 + 20725).toLocaleString());
    localStorage.setItem("hunt23", "$" + Math.floor(Math.random() * 700 + 21425).toLocaleString());
    localStorage.setItem("hunt24", "$" + Math.floor(Math.random() * 700 + 22125).toLocaleString());
    localStorage.setItem("hunt25", "$" + Math.floor(Math.random() * 700 + 22825).toLocaleString());
    localStorage.setItem("hunt26", "$" + Math.floor(Math.random() * 700 + 23525).toLocaleString());
    localStorage.setItem("hunt27", "$" + Math.floor(Math.random() * 700 + 24225).toLocaleString());
    localStorage.setItem("hunt28", "$" + Math.floor(Math.random() * 700 + 25925).toLocaleString());

    document.getElementById("hunt1").innerHTML = localStorage.getItem("hunt1");
    document.getElementById("hunt2").innerHTML = localStorage.getItem("hunt2");
    document.getElementById("hunt3").innerHTML = localStorage.getItem("hunt3");
    document.getElementById("hunt4").innerHTML = localStorage.getItem("hunt4");
    document.getElementById("hunt5").innerHTML = localStorage.getItem("hunt5");
    document.getElementById("hunt6").innerHTML = localStorage.getItem("hunt6");
    document.getElementById("hunt7").innerHTML = localStorage.getItem("hunt7");
    document.getElementById("hunt8").innerHTML = localStorage.getItem("hunt8");
    document.getElementById("hunt9").innerHTML = localStorage.getItem("hunt9");
    document.getElementById("hunt10").innerHTML = localStorage.getItem("hunt10");
    document.getElementById("hunt11").innerHTML = localStorage.getItem("hunt11");
    document.getElementById("hunt12").innerHTML = localStorage.getItem("hunt12");
    document.getElementById("hunt13").innerHTML = localStorage.getItem("hunt13");
    document.getElementById("hunt14").innerHTML = localStorage.getItem("hunt14");
    document.getElementById("hunt15").innerHTML = localStorage.getItem("hunt15");
    document.getElementById("hunt16").innerHTML = localStorage.getItem("hunt16");
    document.getElementById("hunt17").innerHTML = localStorage.getItem("hunt17");
    document.getElementById("hunt18").innerHTML = localStorage.getItem("hunt18");
    document.getElementById("hunt19").innerHTML = localStorage.getItem("hunt19");
    document.getElementById("hunt20").innerHTML = localStorage.getItem("hunt20");
    document.getElementById("hunt21").innerHTML = localStorage.getItem("hunt21");
    document.getElementById("hunt22").innerHTML = localStorage.getItem("hunt22");
    document.getElementById("hunt23").innerHTML = localStorage.getItem("hunt23");
    document.getElementById("hunt24").innerHTML = localStorage.getItem("hunt24");
    document.getElementById("hunt25").innerHTML = localStorage.getItem("hunt25");
    document.getElementById("hunt26").innerHTML = localStorage.getItem("hunt26");
    document.getElementById("hunt27").innerHTML = localStorage.getItem("hunt27");
    document.getElementById("hunt28").innerHTML = localStorage.getItem("hunt28");
    document.getElementById("hunt01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt027").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt27").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt028").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt28").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("hunt1").innerHTML = localStorage.getItem("hunt1");
    document.getElementById("hunt2").innerHTML = localStorage.getItem("hunt2");
    document.getElementById("hunt3").innerHTML = localStorage.getItem("hunt3");
    document.getElementById("hunt4").innerHTML = localStorage.getItem("hunt4");
    document.getElementById("hunt5").innerHTML = localStorage.getItem("hunt5");
    document.getElementById("hunt6").innerHTML = localStorage.getItem("hunt6");
    document.getElementById("hunt7").innerHTML = localStorage.getItem("hunt7");
    document.getElementById("hunt8").innerHTML = localStorage.getItem("hunt8");
    document.getElementById("hunt9").innerHTML = localStorage.getItem("hunt9");
    document.getElementById("hunt10").innerHTML = localStorage.getItem("hunt10");
    document.getElementById("hunt11").innerHTML = localStorage.getItem("hunt11");
    document.getElementById("hunt12").innerHTML = localStorage.getItem("hunt12");
    document.getElementById("hunt13").innerHTML = localStorage.getItem("hunt13");
    document.getElementById("hunt14").innerHTML = localStorage.getItem("hunt14");
    document.getElementById("hunt15").innerHTML = localStorage.getItem("hunt15");
    document.getElementById("hunt16").innerHTML = localStorage.getItem("hunt16");
    document.getElementById("hunt17").innerHTML = localStorage.getItem("hunt17");
    document.getElementById("hunt18").innerHTML = localStorage.getItem("hunt18");
    document.getElementById("hunt19").innerHTML = localStorage.getItem("hunt19");
    document.getElementById("hunt20").innerHTML = localStorage.getItem("hunt20");
    document.getElementById("hunt21").innerHTML = localStorage.getItem("hunt21");
    document.getElementById("hunt22").innerHTML = localStorage.getItem("hunt22");
    document.getElementById("hunt23").innerHTML = localStorage.getItem("hunt23");
    document.getElementById("hunt24").innerHTML = localStorage.getItem("hunt24");
    document.getElementById("hunt25").innerHTML = localStorage.getItem("hunt25");
    document.getElementById("hunt26").innerHTML = localStorage.getItem("hunt26");
    document.getElementById("hunt27").innerHTML = localStorage.getItem("hunt27");
    document.getElementById("hunt28").innerHTML = localStorage.getItem("hunt28");
    document.getElementById("hunt01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt027").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt27").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("hunt028").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("hunt28").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  localStorage.setItem("loadhunt", true);
  