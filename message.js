function updateRoom(){
    document.getElementById("room_name").innerHTML = window.localStorage.getItem("roomName")
    console.log("fire", window.localStorage.getItem("roomName"))
    
}

window.addEventListener("DOMContentLoaded",updateRoom)

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value = "";

}
