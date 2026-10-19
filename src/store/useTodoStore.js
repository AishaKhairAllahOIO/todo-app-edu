import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) => 
        set((state) => ({
          todos: [
            ...state.todos,
            { id: crypto.randomUUID(), text, completed: false },
          ],
        })),
      

      toggleTodo: (id) => 
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo),
        })),
    

      removeTodo: (id) => 
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      editTodo: (id, newText) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo),
        })),
      

      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    {
      name: 'todo-zustand',
      partialize: (state) => ({ todos: state.todos }),
    }
 )
)

export default useTodoStore