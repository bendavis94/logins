var firebaseConfig = {
    apiKey: "AIzaSyDqtvSwE6h8eaLiKyvzu3aPf0JXNgbI-SU",
    authDomain: "darknet-logins.firebaseapp.com",
    projectId: "darknet-logins",
    storageBucket: "darknet-logins.appspot.com",
    messagingSenderId: "1063580056043",
    appId: "1:1063580056043:web:96ca2d3c70a813cbc841ae",
    measurementId: "G-ZYDKRNKCEN"
  };
  firebase.initializeApp(firebaseConfig);
  
  const logoHolder = document.getElementById("logo");
  const jinaHolder = document.getElementById("jinaHolder");
  const jinaHolder2 = document.getElementById("jinaHolder2");

  const displayNameField = document.getElementById('new-name');
  const editButton = document.getElementById('update-profile');

  
  const auth = firebase.auth();
  
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.assign("index");
    }
    if (user.photoURL) {
      logoHolder.setAttribute("src", user.photoURL);
      logoHolder.style.borderRadius = '50%';
    }
    if(user.displayName && user.email){
      jinaHolder.innerText = user.displayName;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    } else if(!user.displayName && user.email) {
      var themail = user.email;
      var theaddress = themail.substring(0,themail.indexOf('@'));
      jinaHolder.innerText = theaddress;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    } else if(user.phoneNumber){
      jinaHolder.innerText = user.phoneNumber;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    } 
  });
  
  fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('footer-email').innerHTML = `Your IP address: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}`;
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









  

const editInformation = () => {
    const newNameAndPhoto = {
        newDisplayName: displayNameField.value
    };
    const user = auth.currentUser;
    changeNameAndPhoto(user, newNameAndPhoto);
    
}

const changeNameAndPhoto = (user, newNameAndPhoto) => {
    const {newDisplayName} = newNameAndPhoto;
    if(newDisplayName) {
        user.updateProfile({
            displayName: newDisplayName
        })
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.error(error);
        })
    }
}

editButton.addEventListener('click', editInformation);
document.getElementById('edit-form').addEventListener('submit', editInformation);



document.getElementById('profile-pic').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('profiles/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementById("pablos-2");
		progressBar_2.style.width = progress +'%';
		document.getElementById('escoz-2').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

        const user = auth.currentUser;
        user.updateProfile({
            photoURL: url
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
            console.error(error);
        })

	});
});

  
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

var ua = navigator.userAgent.toLowerCase(); 
console.log(ua);
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    document.getElementById('edit-info').style.display = 'block'
  } else {
    document.getElementById('edit-info').style.display = 'none'
  }
}
