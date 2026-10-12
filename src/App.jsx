import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Toolbar from './components/Toolbar'

export default function App() {
  return (
    <div className="app">
      <h1 className="app-title">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </svg>
        <span>مهامي</span>
      </h1>

      <AddTodo />
      <Toolbar />
      <TodoList />
    </div>
  )
}