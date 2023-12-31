import { useState } from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([]);
  const [todo, setTodo] = useState("");
 
  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos,todo]);
      setTodo("");
    }
  };

  return (
    
      <div className='App'>
        <h1>React Todo App</h1>

        <div className='input-wrapper'>
          <input 
          type='text' 
          name = 'todo' 
          value = {todo} 
          placeholder='Create a new todo' 
          onChange={(e) => {setTodo(e.target.value)}}/>

          <button className='add-button' onClick={addTodo}>Add</button>
        </div>

        {todo?.length > 0 ? (
          <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button className="delete-button">Delete</button>
            </div>
          ))}
        </ul>
        ):(<div className='empty'>
          <p>No Task Found</p>
          </div>)}

      </div>
    
  );
};

export default App;
