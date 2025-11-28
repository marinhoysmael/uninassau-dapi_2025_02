# React Two-Way Data Binding Examples

Este projeto demonstra exemplos práticos de **two-way data binding** em React usando hooks como `useState` e técnicas modernas de manipulação de estado.

## 🚀 Recursos

- ✅ **Input Simples**: Exemplos básicos com text, number e checkbox
- ✅ **Formulário Completo**: Formulário complexo com múltiplos tipos de input
- ✅ **Lista de Tarefas**: Todo list interativo com filtros e edição inline
- ✅ **Perfil de Usuário**: Gerenciamento complexo de estado com objetos aninhados

## 📋 Exemplos Incluídos

### 1. Input Simples
- Text input com sincronização bidirecional
- Number input com cálculos em tempo real
- Checkbox com status dinâmico

### 2. Formulário Completo
- Múltiplos tipos de input (text, email, select, textarea, checkbox)
- Validação e manipulação de estado unificado
- Preview em tempo real dos dados
- Funcionalidades de reset e export

### 3. Lista de Tarefas
- Adicionar, remover e editar tarefas
- Marcar tarefas como concluídas
- Filtros dinâmicos (todas, ativas, concluídas)
- Edição inline com double-click
- Estatísticas em tempo real

### 4. Perfil de Usuário
- Gerenciamento de informações pessoais
- Arrays dinâmicos (habilidades)
- Objetos aninhados (preferências, redes sociais)
- Computed values automáticos
- Export de dados em JSON

## 🛠️ Tecnologias

- **React 18** com hooks modernos
- **Vite** para desenvolvimento rápido
- **CSS3** com design responsivo
- **ESLint** para qualidade do código

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Executar no VS Code
1. Abra o projeto no VS Code
2. Use `Ctrl+Shift+P` e execute "Tasks: Run Task"
3. Selecione "Start Development Server"
4. Acesse `http://localhost:5173`

## 📚 Conceitos Demonstrados

### Two-Way Data Binding em React

React não possui two-way data binding nativo como Angular, mas podemos simular esse comportamento usando:

#### 1. **useState Hook**
```jsx
const [value, setValue] = useState('')

// Bind bidirecional
<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

#### 2. **Controlled Components**
Todos os inputs são "controlled components", onde o React controla o valor:
```jsx
// ❌ Uncontrolled (React não controla)
<input defaultValue="texto" />

// ✅ Controlled (React controla)
<input 
  value={state} 
  onChange={(e) => setState(e.target.value)} 
/>
```

#### 3. **State Management Patterns**

**Estado Simples:**
```jsx
const [name, setName] = useState('')
```

**Estado de Objeto:**
```jsx
const [user, setUser] = useState({ name: '', email: '' })

// Atualização imutável
setUser(prev => ({ ...prev, name: newName }))
```

**Estado de Array:**
```jsx
const [items, setItems] = useState([])

// Adicionar item
setItems(prev => [...prev, newItem])

// Remover item
setItems(prev => prev.filter(item => item.id !== id))

// Atualizar item
setItems(prev => prev.map(item => 
  item.id === id ? { ...item, ...updates } : item
))
```

#### 4. **Custom Handlers**
```jsx
// Handler genérico para formulários
const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }))
}
```

## 🎯 Padrões Utilizados

- **Immutable Updates**: Sempre criamos novos objetos/arrays
- **Controlled Components**: React controla todos os inputs
- **Computed Properties**: Valores derivados com useEffect
- **Event Handling**: Manipulação consistente de eventos
- **State Normalization**: Estruturas de estado organizadas

## 📱 Responsividade

O projeto inclui design responsivo que se adapta a diferentes tamanhos de tela:
- Desktop: Layout em grid com múltiplas colunas
- Tablet: Layout ajustado com menos colunas
- Mobile: Layout em coluna única

## 🔧 Estrutura do Projeto

```
src/
├── components/
│   ├── SimpleInput.jsx      # Exemplos básicos
│   ├── FormExample.jsx      # Formulário completo
│   ├── TodoList.jsx         # Lista de tarefas
│   └── UserProfile.jsx      # Perfil complexo
├── App.jsx                  # Componente principal
├── App.css                  # Estilos globais
└── main.jsx                 # Entry point
```

## 🤝 Contribuição

Sinta-se à vontade para contribuir com novos exemplos ou melhorias!

## 📄 Licença

Este projeto é fornecido como material educacional.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
