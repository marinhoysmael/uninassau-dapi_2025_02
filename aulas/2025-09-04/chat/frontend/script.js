let email = '';
let nickname = '';

function enterChat() {
  email = document.getElementById('email').value;
  nickname = document.getElementById('nickname').value;
  if (!email || !nickname) {
    alert('Preencha email e nickname!');
    return;
  }
  fetch('http://10.10.128.50:3000/enter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, nickname })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
        startPolling();
      } else {
        alert('Erro ao entrar na sala.');
      }
    });
}

function sendMessage() {
  const text = document.getElementById('messageInput').value;
  if (!text) return;
  fetch('http://10.10.128.50:3000/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, nickname, text })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById('messageInput').value = '';
        // Mensagem enviada, aguardar próximo polling
      } else {
        alert('Erro ao enviar mensagem.');
      }
    });
}

function startPolling() {
  setInterval(() => {
  fetch('http://10.10.128.50:3000/messages')
      .then(res => res.json())
      .then(data => {
        renderMessages(data);
        renderUsers(data);
      });
  }, 500);
}

function renderMessages(messages) {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<strong>${msg.nickname}:</strong> ${msg.text}`;
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function renderUsers(messages) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  const users = Array.from(new Set(messages.map(m => m.nickname)));
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    userList.appendChild(li);
  });
}


document.getElementById("messageInput").addEventListener("keypress", function(evento){

    if(evento.key == 'Enter'){
        sendMessage();
    }
});