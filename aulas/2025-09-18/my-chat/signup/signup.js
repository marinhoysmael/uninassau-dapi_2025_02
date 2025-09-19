document.getElementById("botaoCadastrar")
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
        fetch("http://" +urlServer + "/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(async response => {
            if(response.ok) {
                alert("Usuario cadastrado com sucesso!");
            }else {
                alert("Erro ao cadastrar, verifique os dados e tente novamente.");

                return;
            }

            const result = await response.json();
            
            if(result.id){
                sessionStorage.setItem("userId", result.id)
                
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("urlServer", urlServer);
            }
           
            window.location.href = "/chat/chat.html";

            return response.json();
        })
        
    }
    
    

});


document.getElementById("botaoLogar")
.addEventListener("click", function() {
    window.location.href = "/login/login.html";
});