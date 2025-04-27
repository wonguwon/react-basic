import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  filter: 'all', // all, active, completed
  addTodo: (text) => 
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    })),
  setFilter: (filter) => set({ filter }),
  getFilteredTodos: () => {
    const { todos, filter } = useTodoStore.getState();
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
}));

export default useTodoStore; 