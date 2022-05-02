function myFunction() {
  const auth = firebase.auth();
  const logoHolder = document.getElementById("logo");
  const jinaHolder = document.getElementById("jinaHolder");
  const jinaHolder2 = document.getElementById("jinaHolder2");
  const invoiceHolder = document.getElementById('invoiceHolder');

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

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('yourIP').innerHTML = `
              <button type="button" class="close" data-dismiss="alert" style="color: red !important;">&times;</button>
              ${user.displayName}, your IP address is: <strong>${data.ip}, ${data.city}, ${data.country_name}, ${data.org}</strong>
          `;
      });
    } else {
      var themail = user.email;
      var theaddress = themail.substring(0,themail.indexOf('@'));

      jinaHolder.innerText = theaddress;
      jinaHolder2.innerText = 'User ID: ' + user.uid;
      invoiceHolder.innerText = 'Invoice to: '+ user.email;

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          document.getElementById('yourIP').innerHTML = `
              <button type="button" class="close" data-dismiss="alert" style="color: red !important;">&times;</button>
              ${theaddress}, Your IP address is: <strong>${data.ip}, ${data.city}, ${data.country_name}, ${data.org}</strong>
          `;
      });
    } 
  });

  document.getElementById("thebodyz").oncontextmenu = function() {
    return false
  };
}