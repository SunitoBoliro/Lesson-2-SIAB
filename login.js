function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    function login_success(){
        window.alert("Login Success!");
        window.location.href = "index.html";
    }

    username === "ahsan" && password === "ahsan123" ? login_success() : window.alert("Login Failed");


};