import useTodoStore from '../store/useTodoStore'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos)

  if (todos.length === 0) {
    return <p>لا توجد مهام بعد.</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}