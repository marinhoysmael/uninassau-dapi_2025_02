const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://10.10.128.50:8080',
    'http://10.10.128.50',
    '*'
  ],
  methods: ['GET', 'POST'],
  credentials: false
}));
app.use(express.json());

const users = [];
const messages = [];

// Entrar na sala
app.post('/enter', (req, res) => {
  const { email, nickname } = req.body;
  if (!email || !nickname) {
    return res.status(400).json({ error: 'Email e nickname são obrigatórios.' });
  }
  users.push({ email, nickname });
  res.json({ success: true });
});

// Enviar mensagem
app.post('/message', (req, res) => {
  const { email, nickname, text } = req.body;
  if (!email || !nickname || !text) {
    if(text.length > 180){
        return res.status(400).json({ error: 'Mensagem muito longa. Máximo de 180 caracteres.' });
        
    }
    return res.status(400).json({ error: 'Campos obrigatórios: email, nickname, text.' });
  }
  messages.push({ email, nickname, text, timestamp: Date.now() });
  res.json({ success: true });
});

// Buscar mensagens
app.get('/messages', (req, res) => {
  res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
