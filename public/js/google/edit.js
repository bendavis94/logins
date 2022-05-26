const displayNameField = document.getElementById('new-name');
const photoField = document.getElementById('new-photo');
const editButton = document.getElementById('update-profile');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
})

const editInformation = () => {
    const newNameAndPhoto = {
        newDisplayName: displayNameField.value,
        newPhotoURL: photoField.value
    };
    const user = auth.currentUser;
    changeNameAndPhoto(user, newNameAndPhoto);
    
}

const changeNameAndPhoto = (user, newNameAndPhoto) => {
    const {newDisplayName, newPhotoURL} = newNameAndPhoto;
    //Changes displayName and photoURL properties
    if(newDisplayName && newPhotoURL)
        user.updateProfile({
            displayName: newDisplayName,
            photoURL: newPhotoURL
        })
        .then(() => {
            console.log('Profile Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
    //Changes only displaName
    else if(newDisplayName)
        user.updateProfile({
            displayName: newDisplayName
        })
        .then(() => {
            console.log('Display Name Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
    //Changes only photoURL
    else if(newPhotoURL)
        user.updateProfile({
            photoURL: newPhotoURL
        })
        .then(() => {
            console.log('PhotoURL Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
}

editButton.addEventListener('click', editInformation);
