import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Entender Two-Way Data Binding', completed: true },
    { id: 3, text: 'Praticar com exemplos', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodoText = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="todo-list">
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Adicionar nova tarefa..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      <div className="todo-filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Todas ({totalCount})
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Ativas ({totalCount - completedCount})
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Concluídas ({completedCount})
        </button>
      </div>

      <div className="todos">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onUpdate={(newText) => updateTodoText(todo.id, newText)}
          />
        ))}
        {filteredTodos.length === 0 && (
          <p className="no-todos">Nenhuma tarefa encontrada</p>
        )}
      </div>

      <div className="todo-stats">
        <p><strong>Total:</strong> {totalCount} tarefas</p>
        <p><strong>Concluídas:</strong> {completedCount} tarefas</p>
        <p><strong>Restantes:</strong> {totalCount - completedCount} tarefas</p>
      </div>
    </div>
  )
}

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleUpdate = () => {
    onUpdate(editText.trim())
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleUpdate()
              if (e.key === 'Escape') handleCancel()
            }}
            autoFocus
          />
          <button onClick={handleUpdate}>✓</button>
          <button onClick={handleCancel}>✗</button>
        </div>
      ) : (
        <div className="todo-content">
          <span 
            className="todo-text"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={onDelete}>🗑️</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoList