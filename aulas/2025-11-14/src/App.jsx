import { useState } from 'react'
import './App.css'
import SimpleInput from './components/SimpleInput'
import FormExample from './components/FormExample'
import TodoList from './components/TodoList'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Two-Way Data Binding Examples</h1>
        <p>Exemplos práticos de two-way data binding em React</p>
      </header>
      
      <main className="app-main">
        <section className="example-section">
          <h2>1. Input Simples</h2>
          <SimpleInput />
        </section>

        <section className="example-section">
          <h2>2. Formulário Completo</h2>
          <FormExample />
        </section>

        <section className="example-section">
          <h2>3. Lista de Tarefas</h2>
          <TodoList />
        </section>

        <section className="example-section">
          <h2>4. Perfil de Usuário</h2>
          <UserProfile />
        </section>
      </main>
    </div>
  )
}

export default App
