import { useState } from 'react'
import useTodoStore from '../store/useTodoStore'

export default function AddTodo() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتبي مهمة جديدة..."
      />
      <button type="submit">إضافة مهمة</button>
    </form>
  )
}