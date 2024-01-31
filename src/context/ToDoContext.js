import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false,
    }],
    addTodo:(todo) =>{},
    deleteTodo:(id) => {},
    toggleComplete:(id) =>{},
    updatedTodo:(id,todo) =>{},

})


export  const useTodo =() => useContext(TodoContext);

export const TodoProvider =TodoContext.Provider;
