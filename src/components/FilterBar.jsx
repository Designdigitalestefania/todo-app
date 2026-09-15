import { Filter } from 'lucide-react'

export default function FilterBar({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'active', label: 'Active', icon: '🔄' },
    { id: 'completed', label: 'Completed', icon: '✅' },
    { id: 'high', label: 'High Priority', icon: '🔴' },
    { id: 'medium', label: 'Medium Priority', icon: '🟡' },
    { id: 'low', label: 'Low Priority', icon: '🟢' },
  ]

  return (
    <div className="card mt-6">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <span className="font-semibold text-gray-900 dark:text-white">Filter Tasks</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-lg transition-all ${
              currentFilter === filter.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <span className="mr-2">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
