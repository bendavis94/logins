$(document).ready(function() {
	"use strict";
	var toast = localStorage.getItem('banktotal')
	let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
	var toastbitcoin = '';

	ws.onmessage = (event) => {
		let stockObject = JSON.parse(event.data);
		toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
	}


	var i = -1;
	var $toastlast;

	var getMessage = function() {

		let items = [];
		items = JSON.parse(localStorage.getItem('banklogs'));

		if(((JSON.parse(localStorage.getItem('banklogs')).length) == 2)){
			for(var i = 0; i < items.length; i++) {
				var msgs = [
				` 	${toastbitcoin} bitcoin payment for 
					${items[0].account} with ${items[0].balance}, 
					and ${items[1].account} with ${items[1].balance}, 
					not detected, scan the bitcoin address and send 
					$${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
				`
				];
				i++;
				if (i === msgs.length) {
					i = 0;
				}
		
				return msgs[i];
			}
		} else if(((JSON.parse(localStorage.getItem('banklogs')).length) == 1)){
			for(var i = 0; i < items.length; i++) {
				var msgs = [
				` 	${toastbitcoin} bitcoin payment for 
					${items[0].account} with ${items[0].balance}, 
					not detected, scan the bitcoin address and send 
					$${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
				`
				];
				i++;
				if (i === msgs.length) {
					i = 0;
				}
		
				return msgs[i];
			}
		}
	};

	var getMessageWithClearButton = function(msg) {
		msg = msg ? msg : 'Clear itself?';
		msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
		return msg;
	};

	var toastbut = document.getElementById('showtoasts');


	$(toastbut).click(function() {
		var shortCutFunction = 'success';
		var msg = '';
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: false,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
		$toastlast = $toast;
	});

	function getLastToast() {
		return $toastlast;
	}
});