import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addTodo: (state,action) => {

        let newArr = {
            id:uuidv4(),
            todo:action.payload
        }
        state.value.push(newArr)
      
    },
    removeTodo:(state,action)=>{
        state.value = state.value.filter(x=>x.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo,removeTodo } = todoSlice.actions

export default todoSlice.reducer