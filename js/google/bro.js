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

const logoHolder = document.getElementById("logo");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const emailInbox = document.getElementById("email-inbox");

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
    jinaHolder2.innerText = 'USER ID: ' + user.uid;
    emailInbox.innerHTML = `Check your email inbox <span>${user.email}</span> after buying any bank log.`;
  } else if(!user.displayName && user.email) {
    var themail = user.email;
    var theaddress = themail.substring(0,themail.indexOf('@'));
    jinaHolder.innerText = theaddress;
    jinaHolder2.innerText = 'USER ID: ' + user.uid;
    emailInbox.innerHTML = `Check your email inbox <span>${user.email}</span> after buying any bank log.`;
  } else if(user.phoneNumber){
    jinaHolder.innerText = user.phoneNumber;
    jinaHolder2.innerText = 'USER ID: ' + user.uid;
    emailInbox.innerHTML = `Check your text messages inbox <span>${user.phoneNumber}</span> for a link after buying any bank log.`;
  } else if(user.isAnonymous){
    jinaHolder.innerText = 'Anonymous';
    jinaHolder2.innerText = 'USER ID: ' + user.uid;
    emailInbox.innerHTML = `Login with <span>email/google/yahoo</span> to get a copy of bank log files sent via email`;
  } 
});

fetch('https://ipapi.co/json/')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  document.getElementById('footer-email').innerHTML = `Your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}`;
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
};




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