var firebaseConfig = {
      apiKey: "AIzaSyA-acwTtm82UN973o8TLotAMlcIVOSYrBU",
      authDomain: "letschat2-97f80.firebaseapp.com",
      databaseURL: "https://letschat2-97f80-default-rtdb.firebaseio.com",
      projectId: "letschat2-97f80",
      storageBucket: "letschat2-97f80.appspot.com",
      messagingSenderId: "338132251119",
      appId: "1:338132251119:web:6d845f0f0e5e9dfc6d061a",
      measurementId: "G-DT18V6PLFM"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function addroom(){
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirect_to_roomname(name){
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location="index.html";
}