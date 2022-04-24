const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');

const auth = firebase.auth();

const signUpFunction = () => {
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

