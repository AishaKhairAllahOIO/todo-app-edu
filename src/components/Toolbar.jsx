import useTodoStore from '../store/useTodoStore'

export default function Toolbar() {
  const todos = useTodoStore((state) => state.todos)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)

  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="toolbar">
      <span>المتبقية: {activeCount}</span>
      <button
        onClick={clearCompleted}
        disabled={completedCount === 0}
      >
        حذف المكتملة ({completedCount})
      </button>
    </div>
  )
}