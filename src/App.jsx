import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, Moon, Sun, Filter } from 'lucide-react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'

export default function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Cargar todos del localStorage al montar
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error al cargar todos:', error)
      }
    }
  }, [])

  // Guardar todos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Aplicar modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const addTodo = (title, priority = 'medium') => {
    const newTodo = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: null
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newTitle) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    if (filter === 'high') return todo.priority === 'high'
    if (filter === 'medium') return todo.priority === 'medium'
    if (filter === 'low') return todo.priority === 'low'
    return true
  })

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
    high: todos.filter(t => t.priority === 'high' && !t.completed).length
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                ✓ Task Manager
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Organize your tasks efficiently</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.active}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.high}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">High Priority</div>
            </div>
          </div>

          {/* Add Todo Form */}
          <TodoForm onAdd={addTodo} />

          {/* Filter Bar */}
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />

          {/* Todo List */}
          <div className="card mt-6">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {filter === 'all' ? 'No tasks yet. Add one to get started!' : 'No tasks match this filter.'}
                </p>
              </div>
            ) : (
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>Tasks saved automatically to your browser</p>
          </div>
        </div>
      </div>
    </div>
  )
}
