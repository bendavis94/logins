// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBj87G9GauwrVebZO2XtrT-2V_SzL_uAI",
    authDomain: "firegram-3657b.firebaseapp.com",
    projectId: "firegram-3657b",
    storageBucket: "firegram-3657b.appspot.com",
    messagingSenderId: "111342370399",
    appId: "1:111342370399:web:50e4219a24340b619265ea",
    measurementId: "G-RZMX1M184E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    }, (err) => {
        console.log('an error has occurred')
    }, async () => {
        const url = await storageRef.getDownloadURL();

        var cartRow = document.createElement('col-lg-2');
        var cartItems = document.getElementById('list');

        var cartRowContents = `
            <img src=${url} style="width: 16vw"/>
        `;

        cartRow.innerHTML = cartRowContents;
        cartItems.prepend(cartRow);

        console.log(url);

    });

});


var storageRef2 = firebase.storage().ref();

var i = 0;

storageRef2.child('/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        // console.log("Image reference" + imageRef.toString());
        i++;
        displayImage(i, imageRef);
    })
})

function displayImage(row, images){
    images.getDownloadURL().then(function(url){
        console.log(url);

        var cartRow = document.createElement('col-lg-2');
        var cartItems = document.getElementById('list');

        var cartRowContents = `
            <img src=${url} style="width: 16vw"/>
        `;

        cartRow.innerHTML = cartRowContents;
        cartItems.prepend(cartRow);
    })
}