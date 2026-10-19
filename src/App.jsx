import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Toolbar from './components/Toolbar'

export default function App() {
  return (
    <div className="app">
      <div className="hero-art" aria-hidden="true">
        <svg className="hero-sparkle sparkle-one" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z" fill="currentColor" />
        </svg>
        <svg className="hero-sparkle sparkle-two" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z" fill="currentColor" />
        </svg>
        <svg className="hero-character" viewBox="0 0 180 160" fill="none">
          <ellipse cx="90" cy="145" rx="57" ry="8" fill="#F8E6ED" />
          <path d="M48 35a16 16 0 0 1 16-16h52a16 16 0 0 1 16 16v91a14 14 0 0 1-14 14H62a14 14 0 0 1-14-14V35Z" fill="#FFD6E8" />
          <path d="M57 40a10 10 0 0 1 10-10h46a10 10 0 0 1 10 10v83a8 8 0 0 1-8 8H65a8 8 0 0 1-8-8V40Z" fill="#FFF" />
          <path d="M73 20a17 17 0 0 1 34 0v8H73v-8Z" fill="#E888B0" />
          <circle cx="90" cy="20" r="6" fill="#FFF5FA" />
          <path d="M72 65h38M72 83h38M72 101h21" stroke="#FFD6E8" strokeWidth="5" strokeLinecap="round" />
          <circle cx="64" cy="63" r="5" fill="#78B58B" />
          <path d="m62 63 1.5 1.5L67 61" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="64" cy="81" r="5" fill="#78B58B" />
          <path d="m62 81 1.5 1.5L67 79" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="64" cy="99" r="5" fill="#F3B5CE" />
          <circle cx="81" cy="115" r="2.5" fill="#6B3A52" />
          <circle cx="99" cy="115" r="2.5" fill="#6B3A52" />
          <path d="M85 122q5 5 10 0" stroke="#6B3A52" strokeWidth="2" strokeLinecap="round" />
          <circle cx="75" cy="120" r="4" fill="#FFB3D1" opacity=".7" />
          <circle cx="105" cy="120" r="4" fill="#FFB3D1" opacity=".7" />
        </svg>
      </div>
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
        <span>مهامي اليومية</span>
      </h1>
      <p className="app-subtitle">خطوة صغيرة، وإنجاز وراء إنجاز.</p>

      <AddTodo />
      <Toolbar />
      <TodoList />
    </div>
  )
}