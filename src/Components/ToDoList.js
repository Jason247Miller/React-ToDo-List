

import React from 'react';

import ToDo from "./ToDo";
  

const ToDoList = ({todos, setToDos, filteredToDos} ) => {
  
    return (
    
    <div className="todo-container">
    <ul className="todo-list">
     {
     
      filteredToDos.map((todo) => (
        <ToDo 
        setToDos={setToDos}
        todos={todos}
        key={todo.id}
        todo={todo}
        text={todo.text}
       
       
         />
      ))
     
    }
    </ul>
     
  </div>
  ); 
}; 
//export compoenet to be used in app
export default ToDoList; 