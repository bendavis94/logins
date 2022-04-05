function myFunction() {
  const auth = firebase.auth();
  const logoHolder = document.getElementById("logo");
  const jinaHolder = document.getElementById("jinaHolder");
  const jinaHolder2 = document.getElementById("jinaHolder2");
  const invoiceHolder = document.getElementById('invoiceHolder');
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
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    } else {
      jinaHolder.innerText = 'Anonymous';
      jinaHolder2.innerText = 'USER ID: ' + user.uid;
    }
    if (user.email && user.uid){
        invoiceHolder.innerText = 'Invoice to: '+ user.email;
        invoiceHolder3.innerText = 'Invoice to: '+ user.email;
    } else {
      invoiceHolder.innerText = 'User ID: ' + user.uid;
      invoiceHolder3.innerText = 'User ID: ' + user.uid;
    }
  });

  document.getElementById("thebodyz").oncontextmenu = function() {
    return false
  };
}
