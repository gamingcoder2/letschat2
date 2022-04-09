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
var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function send(){
var message = document.getElementById("send_message").value;
firebase.database().ref(room_name).push({
      like:0,
      message:message,
      username:user_name
});
document.getElementById("send_message").value="";

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}