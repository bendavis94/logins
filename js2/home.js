const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const signInWithMail = document.getElementById('signInWithMail');


const auth = firebase.auth();


const signInWithEmailFunction = () => {
  const email = mailField.value;
  const password = passwordField.value;
  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    window.location.assign('./profile')
  })
  .catch(error => {
    console.error(error);
  })
}

signInWithMail.addEventListener('click', signInWithEmailFunction);

auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('./profile');
})

