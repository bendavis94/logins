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
  
  
  const auth = firebase.auth();
  const logoHolder = document.getElementById("logo");
  const jinaHolder = document.getElementById("jinaHolder");
  const jinaHolder2 = document.getElementById("jinaHolder2");
  const invoiceHolder = document.getElementById('invoiceHolder');
  

  const signGoogle = document.getElementById("signGoogle");
  const signYahoo = document.getElementById("signYahoo");
  const signGithub = document.getElementById("signGithub");
  const mailField = document.getElementById('exampleInputEmail');
  const signUp = document.getElementById('signUp');

  const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Check Verification Link sent to your email');
    })
    .catch(error => {
        console.error(error.message);
    })
  }
  
  const signUpFunction = () => {
    event.preventDefault();
    const email = mailField.value;
    var actionCodeSettings = {
        url: 'https://darknet.id/invoice',
        handleCodeInApp: true,
    };
    auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
        alert('Check your email ' + email + ' inbox for a verification link');
        window.localStorage.setItem('emailForSignIn', email);
    })
    .catch(error => {
        console.error(error.message);
    });
  }
  signUp.addEventListener('click', signUpFunction);
  document.getElementById('the-form').addEventListener('submit', signUpFunction);
  
  
  if (auth.isSignInWithEmailLink(window.location.href)) {
    var email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Enter your email for confirmation');
    }
    auth.signInWithEmailLink(email, window.location.href)
      .then((result) => {
        sendVerificationEmail();
        location.href = 'https://darknet.id/invoice';
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider;
    auth.signInWithPopup(googleProvider).then(() => {
      sendVerificationEmail();
      window.location.reload()
    }).catch(error => {
      alert(error.message);
    })
  };
  signGoogle.addEventListener("click", signInWithGoogle);
  
  const signInWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider;
    auth.signInWithPopup(githubProvider).then(() => {
      sendVerificationEmail();
      window.location.reload()
    }).catch(error => {
      alert(error.message);
    })
  };
  signGithub.addEventListener("click", signInWithGithub);

  const signInWithYahoo = () => {
    const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
    auth.signInWithPopup(yahooProvider).then(() => {
      sendVerificationEmail();
      window.location.reload()
    }).catch(error => {
      alert(error.message);
    })
  }
  signYahoo.addEventListener("click", signInWithYahoo);
  
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.assign("index");
    }
    if (user.photoURL) {
      logoHolder.setAttribute("src", user.photoURL);
      logoHolder.style.borderRadius = '50%';
    }
    if (user.displayName && user.email) {
      jinaHolder.innerText = user.displayName;
      jinaHolder2.innerText = 'User ID: ' + user.uid;
      invoiceHolder.innerText = 'Invoice to: '+ user.email;
      document.getElementById('theSign').style.display = 'none';
    } else if(!user.displayName && user.email) {
      var themail = user.email;
      var theaddress = themail.substring(0,themail.indexOf('@'));
  
      jinaHolder.innerText = theaddress;
      jinaHolder2.innerText = 'User ID: ' + user.uid;
      invoiceHolder.innerText = 'Invoice to: '+ user.email;
      document.getElementById('theSign').style.display = 'none';
    } else if(user.phoneNumber){
      jinaHolder.innerText = user.phoneNumber;
      jinaHolder2.innerText = 'User ID: ' + user.uid;
      invoiceHolder.innerText = 'Invoice to: '+ user.phoneNumber;
      document.getElementById('theSign').style.display = 'block';
    } else if(user.isAnonymous){
      jinaHolder.innerText = 'Anonymous';
      jinaHolder2.innerText = 'User ID: ' + user.uid;
      invoiceHolder.innerText = 'User ID: ' + user.uid;
      document.getElementById('theSign').style.display = 'block';
    } 
  });
  
  fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('yourIP').innerHTML = `
        <button type="button" class="close" data-dismiss="alert" style="color: red !important;">&times;</button>
        Your IP address: <strong>${data.ip}, ${data.city} ${data.country_name}, ${data.org}, ${data.region}</strong>
    `;
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