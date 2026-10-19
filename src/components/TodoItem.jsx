import { useState } from 'react'
import useTodoStore from '../store/useTodoStore'

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const editTodo = useTodoStore((state) => state.editTodo)

  const handleSave = () => {
    const trimmed = draft.trim()
    if (!trimmed) return
    editTodo(todo.id, trimmed)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setDraft(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />

          <div className="actions">
            <button className="btn-save" onClick={handleSave} aria-label="حفظ التعديل" title="حفظ التعديل">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>

            <button onClick={handleCancel} aria-label="إلغاء التعديل" title="إلغاء التعديل">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'todo-text completed' : 'todo-text'}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>

          <div className="actions">
            <button onClick={() => setIsEditing(true)} aria-label="تعديل المهمة" title="تعديل المهمة">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </button>

            <button
              className="btn-delete"
              onClick={() => removeTodo(todo.id)}
              aria-label="حذف المهمة"
              title="حذف المهمة"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
            </button>
          </div>
        </>
      )}
    </li>
  )
}