import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } }
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo(state, action) {
      const todoToDelete = state.find(todo => todo.id === action.payload)
        state.filter(todo => todo.id !== todoToDelete)
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
