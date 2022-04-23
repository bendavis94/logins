const signGoogle = document.getElementById("signGoogle");
const signAnony = document.getElementById("signAnony");
const signInWithFacebookButton = document.getElementById('signInWithFacebook');

const auth = firebase.auth();
const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider;
  auth.signInWithPopup(googleProvider).then(() => {
    window.location.assign("home");
  }).catch(error => {
    console.error(error);
  });
};
signGoogle.addEventListener("click", signInWithGoogle);

const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  auth.signInWithPopup(facebookProvider)
  .then(() => {
    window.location.assign('home');
  })
  .catch(error => {
    console.error(error);
  })
}
signInWithFacebookButton.addEventListener('click', signInWithFacebook);

const loginAnonymously = () => {
  auth.signInAnonymously().then(() => {
    window.location.assign("home");
  }).catch(error => {
    console.error(error);
  });
};
signAnony.addEventListener("click", loginAnonymously);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign("home");
  }
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 