var firebaseConfig = {
    apiKey: "AIzaSyA1L3Q63zrir2ZOQMzc7AxXuPBXjaOnIwo",
    authDomain: "darknet-id.firebaseapp.com",
    projectId: "darknet-id",
    storageBucket: "darknet-id.appspot.com",
    messagingSenderId: "1049421828082",
    appId: "1:1049421828082:web:fb69e86a84c74a9af8a56b",
    measurementId: "G-NPY81TPB7J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function myFunction() {
	const logoHolder = document.getElementById("logo");
	const jinaHolder = document.getElementById("jinaHolder");
	const jinaHolder2 = document.getElementById("jinaHolder2");
	const tableidHolder = document.getElementById('nameBro');
	const email1 = document.getElementById('yourEmail1');
	const email2 = document.getElementById('yourEmail2');
	const email5 = document.getElementById('yourEmail5');
		  
	const auth = firebase.auth();

	auth.onAuthStateChanged(user => {
		if (!user) {
			window.location.assign("index");
		}
		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL);
			logoHolder.style.borderRadius = '50%';
		}
 		if(user.displayName){
			jinaHolder.innerText = user.displayName;
			jinaHolder2.innerText = 'User ID: ' + user.uid;
			tableidHolder.value = "Name: " + user.displayName;

			email1.innerHTML = `Check your email spam folder @:<strong>${user.email}</strong> after buying a bank log`;
			email2.innerHTML = `Cashout Method is also sent to your email address @:<strong>${user.email}</strong>`;
			email5.innerHTML = user.email;
		} else if(!user.displayName && user.email) {
			var themail = user.email;
			var theaddress = themail.substring(0,themail.indexOf('@'));

			jinaHolder.innerText = theaddress;
			jinaHolder2.innerText = 'User ID: ' + user.uid;
			tableidHolder.value = "Name: " + theaddress;

			email1.innerHTML = `Check your email spam folder @:<strong>${user.email}</strong> after buying a bank log`;
			email2.innerHTML = `Cashout Method is also sent to your email address @:<strong>${user.email}</strong>`;
			email5.innerHTML = user.email;
		} else if(user.phoneNumber){
			jinaHolder.innerText = user.phoneNumber;
			jinaHolder2.innerText = 'User ID: ' + user.uid;
			tableidHolder.value = "Name: " + user.phoneNumber;

			email1.innerHTML = `Check your text messages for a link @:<strong>${user.phoneNumber}</strong> after buying a bank log`;
			email2.innerHTML = `Cashout Method link is also sent to your phone Number @:<strong>${user.phoneNumber}</strong>`;
			email5.innerHTML = `Logged in with phone ${user.phoneNumber}, you will have to check your text messages inbox for a link`;
		} else if(user.isAnonymous){
			auth.signOut().then(() => {
			  window.location.assign("index");
			}).catch(error => {
			  console.error(error);
			});
		}


		let goodies = [];

		if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0) && user.displayName){
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for(var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		} else if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0) && !user.displayName && user.email){
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			var themail = user.email;
			var theaddress = themail.substring(0,themail.indexOf('@'));
			for(var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = theaddress;
			}
		} else if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0) && user.phoneNumber){
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for(var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.phoneNumber;
			}
		} else {
			console.log('No items are present')
		}
	});


	fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('yourIP2').innerHTML = `
			${data.ip}, ${data.city}, ${data.country_name}, ${data.region}, ${data.org}, ${data.timezone}, Country code: ${data.country_calling_code}
		`;
	});

	const logoutButton = document.getElementById("logoutButton");

	logoutButton.addEventListener("click", e => {
		e.preventDefault();
		auth.signOut().then(() => {
			window.location.assign("index");
		}).catch(error => {
			console.error(error);
		});
	});

	document.getElementById("thebodyz").oncontextmenu = function() {
		return false
	};


	document.getElementById('file').addEventListener('change', (event) => {
		const file = event.target.files[0];
		const storageRef = firebase.storage().ref('images' + file.name);
		storageRef.put(file).on('state_changed', (snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			const progressBar_2 = document.getElementById("pablos");
			progressBar_2.style.width = progress +'%';
			document.getElementById('escoz').innerHTML = 'Upload Progress: ' + progress + '%';
		}, (err) => {
			console.log('an error has occurred')
		}, async () => {
			const url = await storageRef.getDownloadURL();
			var cartRow = document.createElement('div');
			cartRow.classList.add('col-xl-2','col-lg-3','col-md-4','col-6');
			var cartItems = document.getElementById('list');
			var cartRowContents = `
				<img src=${url} style="margin-bottom: 10px"/>
			`;
			cartRow.innerHTML = cartRowContents;
			cartItems.prepend(cartRow);
		});
	});
	var storageRef2 = firebase.storage().ref();
	var i = 0;
	storageRef2.child('/').listAll().then(function(result){
		result.items.forEach(function(imageRef){
			i++;
			displayImage(i, imageRef);
		})
	})
	
	function displayImage(row, images){
		images.getDownloadURL().then(function(url){
			var cartRow = document.createElement('div');
			cartRow.classList.add('col-xl-2','col-lg-3','col-md-4','col-6','items');
			var cartItems = document.getElementById('list');
			var cartRowContents = `
				<img src=${url} style="margin-bottom: 10px"/>
			`;
			cartRow.innerHTML = cartRowContents;
			cartItems.prepend(cartRow);
		})
	}
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.05, 0,0,radius*2.5);
  grad.addColorStop(0, '#121d33');
  grad.addColorStop(0.5, 'rgba(0,0,0,0)');
  grad.addColorStop(1, '#121d33');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#121d33';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.33 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.87);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.87);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id, 
                ...doc.data()
            })
        })
        generateItems(items);
    })
}

function generateItems(items){
    let todoItems = []
    items.forEach((item) => {

        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        let checkContainer = document.createElement("div");
        checkContainer.classList.add("check");
        let checkMark = document.createElement("div");
        checkMark.classList.add("check-mark");
        checkMark.innerHTML = '<img src="img/svg/icon-cross.svg">';
        checkMark.addEventListener("click", function(){
            markCompleted(item.id);
        })
        checkContainer.appendChild(checkMark);

        let todoText = document.createElement("div");
        todoText.classList.add("todo-text");
        todoText.innerText = item.text;

        if(item.status == "completed"){
            checkMark.classList.add("checked");
            todoText.classList.add("checked");
        }
        todoItem.appendChild(checkContainer);
        todoItem.appendChild(todoText);
        todoItems.push(todoItem)
    })
    document.querySelector(".todo-items").replaceChildren(...todoItems);
}



function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}

function markCompleted(id){
    let item = db.collection("todo-items").doc(id);
    item.get().then(function(doc) {
        if (doc.exists) {
            if(doc.data().status == "active"){
                item.update({
                    status: "completed"
                });
                item.delete();
            } else {
                item.update({
                    status: "active"
                })
            }
        }
    })
}

getItems();