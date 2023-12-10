import { useState } from 'react'
import './App.css'

/* Main App Function */
const App = () => {

  /* Use states to manage change. todos is used for the list of todos and todo is use for creating individual todo tasks*/
  const [todos,setTodos] = useState([]);
  const [todo, setTodo] = useState("");
 
  /* Function to add each todo task to the todos list */
  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos,todo]);
      setTodo("");
    }
  };
  /* The three dot (...) operator is known as the spread operator is used to expand an iterable inside a reciever. The new todos will begin be iterating thorugh the old todos then end with the new todo added to the end*/
  
  /* Function used to delete selected todo */
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  
  return (
    
      <div className='App'>
        <h1>Todo List</h1>

        <div className='input-wrapper'>
          <input 
          type='text' 
          name = 'todo' 
          value = {todo} 
          placeholder='Create a new todo' 
          onChange={(e) => {setTodo(e.target.value)}}/>

          <button className='add-button' onClick={addTodo}>Add</button>
        </div>

        {todos?.length > 0 ? (
          <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button className="delete-button" onClick={() => {deleteTodo(todo)}}>Delete</button>
            </div>
          ))}
        </ul>
        ):(<div className='empty'>
          <p className='emptyText'>No Task Found</p>
          </div>)}

      </div>
    
  );
};

export default App;
