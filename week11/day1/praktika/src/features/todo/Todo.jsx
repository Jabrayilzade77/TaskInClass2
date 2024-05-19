import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../todo/TodoSlice";

export function Todo() {
    const [todoItem,  setTodoItem] = useState("")
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" value={todoItem} onChange={(e)=>setTodoItem(e.target.value)} placeholder="work" />
      <button onClick={() => dispatch(addTodo(todoItem))}>add</button>
     
      
      <div>
        {todos.map(x=>(
           <>
            <h1>{x.todo}</h1>
            <button onClick={()=> dispatch(removeTodo(x))}>delete</button>
           </>
        ))}
      </div>
    </div>
  );
}
