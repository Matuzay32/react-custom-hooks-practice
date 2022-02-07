import React from 'react';
import useTodos from '../hooks/useTodos';

const initialTodos = [
	{ id: 1, title: "aprendiendo react" },
	{ id: 2, title: "aprendiendo react" },
	{ id: 3, title: "aprendiendo react" },
];



const TodoApp = () => {

const  [todos, addTodo, deleteTodo] = useTodos(initialTodos);




    return (
        <div>
            <h1>Tareas Componente</h1>


            <button onClick={ ()=> addTodo({title: 'Nueva tarea agregada'})}>Agregar nueva tarea</button>

            <ul>

            {todos.map((e)=>{
               return <li key={e.id}>
                    {e.title} 
                    <button onClick={()=>deleteTodo(e.id)}> Delete </button>
                </li>
                
            })}
                
            </ul>
        </div>
    );
};


export default TodoApp;