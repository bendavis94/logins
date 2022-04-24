const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const signUp = document.getElementById('signUp');
const signGoogle = document.getElementById("signGoogle");

const auth = firebase.auth();

const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Signed Up Successfully !');
        sendVerificationEmail();
    })
    .catch(error => {
        console.error(error);
    })
}

const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification({
        url: "https://darknet.id/home"
    })
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        // alert("Verification email sent to your email");
    })
    .catch(error => {
        console.error(error);
    })
}

signUp.addEventListener('click', signUpFunction);

const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider;
    auth.signInWithPopup(googleProvider).then(() => {
      sendVerificationEmail();
      window.location.assign("home");
    }).catch(error => {
      console.error(error);
    });
};
  
signGoogle.addEventListener("click", signInWithGoogle);

auth.onAuthStateChanged(user => {
    if(user.emailVerified){
        window.location.assign('home');
    } else {
        alert('Check verification message sent to your email');
    }
})

