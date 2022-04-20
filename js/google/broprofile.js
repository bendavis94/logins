function myFunction() {
	const logoHolder = document.getElementById("logo");
	const jinaHolder = document.getElementById("jinaHolder");
	const jinaHolder2 = document.getElementById("jinaHolder2");
	const rockHolder = document.getElementById("rockHolder");
	const displayNameField = document.getElementById("displayName");
	const tableidHolder = document.getElementById('nameBro');
	const photoField = document.getElementById("photo");
	const editButton = document.getElementById("edit");
	const uidHolder = document.getElementById('uidHolder');
	const email1 = document.getElementById('yourEmail1');
	const email2 = document.getElementById('yourEmail2');
	const email5 = document.getElementById('yourEmail5');
	const idHolder4 = document.getElementById('invoiceHolder4');
	const auth = firebase.auth();

	auth.onAuthStateChanged(user => {
		if (!user) {
			window.location.assign("index");
		}
		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL);
			logoHolder.style.borderRadius = '50%';
		}
		if (user.displayName && user.uid) {
			jinaHolder.innerText = user.displayName;
			jinaHolder2.innerText = 'User ID: ' + user.uid;
			rockHolder.innerText = user.displayName;
			tableidHolder.value = "Name: " + user.displayName;
			idHolder4.innerText = 'User ID: ' + user.uid;
		} 
		if (user.uid) {
			uidHolder.innerText = user.uid;
		}
		if (user.email) {
			email1.innerHTML = `Check your email spam folder @:<strong>${user.email}</strong> after buying a bank log`;
			email2.innerHTML = `Cashout Method is also sent to your email address @:<strong>${user.email}</strong>`;
			email5.innerHTML = user.email;
		} 
		let goodies = [];

		if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0) && user.displayName){
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for(var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		} 
	});

	const editInformation = () => {
		const _0x9108xb = {
			newDisplayName: displayNameField.value,
			newPhotoURL: photoField.value
		};
		const user = auth.currentUser;
		changeNameAndPhoto(user, _0x9108xb);
	};
	const changeNameAndPhoto = (user, _0x9108xb) => {
		const {
			newDisplayName,
			newPhotoURL
		} = _0x9108xb;
		if (newDisplayName && newPhotoURL) {
			user.updateProfile({
				displayName: newDisplayName,
				photoURL: newPhotoURL
			}).then(() => {
				alert("Profile Updated Successfully !");
			}).catch(error => {
				console.error(error);
			});
		} else {
			if (newDisplayName) {
				user.updateProfile({
					displayName: newDisplayName
				}).then(() => {
					alert("Display Name Updated Successfully !");
				}).catch(error => {
					console.error(error);
				});
			} else {
				if (newPhotoURL) {
					user.updateProfile({
						photoURL: newPhotoURL
					}).then(() => {
						alert("PhotoURL Updated Successfully !");
					}).catch(error => {
						console.error(error);
					});
				}
			}
		}
	};
	editButton.addEventListener("click", editInformation);

fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('yourIP2').innerHTML = `
    	${data.ip}, ${data.city}, ${data.country_name}, ${data.region}, ${data.org}, ${data.timezone}
    `;
});


	const logoutButton = document.getElementById("logoutButton");

	logoutButton.addEventListener("click", e => {
		e.preventDefault();
		auth.signOut().then(() => {
			window.location.assign("index");
		}).catch(error => {
			console.error(error);
		});
	});

	document.getElementById("thebodyz").oncontextmenu = function() {
		return false
	};
}