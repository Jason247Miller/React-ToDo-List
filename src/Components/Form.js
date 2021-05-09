import React from "react"; 

//component creation
/*
    function Form(){}
*/
//or

//create the form component and pass in the props set in the app
const Form = ({setInputText, todos, setToDos, inputText, setStatus}) => {
//inputTextHandler Event is called each time text is changed 
const inputTextHandler = (e) => 
{
   //gets the even target, the input box, and tehn retrieves the valeu from it
    console.log(e.target.value); 
    //set the inputText created  state equal to the inputted text
    setInputText(e.target.value); 
}

const submitToDoHandler = (e) => {
     e.preventDefault(); //prevents the page from refreshing each time   
     /*    */  
     setToDos([
    ...todos, {text: inputText, completed:false, id:Math.random() * 1000 }]);
     setInputText(""); 

}
const statusHandler = (e) => {
  setStatus(e.target.value);
}

    return ( 
    <form>
       
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button> 
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>); 
} //end Form 

export default Form; 