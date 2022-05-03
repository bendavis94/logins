const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');
const signGoogle = document.getElementById("signGoogle");
const signGithub = document.getElementById("signGithub");
const signYahoo = document.getElementById("signYahoo");

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');


const auth = firebase.auth();

const sendVerificationEmail = () => {
  auth.currentUser.sendEmailVerification()
  .then(() => {
      alert('Check Verification Link sent to your email')
  })
  .catch(error => {
      console.error(error);
  })
}

const signUpFunction = () => {
  event.preventDefault();
  const email = mailField.value;
  var actionCodeSettings = {
      url: 'https://darknet.id',
      handleCodeInApp: true,
  };
  auth.sendSignInLinkToEmail(email, actionCodeSettings)
  .then(() => {
      alert('Check your email ' + email + ' inbox for a verification link');
      window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(error => {
      console.error(error);
  });
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);


if (auth.isSignInWithEmailLink(window.location.href)) {
  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    email = window.prompt('Enter your email for confirmation');
  }
  auth.signInWithEmailLink(email, window.location.href)
    .then((result) => {
      window.location.assign('chime');
      sendVerificationEmail();
    })
    .catch((error) => {
      alert('Wrong email entered')
    });
}

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider;
  auth.signInWithPopup(googleProvider).then(() => {
    sendVerificationEmail();
    window.location.assign('chime');
  }).catch(error => {
    console.error(error);
  });
};
signGoogle.addEventListener("click", signInWithGoogle);

const signInWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider;
  auth.signInWithPopup(githubProvider).then(() => {
    sendVerificationEmail();
    window.location.assign('chime');
  }).catch(error => {
    console.error(error);
  })
}
signGithub.addEventListener("click", signInWithGithub);



window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId => {
  window.recaptchaWidgetId = widgetId;
})
const sendVerificationCode = () => {
    const phoneNumber = phoneNumberField.value;
    const appVerifier = window.recaptchaVerifier;
  
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      const sentCodeId = confirmationResult.verificationId;
      signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
    })
}
const signInWithPhone = sentCodeId => {
const code = codeField.value;
const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
auth.signInWithCredential(credential)
    .then(() => {
        window.location.assign('chime');
    })
    .catch(error => {
        console.error(error);
    })
}
getCodeButton.addEventListener('click', sendVerificationCode);


const signInWithYahoo = () => {
  const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
  auth.signInWithPopup(yahooProvider).then(() => {
    sendVerificationEmail();
    window.location.assign('chime');
  }).catch(error => {
    console.error(error);
  })
}
signYahoo.addEventListener("click", signInWithYahoo);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign('chime');
  } 
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 