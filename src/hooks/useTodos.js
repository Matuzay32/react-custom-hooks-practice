import React, { useState } from 'react';



const useTodos = (initialTodos) => {

    
const [todos , setTodos] = useState(initialTodos);   

const addTodo  = (newTodo)=>{

     newTodo.id = Date.now();
     
    setTodos([...todos, newTodo])

 }

 const deleteTodo  = (idTodo)=>{

    const fiteredTodo =   todos.filter((tareaFiltrada)=> tareaFiltrada.id != idTodo)

        setTodos(fiteredTodo);

 }


  return [
      todos,
      addTodo,
      deleteTodo,
  ]


};


export default useTodos;