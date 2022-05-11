const mergeWithGoogleButton = document.getElementById('mergeBtn');
const mergeWithGoogleButton2 = document.getElementById('mergeBtn2');

auth.onAuthStateChanged(user => {
    if(!user.email) {
        mergeWithGoogleButton.innerHTML = `
            Merge with Google
            <img style="height: 25px; margin: auto 0;" src="google.svg">
        `
        mergeWithGoogleButton2.innerHTML = `
        Merge with Google
        <img style="height: 25px; margin: auto 0;" src="google.svg">
    `
    } else {
        mergeWithGoogleButton.innerHTML = `
            ${user.email}
        <img style="height: 25px; margin: auto 0;" src="google.svg">
        `;
        mergeWithGoogleButton2.innerHTML = `
            ${user.email}
        <img style="height: 25px; margin: auto 0;" src="google.svg">
        `;
    }

});
const googleProvider = new firebase.auth.GoogleAuthProvider();

const mergeAndUnmergeWithGoogle = () => {
    const user = auth.currentUser;
    if(user) {
        const providerIndex = checkIfLinked(user, 'google.com');
        if(providerIndex != -1)
            unmerge(user, providerIndex);
        else
            merge(user, googleProvider);
    }
}

const merge = (previousUser, provider) => {
    auth.signInWithPopup(provider)
    .then(user => {
    alert('Accounts linked successfully')
    })
}

const checkIfLinked = (user, providerId) => {
    const userProviders = user.providerData;
    let providerIndex = -1;
    for(let i = 0; i < userProviders.length; i++) {
        if(userProviders[i].providerId === providerId)
            providerIndex = i;
    }
    return providerIndex;
}

mergeWithGoogleButton.addEventListener('click', mergeAndUnmergeWithGoogle);
mergeWithGoogleButton2.addEventListener('click', mergeAndUnmergeWithGoogle);