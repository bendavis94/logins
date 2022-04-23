const signGoogle = document.getElementById("signGoogle");
const signGithub = document.getElementById("signGithub");

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

const signInWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider;
  auth.signInWithPopup(githubProvider).then(() => {
    window.location.assign("home");
  }).catch(error => {
    console.error(error);
  })
}
signGithub.addEventListener("click", signInWithGithub);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign("home");
  }
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 