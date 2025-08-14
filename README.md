# Disciplina Desenvolvimento de Aplicações para Internet - 2025 / 02


# 📚 Trabalho de Conclusão da Disciplina  
## Desenvolvimento Fullstack com Angular e Node.js  

Este documento descreve os **projetos finais** da disciplina, divididos por equipes e com escopo adaptado para 4 a 5 integrantes.  
Cada equipe será responsável por desenvolver **frontend** em Angular e **backend** em Node.js, com repositório no GitHub e controle de tarefas via Trello ou GitHub Projects.  


## Orientações Gerais

- **Equipes**: 4 a 5 alunos
- **Tecnologias**: Backend (Node.js + Express), Frontend (Angular), Banco de Dados (MongoDB ou PostgreSQL)
- **Controle de versão**: GitHub
- **Gestão de tarefas**: Trello ou GitHub Projects
- **Metodologia**: Scrum (Sprints quinzenais)
- **Apresentações**: A cada 15 dias (Review da Sprint)
- **Entrega final**: Apresentação do sistema completo + repositório GitHub
---

## 📅 Metodologia
- **Duração:** 3 Sprints (2 semanas cada).
- **Ciclos:**  
  - **Sprint 1:** Levantamento de requisitos, protótipo, setup do projeto, API base.  
  - **Sprint 2:** Implementação das principais funcionalidades.  
  - **Sprint 3:** Ajustes finais, testes e apresentação.
- **Apresentação:** Ao final de cada sprint, a equipe apresenta o que foi planejado, implementado e pendente.
---

## 📋 Estrutura de Entrega

Cada projeto deve conter:
- **Frontend:** Angular, responsivo, com rotas e componentes reutilizáveis.  
- **Backend:** Node.js com Express, API REST, banco de dados MongoDB ou PostgreSQL.  
- **Integração:** Comunicação via HTTP entre frontend e backend.  
- **Controle de Versão:** GitHub com commits frequentes e organizados.  
- **Gestão de Tarefas:** Trello ou GitHub Projects com Kanban.

---

## 📝 Exemplo de Requisitos e Histórias de Usuário

A seguir, um **modelo** que se aplica a todos os temas, adaptando o contexto de cada projeto.

### Requisito Funcional 1 — Cadastro de Usuário
**História de Usuário:**  
> Como visitante, quero criar uma conta informando nome, e-mail e senha para acessar as funcionalidades restritas.

**Critérios de Aceite:**
- Deve validar campos obrigatórios.
- Senha deve ter no mínimo 8 caracteres.
- E-mail deve ser único no sistema.
- Ao cadastrar, o usuário deve receber mensagem de sucesso.
---

### Requisito Funcional 2 — Autenticação
**História de Usuário:**  
> Como usuário cadastrado, quero fazer login no sistema para acessar minhas informações.

**Critérios de Aceite:**
- Deve validar credenciais.
- Retornar erro caso e-mail ou senha estejam incorretos.
- Manter sessão ativa até logout.

---

### Requisito Funcional 3 — Cadastro de Entidade Principal
*(Ex.: Livros, Quadras, Gastos, Pedidos, Cursos, Consultas, etc.)*  
**História de Usuário:**  
> Como administrador, quero cadastrar e gerenciar itens do sistema para manter os dados atualizados.

**Critérios de Aceite:**
- Permitir cadastrar, editar e excluir.
- Validar campos obrigatórios.
- Listagem deve ser atualizada automaticamente.

---

### Requisito Funcional 4 — Listagem e Busca
**História de Usuário:**  
> Como usuário, quero visualizar e buscar itens cadastrados para encontrar rapidamente o que preciso.

**Critérios de Aceite:**
- Listagem deve exibir todos os itens.
- Campo de busca deve filtrar em tempo real.
- Paginação se houver mais de 20 itens.

---

### Requisito Funcional 5 — Ações Específicas do Tema
*(Ex.: Reservar quadra, registrar gasto, fazer pedido, matricular-se em curso, etc.)*  
**História de Usuário:**  
> Como usuário, quero realizar a ação principal do sistema para atingir o objetivo do aplicativo.

**Critérios de Aceite:**
- Deve validar regras de negócio do tema.
- Exibir confirmação após sucesso.
- Salvar no banco de dados.

---

## 📊 Avaliação
- **Gestão do Projeto:** 20%  
- **Qualidade do Código:** 20%  
- **Entrega das Funcionalidades:** 30%  
- **Apresentações e Comunicação:** 20%  
- **Documentação:** 10%

---

