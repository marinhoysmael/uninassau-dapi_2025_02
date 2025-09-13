document.getElementById("botaoEntrar")
.addEventListener("click", function() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const urlServer = document.getElementById("urlserver").value;

    if(username && email && urlServer) {

        //criando o objeto com os dados do login JSON
        const loginData = {
            nickname: username,
            email: email,
        };

        //enviando os dados para o servidor
        fetch("http://" +urlServer + "/enter",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            sessionStorage.setItem("username", username);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("urlServer", urlServer);

            window.location.href = "/chat/chat.html";

            return response.json();
        })
        
    }
    
    

});