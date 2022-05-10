function merge() {
    
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');

    const mergeWithGoogleButton = document.getElementById('addGoogle');
    const mergeWithGithubButton = document.getElementById('addGithub');
    const mergeWithYahooButton = document.getElementById('addYahoo');

    const mergeWithGoogle = () => {
        const previousUser = auth.currentUser;
        auth.signInWithPopup(googleProvider)
            .then(user => {
                const secondAccountCred = user.credential;
                auth.currentUser.delete()
                    .then(() => {
                        return previousUser.linkWithCredential(secondAccountCred);
                    })
                    .then(() => {
                        auth.signInWithCredential(secondAccountCred);
                        console.log('Accounts linked successfully!');
                    })
            })
    }
    mergeWithGoogleButton.addEventListener('click', mergeWithGoogle);

    const mergeWithGithub = () => {
        const previousUser = auth.currentUser;
        auth.signInWithPopup(githubProvider)
            .then(user => {
                const secondAccountCred = user.credential;
                auth.currentUser.delete()
                    .then(() => {
                        return previousUser.linkWithCredential(secondAccountCred);
                    })
                    .then(() => {
                        auth.signInWithCredential(secondAccountCred);
                        console.log('Accounts linked successfully!');
                    })
            })
    }
    mergeWithGithubButton.addEventListener('click', mergeWithGithub);

    const mergeWithYahoo = () => {
        const previousUser = auth.currentUser;
        auth.signInWithPopup(yahooProvider)
            .then(user => {
                const secondAccountCred = user.credential;
                auth.currentUser.delete()
                    .then(() => {
                        return previousUser.linkWithCredential(secondAccountCred);
                    })
                    .then(() => {
                        auth.signInWithCredential(secondAccountCred);
                        console.log('Accounts linked successfully!');
                    })
            })
    }
    mergeWithYahooButton.addEventListener('click', mergeWithYahoo);

}