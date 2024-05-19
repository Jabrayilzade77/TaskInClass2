import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import todoReducer from '../features//todo/TodoSlice'


export const store = configureStore({
  reducer: {
    todo: todoReducer, 
    counter: counterReducer
  },
})