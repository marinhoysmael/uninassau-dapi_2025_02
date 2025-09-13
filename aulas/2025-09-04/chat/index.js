const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const users = new Map();
const messages = [];

// Entrar na sala
app.post('/enter', (req, res) => {
  const { email, nickname } = req.body;


  if (!email || !nickname) {
    return res.status(400).json({ error: 'Email e nickname são obrigatórios.' });
  }
  users.set(email, { email, nickname });
  res.json({ success: true });
});

// Enviar mensagem
app.post('/message', (req, res) => {
  const { email, nickname, text } = req.body;
  if (!email || !nickname || !text) {
    return res.status(400).json({ error: 'Campos obrigatórios: email, nickname, text.' });
  }
  // Verifica se o email está cadastrado
  const userExists = users.some(user => user.email === email);
  if (!userExists) {
    return res.status(403).json({ error: 'Email não cadastrado.' });
  }

  if (text.length > 120) {
    return res.status(400).json({ error: 'Mensagem muito longa. Máximo de 120 caracteres.' });
  }
  // Remove tudo que não for alfanumérico
  const sanitizedText = text.replace(/[^a-zA-Z0-9]/g, '');
  if (sanitizedText.length === 0) {
    return res.status(400).json({ error: 'Mensagem deve conter caracteres alfanuméricos.' });
  }

  messages.push({ email, nickname, text: sanitizedText, timestamp: Date.now() });
  res.json({ success: true });
});

// Buscar mensagens
app.get('/messages', (req, res) => {
  res.status(200).send(messages);
});

app.get('/users', (req, res) => {
  res.status(200).send(Array.from(users.values()));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
