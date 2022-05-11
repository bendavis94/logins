function merge() {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');

    const mergeWithGoogleButton = document.getElementById('addGoogle');
    const mergeWithGithubButton = document.getElementById('addGithub');
    const mergeWithYahooButton = document.getElementById('addYahoo');

    const mergeWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
    }
    mergeWithGoogleButton.addEventListener('click', mergeWithGoogle);

    const mergeWithGithub = () => {
        auth.signInWithPopup(githubProvider)
    }
    mergeWithGithubButton.addEventListener('click', mergeWithGithub);

    const mergeWithYahoo = () => {
        auth.signInWithPopup(yahooProvider)
    }
    mergeWithYahooButton.addEventListener('click', mergeWithYahoo);

}