## 📦 Entregáveis por Sprint
**Sprint 1:**  
- Documento de requisitos.
- Protótipo em Figma ou similar.
- Estrutura inicial do projeto (frontend e backend).

**Sprint 2:**  
- Funcionalidades principais implementadas.
- Integração front-back funcionando.
- Deploy inicial (opcional).

**Sprint 3:**  
- Funcionalidades extras e ajustes finais.
- Testes realizados.
- Apresentação final e documentação.

---

## 📜 Observações
- O escopo deve ser ajustado para ser viável dentro do tempo da disciplina.  
- A complexidade deve ser equilibrada para permitir aprendizado e entrega.  
- Todo o código deve estar no GitHub da equipe com histórico claro de commits.

---

## Temas e Detalhamentos

### 1. Sistema de Controle de Biblioteca Escolar
**Descrição:** Sistema para cadastro, empréstimo e devolução de livros.

**Requisitos Funcionais:**
1. Cadastro de livros com título, autor, ISBN e quantidade.
2. Cadastro de alunos.
3. Registro de empréstimos e devoluções.
4. Consulta de livros disponíveis.

**Requisitos Não Funcionais:**
- Interface responsiva.
- API REST segura com autenticação JWT.

**Histórias de Usuário:**
- **Como bibliotecário**, quero cadastrar novos livros **para que** estejam disponíveis para empréstimo.
  - **Critérios de Aceite:** Cadastro com campos obrigatórios; confirmação visual; validação de ISBN.

**Etapas/Sprints:**
- Sprint 1: CRUD de livros e alunos.
- Sprint 2: Empréstimos e devoluções.
- Sprint 3: Autenticação e relatórios.

---

### 2. Sistema de Reservas de Salas de Reunião
**Descrição:** Sistema para agendamento de salas de reunião em uma empresa.

**Requisitos Funcionais:**
1. Cadastro de salas.
2. Agendamento de reservas.
3. Cancelamento de reservas.
4. Visualização de agenda.

**Requisitos Não Funcionais:**
- Integração com calendário (Google Calendar opcional).
- Disponível via mobile e desktop.

**Histórias de Usuário:**
- **Como funcionário**, quero agendar uma sala **para que** possa organizar reuniões.
  - **Critérios de Aceite:** Não permitir agendamento duplicado; confirmação por e-mail.

**Etapas/Sprints:**
- Sprint 1: CRUD de salas.
- Sprint 2: Agendamento e cancelamento.
- Sprint 3: Integração e autenticação.

---

### 3. Plataforma de Vendas de Produtos Artesanais
**Descrição:** Marketplace para venda de produtos artesanais.

**Requisitos Funcionais:**
1. Cadastro de vendedores e produtos.
2. Carrinho de compras.
3. Checkout e pagamento.
4. Avaliações de produtos.

**Requisitos Não Funcionais:**
- Suporte a múltiplos meios de pagamento.
- Design amigável e moderno.

**Histórias de Usuário:**
- **Como comprador**, quero adicionar produtos ao carrinho **para que** possa finalizar a compra.
  - **Critérios de Aceite:** Carrinho persistente; cálculos corretos de preço.

**Etapas/Sprints:**
- Sprint 1: Cadastro e listagem de produtos.
- Sprint 2: Carrinho e checkout.
- Sprint 3: Avaliações e melhorias.

---

### 4. Sistema de Controle Financeiro Pessoal
**Descrição:** Aplicativo para gerenciar receitas e despesas pessoais.

**Requisitos Funcionais:**
1. Cadastro de receitas e despesas.
2. Categorias personalizadas.
3. Relatórios e gráficos.
4. Exportação de dados.

**Requisitos Não Funcionais:**
- Segurança de dados.
- Suporte a dispositivos móveis.

**Histórias de Usuário:**
- **Como usuário**, quero registrar minhas despesas **para que** eu possa controlar meus gastos.
  - **Critérios de Aceite:** Categorias visíveis; saldo atualizado automaticamente.

**Etapas/Sprints:**
- Sprint 1: CRUD de receitas e despesas.
- Sprint 2: Relatórios e gráficos.
- Sprint 3: Exportação de dados.

---

### 5. Sistema de Reserva de Consultas Médicas
**Descrição:** Plataforma para agendar consultas e exames.

**Requisitos Funcionais:**
1. Cadastro de médicos e especialidades.
2. Agendamento de consultas.
3. Cancelamento e reagendamento.
4. Notificações automáticas.

**Requisitos Não Funcionais:**
- Interface intuitiva.
- Disponível 24/7.

**Histórias de Usuário:**
- **Como paciente**, quero agendar consultas **para que** possa garantir atendimento.
  - **Critérios de Aceite:** Não permitir sobreposição; confirmação imediata.

