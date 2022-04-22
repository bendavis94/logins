document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        const progressBar_2 = document.getElementById("pablos");
        progressBar_2.style.width = progress +'%';
        document.getElementById('escoz').innerHTML = 'Upload Progress: ' + progress + '%';
    }, (err) => {
        console.log('an error has occurred')
    }, async () => {
        const url = await storageRef.getDownloadURL();

        var cartRow = document.createElement('div');
        cartRow.classList.add('col-xl-2','col-lg-3','col-md-4','col-6');
        var cartItems = document.getElementById('list');

        var cartRowContents = `
            <img src=${url} style="margin-bottom: 10px"/>
        `;

        cartRow.innerHTML = cartRowContents;
        cartItems.prepend(cartRow);

        // console.log(url);

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

        var cartRow = document.createElement('div');
        cartRow.classList.add('col-xl-2','col-lg-3','col-md-4','col-6','items');
        var cartItems = document.getElementById('list');

        var cartRowContents = `
            <img src=${url} style="margin-bottom: 10px"/>
        `;

        cartRow.innerHTML = cartRowContents;
        cartItems.prepend(cartRow);
    })
}