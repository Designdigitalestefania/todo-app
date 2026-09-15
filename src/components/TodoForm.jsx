import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title, priority)
      setTitle('')
      setPriority('medium')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="flex gap-3 mb-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="input-base flex-1"
          autoFocus
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="input-base w-32"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Add Task
      </button>
    </form>
  )
}
