if (!localStorage.getItem("loadedchase")) {
    localStorage.setItem("chase1", "$" + Math.floor(Math.random() * 700 + 5025).toLocaleString());
    localStorage.setItem("chase2", "$" + Math.floor(Math.random() * 700 + 5725).toLocaleString());
    localStorage.setItem("chase3", "$" + Math.floor(Math.random() * 700 + 6425).toLocaleString());
    localStorage.setItem("chase4", "$" + Math.floor(Math.random() * 700 + 7125).toLocaleString());
    localStorage.setItem("chase5", "$" + Math.floor(Math.random() * 700 + 7825).toLocaleString());
    localStorage.setItem("chase6", "$" + Math.floor(Math.random() * 700 + 8525).toLocaleString());
    localStorage.setItem("chase7", "$" + Math.floor(Math.random() * 700 + 9225).toLocaleString());
    localStorage.setItem("chase8", "$" + Math.floor(Math.random() * 700 + 9925).toLocaleString());
    localStorage.setItem("chase9", "$" + Math.floor(Math.random() * 700 + 10625).toLocaleString());
    localStorage.setItem("chase10", "$" + Math.floor(Math.random() * 700 + 11325).toLocaleString());
    localStorage.setItem("chase11", "$" + Math.floor(Math.random() * 700 + 12025).toLocaleString());
    localStorage.setItem("chase12", "$" + Math.floor(Math.random() * 700 + 12725).toLocaleString());
    localStorage.setItem("chase13", "$" + Math.floor(Math.random() * 700 + 13425).toLocaleString());
    localStorage.setItem("chase14", "$" + Math.floor(Math.random() * 700 + 14125).toLocaleString());
    localStorage.setItem("chase15", "$" + Math.floor(Math.random() * 700 + 14825).toLocaleString());
    localStorage.setItem("chase16", "$" + Math.floor(Math.random() * 700 + 15525).toLocaleString());
    localStorage.setItem("chase17", "$" + Math.floor(Math.random() * 700 + 16225).toLocaleString());
    localStorage.setItem("chase18", "$" + Math.floor(Math.random() * 700 + 16925).toLocaleString());
    localStorage.setItem("chase19", "$" + Math.floor(Math.random() * 700 + 17625).toLocaleString());
    localStorage.setItem("chase20", "$" + Math.floor(Math.random() * 700 + 18325).toLocaleString());
    localStorage.setItem("chase21", "$" + Math.floor(Math.random() * 700 + 19025).toLocaleString());
    localStorage.setItem("chase22", "$" + Math.floor(Math.random() * 700 + 19725).toLocaleString());
    localStorage.setItem("chase23", "$" + Math.floor(Math.random() * 700 + 20425).toLocaleString());
    localStorage.setItem("chase24", "$" + Math.floor(Math.random() * 700 + 21125).toLocaleString());
    localStorage.setItem("chase25", "$" + Math.floor(Math.random() * 700 + 22825).toLocaleString());
    localStorage.setItem("chase26", "$" + Math.floor(Math.random() * 700 + 22525).toLocaleString());


    document.getElementById("chase1").innerHTML = localStorage.getItem("chase1");
    document.getElementById("chase2").innerHTML = localStorage.getItem("chase2");
    document.getElementById("chase3").innerHTML = localStorage.getItem("chase3");
    document.getElementById("chase4").innerHTML = localStorage.getItem("chase4");
    document.getElementById("chase5").innerHTML = localStorage.getItem("chase5");
    document.getElementById("chase6").innerHTML = localStorage.getItem("chase6");
    document.getElementById("chase7").innerHTML = localStorage.getItem("chase7");
    document.getElementById("chase8").innerHTML = localStorage.getItem("chase8");
    document.getElementById("chase9").innerHTML = localStorage.getItem("chase9");
    document.getElementById("chase10").innerHTML = localStorage.getItem("chase10");
    document.getElementById("chase11").innerHTML = localStorage.getItem("chase11");
    document.getElementById("chase12").innerHTML = localStorage.getItem("chase12");
    document.getElementById("chase13").innerHTML = localStorage.getItem("chase13");
    document.getElementById("chase14").innerHTML = localStorage.getItem("chase14");
    document.getElementById("chase15").innerHTML = localStorage.getItem("chase15");
    document.getElementById("chase16").innerHTML = localStorage.getItem("chase16");
    document.getElementById("chase17").innerHTML = localStorage.getItem("chase17");
    document.getElementById("chase18").innerHTML = localStorage.getItem("chase18");
    document.getElementById("chase19").innerHTML = localStorage.getItem("chase19");
    document.getElementById("chase20").innerHTML = localStorage.getItem("chase20");
    document.getElementById("chase21").innerHTML = localStorage.getItem("chase21");
    document.getElementById("chase22").innerHTML = localStorage.getItem("chase22");
    document.getElementById("chase23").innerHTML = localStorage.getItem("chase23");
    document.getElementById("chase24").innerHTML = localStorage.getItem("chase24");
    document.getElementById("chase25").innerHTML = localStorage.getItem("chase25");
    document.getElementById("chase26").innerHTML = localStorage.getItem("chase26");
    document.getElementById("chase01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  } else {
    document.getElementById("chase1").innerHTML = localStorage.getItem("chase1");
    document.getElementById("chase2").innerHTML = localStorage.getItem("chase2");
    document.getElementById("chase3").innerHTML = localStorage.getItem("chase3");
    document.getElementById("chase4").innerHTML = localStorage.getItem("chase4");
    document.getElementById("chase5").innerHTML = localStorage.getItem("chase5");
    document.getElementById("chase6").innerHTML = localStorage.getItem("chase6");
    document.getElementById("chase7").innerHTML = localStorage.getItem("chase7");
    document.getElementById("chase8").innerHTML = localStorage.getItem("chase8");
    document.getElementById("chase9").innerHTML = localStorage.getItem("chase9");
    document.getElementById("chase10").innerHTML = localStorage.getItem("chase10");
    document.getElementById("chase11").innerHTML = localStorage.getItem("chase11");
    document.getElementById("chase12").innerHTML = localStorage.getItem("chase12");
    document.getElementById("chase13").innerHTML = localStorage.getItem("chase13");
    document.getElementById("chase14").innerHTML = localStorage.getItem("chase14");
    document.getElementById("chase15").innerHTML = localStorage.getItem("chase15");
    document.getElementById("chase16").innerHTML = localStorage.getItem("chase16");
    document.getElementById("chase17").innerHTML = localStorage.getItem("chase17");
    document.getElementById("chase18").innerHTML = localStorage.getItem("chase18");
    document.getElementById("chase19").innerHTML = localStorage.getItem("chase19");
    document.getElementById("chase20").innerHTML = localStorage.getItem("chase20");
    document.getElementById("chase21").innerHTML = localStorage.getItem("chase21");
    document.getElementById("chase22").innerHTML = localStorage.getItem("chase22");
    document.getElementById("chase23").innerHTML = localStorage.getItem("chase23");
    document.getElementById("chase24").innerHTML = localStorage.getItem("chase24");
    document.getElementById("chase25").innerHTML = localStorage.getItem("chase25");
    document.getElementById("chase26").innerHTML = localStorage.getItem("chase26");
    document.getElementById("chase01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase1").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase2").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase3").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase4").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase5").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase6").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase7").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase8").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase9").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase10").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase11").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase12").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase13").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase14").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase15").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase16").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase17").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase18").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase19").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase20").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase021").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase21").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase022").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase22").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase023").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase23").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase024").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase24").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase025").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase25").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
    document.getElementById("chase026").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chase26").replace("$", "").replace(",", "") / 25).toFixed(0)).toLocaleString();
  }
  
  localStorage.setItem("loadedchase", true);
  