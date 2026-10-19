import useTodoStore from '../store/useTodoStore'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos)

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-heart" aria-hidden="true">♡</span>
        <p>لا توجد مهام بعد. أضيفي أول مهمة للبدء.</p>
      </div>
    )
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}