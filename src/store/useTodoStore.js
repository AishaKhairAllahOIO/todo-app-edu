import { create } from 'zustand'
import { loadTodos, saveTodos } from './storage'


const useTodoStore = create((set, get) => ({
  todos: loadTodos(),

  addTodo: (text) =>{
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), text, completed: false },
      ],
    }))
        saveTodos(get().todos)
  },

    toggleTodo: (id) =>{
  set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
  }))
    saveTodos(get().todos)
},

  removeTodo: (id) =>{
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
    saveTodos(get().todos)},

   editTodo: (id, newText) =>{
  set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ),
  })),
  saveTodos(get().todos)
},
  clearCompleted: () =>{
  set((state) => ({
    todos: state.todos.filter((todo) => !todo.completed),
  }))    ,
  saveTodos(get().todos)
}
}))

export default useTodoStore