**Etapas/Sprints:**
- Sprint 1: Cadastro de médicos.
- Sprint 2: Agendamentos.
- Sprint 3: Notificações.

---

### 6. Sistema de Controle de Estoque
**Descrição:** Sistema para monitorar estoque de produtos.

**Requisitos Funcionais:**
1. Cadastro de produtos.
2. Entrada e saída de estoque.
3. Alertas de baixo estoque.
4. Relatórios.

**Requisitos Não Funcionais:**
- Performance alta.
- Exportação para Excel.

**Histórias de Usuário:**
- **Como gerente**, quero visualizar relatórios **para que** eu possa tomar decisões.
  - **Critérios de Aceite:** Relatório exportável; atualização em tempo real.

**Etapas/Sprints:**
- Sprint 1: CRUD de produtos.
- Sprint 2: Movimentações.
- Sprint 3: Relatórios.

---

### 7. Sistema de Reserva de Restaurantes
**Descrição:** Plataforma para reservas de mesas.

**Requisitos Funcionais:**
1. Cadastro de restaurantes.
2. Reserva de mesas.
3. Avaliação do atendimento.
4. Cancelamento.

**Requisitos Não Funcionais:**
- Compatível com dispositivos móveis.
- Integração com mapas.

**Histórias de Usuário:**
- **Como cliente**, quero reservar uma mesa **para que** eu tenha garantia de atendimento.
  - **Critérios de Aceite:** Reserva confirmada; opção de cancelamento.

**Etapas/Sprints:**
- Sprint 1: Cadastro.
- Sprint 2: Reservas.
- Sprint 3: Avaliações.

---

### 8. Sistema de Gestão de Treinamentos
**Descrição:** Plataforma para gerenciar cursos e treinamentos.

**Requisitos Funcionais:**
1. Cadastro de cursos.
2. Inscrição de alunos.
3. Controle de progresso.
4. Emissão de certificados.

**Requisitos Não Funcionais:**
- Compatível com e-learning.
- Geração automática de certificados.

**Histórias de Usuário:**
- **Como aluno**, quero ver meu progresso **para que** eu saiba o que falta completar.
  - **Critérios de Aceite:** Barras de progresso; certificado liberado ao final.

**Etapas/Sprints:**
- Sprint 1: Cadastro de cursos.
- Sprint 2: Progresso.
- Sprint 3: Certificados.

---

### 9. Plataforma de Adoção de Animais
**Descrição:** Sistema para adoção de animais.

**Requisitos Funcionais:**
1. Cadastro de animais.
2. Solicitação de adoção.
3. Histórico de adoções.
4. Avaliação de adotantes.

**Requisitos Não Funcionais:**
- Interface amigável.
- Fotos otimizadas.

**Histórias de Usuário:**
- **Como adotante**, quero ver fotos e informações **para que** eu possa escolher um animal.
  - **Critérios de Aceite:** Fotos carregam rápido; informações completas.

**Etapas/Sprints:**
- Sprint 1: Cadastro.
- Sprint 2: Solicitações.
- Sprint 3: Histórico.

---

### 10. Sistema de Gestão de Condomínios
**Descrição:** Aplicativo para comunicação e gestão de condomínios.

**Requisitos Funcionais:**
1. Cadastro de moradores.
2. Reserva de áreas comuns.
3. Avisos e comunicados.
4. Controle de pagamentos.

**Requisitos Não Funcionais:**
- Segurança de dados.
- App responsivo.

**Histórias de Usuário:**
- **Como síndico**, quero publicar avisos **para que** todos fiquem informados.
  - **Critérios de Aceite:** Notificação enviada; histórico de avisos.

**Etapas/Sprints:**
- Sprint 1: Cadastro.
- Sprint 2: Reservas.
- Sprint 3: Pagamentos.

---

### 11. Plataforma de Troca e Venda de Livros Usados
**Descrição:** Sistema para compra e troca de livros usados.

**Requisitos Funcionais:**
1. Cadastro de livros.
2. Solicitação de troca ou compra.
3. Avaliação dos vendedores.
4. Histórico de transações.

**Requisitos Não Funcionais:**
- Interface leve.
- Busca otimizada.

**Histórias de Usuário:**
- **Como usuário**, quero buscar livros por título ou autor **para que** eu encontre facilmente.
  - **Critérios de Aceite:** Busca por palavras-chave; resultados relevantes.

**Etapas/Sprints:**
- Sprint 1: Cadastro.
- Sprint 2: Solicitações.
- Sprint 3: Avaliações.
