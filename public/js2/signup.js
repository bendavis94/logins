const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const signUp = document.getElementById('signUp');

let state = 0;

const auth = firebase.auth();

const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Signed Up Successfully !');
        state = 1;
        sendVerificationEmail();
    })
    .catch(error => {
        console.error(error);
    })
}

const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        window.location.assign('../profile');
    })
    .catch(error => {
        console.error(error);
    })
}

signUp.addEventListener('click', signUpFunction);

auth.onAuthStateChanged(user => {
    if(user && (state === 0))
        window.location.assign('../profile');
})

