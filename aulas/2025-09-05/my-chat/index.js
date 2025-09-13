document.addEventListener('DOMContentLoaded', function () {
    // debugger
    const storedUsername = sessionStorage.getItem("username");
    const storedEmail = sessionStorage.getItem("email");
    const storedUrlServer = sessionStorage.getItem("urlServer");

    if (storedUsername && storedEmail && storedUrlServer) {
        if (window.location.pathname !== "/chat/chat.html"){
            window.location.href = "/chat/chat.html";
        }
    } else {
        if (window.location.pathname !== "/login/login.html") {
            //PARA QUE SERVE O WINDOW?
            window.location.href = "/login/login.html";
        }
    }
});