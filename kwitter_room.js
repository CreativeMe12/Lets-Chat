//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDWAOYWVIceEcMxzzeR3lhvgYXVI_79rHg",
    authDomain: "chat-app-1-1058c.firebaseapp.com",
    databaseURL: "https://chat-app-1-1058c.firebaseio.com",
    projectId: "chat-app-1-1058c",
    storageBucket: "chat-app-1-1058c.appspot.com",
    messagingSenderId: "873856214612",
    appId: "1:873856214612:web:ccfa39b0ec59d409d6afc1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
