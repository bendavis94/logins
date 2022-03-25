  window.addEventListener("load", () => {
    let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
  
    let bitcoin = document.getElementById("the-other-one");
    let bitcoin2 = document.getElementById('the-other-one2');
  
      binance.onmessage = event => {
        let confirm = JSON.parse(event.data);
        if(JSON.parse(localStorage.getItem('banklogs')).length == 2){
          bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5);
          bitcoin.style.textDecoration = 'line-through'
          bitcoin.style.textDecorationStyle = 'double'
          bitcoin2.innerHTML = ((localStorage.getItem('banktotal') * 0.75) / parseFloat(confirm.k.c)).toFixed(5);
        }  
        else if(JSON.parse(localStorage.getItem('banklogs')).length == 1){
          bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5);
          bitcoin2.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5);
          bitcoin2.style.display = 'none'
        }
      }
  });