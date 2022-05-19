auth.onAuthStateChanged(user => {
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
			if(user.email){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.email}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download:
						<hr>
						${items[0].account} with ${items[0].balance} and, <br>
						<hr>
						${items[1].account} with ${items[1].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.phoneNumber){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.phoneNumber}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download:
						<hr>
						${items[0].account} with ${items[0].balance} and, <br>
						<hr>
						${items[1].account} with ${items[1].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.isAnonymous){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						Your anonymous account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download:
						<hr>
						${items[0].account} with ${items[0].balance} and, <br>
						<hr>
						${items[1].account} with ${items[1].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} 
		} else if(((JSON.parse(localStorage.getItem('banklogs')).length) == 1)){
			if(user.email){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.email}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account} with ${items[0].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.phoneNumber){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.phoneNumber}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account} with ${items[0].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.isAnonymous){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						Your anonymous account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account} with ${items[0].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			}
		} else if(((JSON.parse(localStorage.getItem('banklogs')).length) == 3)){
			if(user.email){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.email}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download:
						<hr> 
						${items[0].account} with ${items[0].balance} and, <br> 
						<hr>
						${items[1].account} with ${items[1].balance} and, <br>
						<hr>
						${items[2].account} with ${items[2].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.phoneNumber){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.phoneNumber}, your account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account} with ${items[0].balance} and, <br> 
						<hr>
						${items[1].account} with ${items[1].balance} and, <br>
						<hr>
						${items[2].account} with ${items[2].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if(user.isAnonymous){
				for(var i = 0; i < items.length; i++) {
					var msgs = [`
						Your anonymous account has insufficient balance to complete the download.
						<hr>
						Send a one time payment of ${toastbitcoin} BTC/ $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account} with ${items[0].balance} and, <br> 
						<hr>
						and ${items[1].account} with ${items[1].balance} and, <br>
						<hr>
						${items[2].account} with ${items[2].balance}
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} 
		}
	};

	var toastbut = document.getElementById('showtoasts');
	var toastbut_2 = document.getElementById('showtoasts_2');

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
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title);
		$toastlast = $toast;
	});

	$(toastbut_2).click(function() {
		var shortCutFunction = 'success';
		var msg = '$100 bitcoin confirmation not detected to complete download, do not close this page or clear your browsing history';
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title); 
		$toastlast = $toast;
	});

});
