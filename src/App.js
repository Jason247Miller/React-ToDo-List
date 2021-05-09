
// curly braces allow you to import specefics from
// the react library
//ex.) useState is imported below from react library 
import React, {useState, useEffect} from "react"; 
import './App.css';
//import components
import Form from "./Components/Form"; 
import ToDoList from "./Components/ToDoList"; 

function App() {
 
  //state declarations
  //App() gets called on submit, so each time a submit is conducted
  //the input text state will be cleared
  const [inputText, setInputText] = useState(""); 
  const [todos, setToDos] = useState([]); 
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]); 


    //functions
    //Use Effect

    //run once when the app starts 
    useEffect(() => {
      getLocalToDos();
    
    }, []);
    useEffect(() =>{
      filterHandler();
      saveLocalToDos(); 
    }, [todos, status]) ;
 
  const filterHandler = () => {
    switch(status)
    {
      case 'completed':
        setFilteredToDos(todos.filter(todo => todo.completed === true ))
        break;
      case 'uncompleted':
          setFilteredToDos(todos.filter(todo => todo.completed === false))
          break;
      default:
          setFilteredToDos(todos); 
          break; 
        
    }
  }

  //save local todos
  const saveLocalToDos = () => {
    
      localStorage.setItem('todos', JSON.stringify(todos)); 
    
   
  }
  const getLocalToDos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([])); 
    }
    else{
     let todoLocal =  JSON.parse(localStorage.getItem('todos')); 
     setToDos(todoLocal); 
    }
  }







 
 
  return (
    <div className="App">
      <header>
      <h1>Jason's To-Do List</h1>
      </header>
       
      <Form
       /*send states to the form */
       inputText={inputText} 
       todos={todos}
       setToDos={setToDos}
       setStatus={setStatus}
     
         setInputText ={setInputText}
          />
      <ToDoList setToDos={setToDos}todos={todos}  filteredToDos={filteredToDos}/>
    </div>
  );
};

export default App;
