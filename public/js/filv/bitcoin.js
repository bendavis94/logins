  window.addEventListener("load", () => {
    let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
  
    let bitcoin = document.getElementById("the-other-one");
  
      binance.onmessage = event => {
        let confirm = JSON.parse(event.data);
          bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5);
      }
  });