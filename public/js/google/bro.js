function myFunction() {
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
    if (user.displayName && user.uid) {
      jinaHolder.innerText = user.displayName;
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    } else{
      jinaHolder.innerText = 'Anonymous';
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    }
  });

  fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('footer-email').innerHTML = `
      Your IP: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}
    `;
});

  document.getElementById("thebodyz").oncontextmenu = function() {
    return false
  };
}
