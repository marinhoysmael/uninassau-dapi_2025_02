# Servidor de Bate-Papo Node.js

Este projeto é um servidor de bate-papo simples em Node.js. Usuários informam email e nickname para entrar na sala. As mensagens são armazenadas em memória e consultadas a cada meio segundo.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node index.js
   ```

## Funcionalidades
- Cadastro de usuário (email e nickname)
- Envio e recebimento de mensagens em tempo real
- Mensagens armazenadas em um array em memória

## Observações
- Este projeto não utiliza banco de dados, apenas armazenamento em memória.
- Para produção, recomenda-se persistência em banco e autenticação.
