
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBeiBalveD5r3mNiVgsRcJ75txVN3bYRYg",
      authDomain: "kwitter-app-5072f.firebaseapp.com",
      databaseURL: "https://kwitter-app-5072f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-5072f",
      storageBucket: "kwitter-app-5072f.appspot.com",
      messagingSenderId: "525734540611",
      appId: "1:525734540611:web:9e1d1abc83b398e62a6bf6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}





function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;


                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
console.log(name);

localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logOut()  {
      window.location="index.html";
}