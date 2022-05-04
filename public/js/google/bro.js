function myFunction() {
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
      jinaHolder2.innerText = 'USER ID: ' + user.uid;

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('footer-email').innerHTML = `${user.displayName}, your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}`;
      });
    } else if(!user.displayName && user.email) {
      var themail = user.email;
      var theaddress = themail.substring(0,themail.indexOf('@'));
      jinaHolder.innerText = theaddress;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('footer-email').innerHTML = `${theaddress}, Your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}`;
      });
    } else if(!user.displayName && !user.email && user.phoneNumber){
      jinaHolder.innerText = user.phoneNumber;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('footer-email').innerHTML = `${user.phoneNumber}, Your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}`;
      });
    }
  });

  document.getElementById("thebodyz").oncontextmenu = function() {
    return false
  };
}
