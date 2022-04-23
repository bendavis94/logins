const signGoogle = document.getElementById("signGoogle");
const signGithub = document.getElementById("signGithub");
const signYahoo = document.getElementById("signYahoo");
const signMicrosoft = document.getElementById("signMicrosoft");

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

const signInWithYahoo = () => {
  const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
  auth.signInWithPopup(yahooProvider).then(() => {
    window.location.assign("home");
  }).catch(error => {
    console.error(error);
  })
}
signYahoo.addEventListener("click", signInWithYahoo);

const signInWithMicrosoft = () => {
  const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
  auth.signInWithPopup(microsoftProvider).then(() => {
    window.location.assign("home");
  }).catch(error => {
    console.error(error);
  })
}
signMicrosoft.addEventListener("click", signInWithMicrosoft);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign("home");
  }
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 