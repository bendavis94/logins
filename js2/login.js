const mailField = document.getElementById('mail');
const signUp = document.getElementById('signUp');

const auth = firebase.auth();

const signUpFunction = () => {
    const email = mailField.value;
    var actionCodeSettings = {
        url: 'https://darknet.id',
        // handleCodeInApp: true,
    };

    auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
        console.log('Link Sent Successfully');
        window.localStorage.setItem('emailForSignIn', email);
        // var emailSent = true;
    })
    .catch(error => {
        console.error(error);
    })
}


if (auth.isSignInWithEmailLink(window.location.href)) {
    var email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    auth.signInWithEmailLink(email, window.location.href)
      .then((result) => {
        console.log('Signed in successfully')
        // window.localStorage.removeItem('emailForSignIn');
        // window.location.assign('home')
      })
      .catch((error) => {
        console.log('An error occurred')
      });
  }

signUp.addEventListener('click', signUpFunction);

auth.onAuthStateChanged(user => {
    if(user)
        window.location.assign('home');
})

