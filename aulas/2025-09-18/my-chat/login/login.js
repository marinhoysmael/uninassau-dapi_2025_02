document.getElementById("botaoEntrar")
    .addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const urlServer = document.getElementById("urlserver").value;

        if (email && urlServer) {

            //criando o objeto com os dados do login JSON
            const loginData = {
                email: email,
            };

            
            fetch("http://" + urlServer + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }).then(async response => {
                if(response.ok) {
                    alert("Usuario logado com sucesso!");

                    const result = await response.json();

                    if (result) {
                        sessionStorage.setItem("userId", result.id)
                        sessionStorage.setItem("username", result.nickname);
                        sessionStorage.setItem("email", email);
                        sessionStorage.setItem("urlServer", urlServer);
                    }

                    window.location.href = "/chat/chat.html";
                } else {

                    const result = await response.json();
                    console.error("Erro ao fazer login:", result);
                    alert("Erro ao logar: " + result.error);
                    return;
                }
            });
        
        }

    });

document.getElementById("botaoCadastrar")
    .addEventListener("click", function () {
        window.location.href = "/signup/signup.html";
    });