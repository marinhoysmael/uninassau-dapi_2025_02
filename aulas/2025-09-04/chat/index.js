const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const users = new Map();
const messages = [];

// Entrar na sala
app.post('/signup', (req, res) => {
  const { email, nickname} = req.body;


  if (!email || !nickname) {
    return res.status(400).json({ error: 'Email e nickname são obrigatórios.' });
  }

  // Validar nickname: somente letras, máximo 10 caracteres
  const nicknameRegex = /^[a-zA-Z]{1,10}$/;
  if (!nicknameRegex.test(nickname)) {
    return res.status(400).json({ error: 'Nickname deve conter apenas letras e ter no máximo 10 caracteres.' });
  }

  if(users.has(email)) {
    return res.status(401).json({ error: 'Email já cadastrado.' });
  }

  const id = crypto.randomUUID();
  users.set(email, { email, nickname, id });
  res.json({ id });
});

app.post('/login', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório.' });
  }

  if(!users.has(email)) {
    return res.status(401).json({ error: 'Email não cadastrado.' });
  }

  const user = users.get(email);
  res.json(user);
});

// Enviar mensagem
app.post('/message', (req, res) => {
  const { userId, text } = req.body;
  
  if (!userId || !text) {
    return res.status(400).json({ error: 'userId e text são obrigatórios.' });
  }

  // Verifica se o email está cadastrado
  const user = Array.from(users.values()).find(u => u.id === userId);
  if (!user) {
    return res.status(401).json({ error: 'Usuário não encontrado.' });
  }

  if (text.length > 120) {
    return res.status(400).json({ error: 'Mensagem muito longa. Máximo de 120 caracteres.' });
  }
  // Remove tudo que não for alfanumérico e espaços
  const sanitizedText = text.replace(/[^a-zA-Z0-9\s]/g, '');
  
  if (sanitizedText.trim().length === 0) {
    return res.status(400).json({ error: 'Mensagem deve conter caracteres alfanuméricos.' });
  }

  messages.push({ nickname: user.nickname, text: sanitizedText, timestamp: Date.now() });
  
  res.json({ success: true });
});

// Buscar mensagens
app.get('/messages', (req, res) => {
  res.status(200).send(messages);
});

app.get('/users', (req, res) => {
  res.status(200).send(Array.from(users.values()));
});

app.put('/users/:email', (req, res) => {
  const { email } = req.params;
  const { nickname } = req.body;

  if (!users.has(email)) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (!nickname) {
    return res.status(400).json({ error: 'Nickname é obrigatório.' });
  }

  // Validar nickname: somente letras, máximo 10 caracteres
  const nicknameRegex = /^[a-zA-Z]{1,10}$/;
  if (!nicknameRegex.test(nickname)) {
    return res.status(400).json({ error: 'Nickname deve conter apenas letras e ter no máximo 10 caracteres.' });
  }

  const user = users.get(email);
  user.nickname = nickname;
  users.set(email, user);

  res.json({ success: true });
});

app.get('/users/:email', (req, res) => {
  const { email } = req.params;

  if (!users.has(email)) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  const user = users.get(email);
  res.json(user);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


