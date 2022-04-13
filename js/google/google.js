const signGoogle = document.getElementById("signGoogle");

const auth = firebase.auth();
const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider;
  auth.signInWithPopup(googleProvider).then(() => {
    window.location.assign("chime");
  }).catch(error => {
    console.error(error);
  });
};
signGoogle.addEventListener("click", signInWithGoogle);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign("chime");
  }
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 