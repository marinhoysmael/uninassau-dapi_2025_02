document.getElementById('logout-btn')
.addEventListener('click', function() {
    localStorage.clear();
    sessionStorage.clear();
    // Redireciona para a página de login (ajuste o caminho se necessário)
    window.location.href = '../login/login.html';
});

document.getElementById("botao-enviar-mensagem")
.addEventListener("click", function(event) {
   
    event.preventDefault(); // Evita o envio do formulário
    const messageInput = document.getElementById("chat-input");

    const message = document.getElementById("chat-input").value;
    messageInput.value = ""; // Limpa o campo de entrada após enviar
    
    enviarMensagem(message);
});


function enviarMensagem(mensagem){
    console.log("Mensagem enviada: " + mensagem);

    const urlServer = sessionStorage.getItem("urlServer");
    const userId = sessionStorage.getItem("userId");
   
    const payload = {
        userId : userId,
        text: mensagem  
    };

    fetch("http://" + urlServer + "/message",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
}

document.addEventListener("DOMContentLoaded", async function() {
   
    const urlServer = sessionStorage.getItem("urlServer");
    const userId = sessionStorage.getItem("userId");
    const username = sessionStorage.getItem("username");

    if(!urlServer || !userId || !username) {
        window.location.href = "../login/login.html";
        return;
    }

    while(true) {
        const response = await fetch("http://" + urlServer + "/messages");
        
        if(response.ok) {
            const messages = await response.json();

            const chatMessagesDiv = document.getElementById("chat-messages");
            chatMessagesDiv.innerHTML = ""; // Limpa as mensagens anteriores
            
            messages.forEach(msg => {
                const messageElement = document.createElement("div");
                messageElement.classList.add("mb-2");
                messageElement.innerHTML = `<span class="badge bg-primary">${msg.nickname}</span> <span class="ms-2">${msg.text}</span>`;
                chatMessagesDiv.appendChild(messageElement);
            });

            // Rola para a última mensagem
            chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
        } else {
            console.error("Erro ao buscar mensagens");
        }

        await sleep(1000); // Espera 3 segundos antes de buscar novamente
    }
});

sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
