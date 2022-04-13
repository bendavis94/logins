function myFunction() {
    const auth = firebase.auth();
    const logoHolder = document.getElementById("logo");
    const jinaHolder = document.getElementById("jinaHolder");
    const jinaHolder2 = document.getElementById("jinaHolder2");
    const invoiceHolder3 = document.getElementById('invoiceHolder3')
  
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
        jinaHolder2.innerText = 'User ID ' + user.uid;
      } 
      if (user.email && user.uid){
          invoiceHolder3.innerText = 'Invoice to: '+ user.email;
      } 
    });

    fetch('https://ipapi.co/json/')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById('yourIP2').innerHTML = `
          ${data.ip}, ${data.city}, ${data.country_name}, ${data.region}, ${data.org}, ${data.timezone}
        `;
    });
  
    document.getElementById("thebodyz").oncontextmenu = function() {
      return false
    };
  }
  