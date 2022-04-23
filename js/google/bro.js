function myFunction() {
  const auth = firebase.auth();
  const logoHolder = document.getElementById("logo");
  const jinaHolder = document.getElementById("jinaHolder");
  const jinaHolder2 = document.getElementById("jinaHolder2");

  auth.onAuthStateChanged(user => {
    console.log(user);
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

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('footer-email').innerHTML = `
           ${user.displayName}, your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}
          `;
          document.getElementById('footer-email-2').innerHTML = `
            ${user.displayName}, your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}
         `;
      });
    } else {
      jinaHolder.innerText = 'Anonymous User';
      jinaHolder2.innerText = 'USER ID: ' + user.uid;

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('footer-email').innerHTML = `
           Anonymous, Your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}
          `;
          document.getElementById('footer-email-2').innerHTML = `
            Anonymous, Your IP address is: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}
         `;
      });
    }
  });

  document.getElementById("thebodyz").oncontextmenu = function() {
    return false
  };
}
