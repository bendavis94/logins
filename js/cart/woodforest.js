if (!localStorage.getItem("loadedwood")) {
    localStorage.setItem("wood1", "$" + Math.floor(Math.random() * 700 + 5025).toLocaleString());
    localStorage.setItem("wood2", "$" + Math.floor(Math.random() * 700 + 5725).toLocaleString());
    localStorage.setItem("wood3", "$" + Math.floor(Math.random() * 700 + 6425).toLocaleString());
    localStorage.setItem("wood4", "$" + Math.floor(Math.random() * 700 + 7125).toLocaleString());
    localStorage.setItem("wood5", "$" + Math.floor(Math.random() * 700 + 7825).toLocaleString());
    localStorage.setItem("wood6", "$" + Math.floor(Math.random() * 700 + 8525).toLocaleString());
    localStorage.setItem("wood7", "$" + Math.floor(Math.random() * 700 + 9225).toLocaleString());
    localStorage.setItem("wood8", "$" + Math.floor(Math.random() * 700 + 9925).toLocaleString());
    localStorage.setItem("wood9", "$" + Math.floor(Math.random() * 700 + 10625).toLocaleString());
    localStorage.setItem("wood10", "$" + Math.floor(Math.random() * 700 + 11325).toLocaleString());
    localStorage.setItem("wood11", "$" + Math.floor(Math.random() * 700 + 12025).toLocaleString());
    localStorage.setItem("wood12", "$" + Math.floor(Math.random() * 700 + 12725).toLocaleString());
    localStorage.setItem("wood13", "$" + Math.floor(Math.random() * 700 + 13425).toLocaleString());
    localStorage.setItem("wood14", "$" + Math.floor(Math.random() * 700 + 14125).toLocaleString());
    localStorage.setItem("wood15", "$" + Math.floor(Math.random() * 700 + 14825).toLocaleString());
    localStorage.setItem("wood16", "$" + Math.floor(Math.random() * 700 + 15525).toLocaleString());
    localStorage.setItem("wood17", "$" + Math.floor(Math.random() * 700 + 16225).toLocaleString());
    localStorage.setItem("wood18", "$" + Math.floor(Math.random() * 700 + 16925).toLocaleString());
    localStorage.setItem("wood19", "$" + Math.floor(Math.random() * 700 + 17625).toLocaleString());
    localStorage.setItem("wood20", "$" + Math.floor(Math.random() * 700 + 18325).toLocaleString());

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

  }

  localStorage.setItem("loadedwood", true);
  