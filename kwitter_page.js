var firebaseConfig = {
    apiKey: "AIzaSyCgpUmbmQ8bB0OqY_bVYHGuySU_I90lm8M",
    authDomain: "lets-chat-f9eb6.firebaseapp.com",
    databaseURL: "https://lets-chat-f9eb6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f9eb6",
    storageBucket: "lets-chat-f9eb6.appspot.com",
    messagingSenderId: "19657723602",
    appId: "1:19657723602:web:7e69b970c4dd8710f2e70b"
  };

  firebase.initializeApp(firebaseConfig);
   
  var user_name= localStorage.getItem("user_name");
  var  room_name=localStorage.getItem("room_name");
