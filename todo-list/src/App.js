import React, { useState } from "react";
import './App.css';

function App() {
    // const newTodoStateArr = useState("");
    // const newTodo = newTodoStateArr[0];
    // const setNewTodo = newTodoStateArr[1];
    // the same in shorthand:
    const [newTodo, setNewTodo] = useState("");
    //create a list to hold the elements
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (event) => {
        event.preventDefault();
        // setTodo and pass in a new array containing all current todos 
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
    return (
        <div className="App">
            <form onSubmit={(event) => {
                handleNewTodoSubmit(event);
            }}>
                <input onChange={(event) => {
                    setNewTodo(event.target.value);
                }} type="text" value={newTodo} /> {/* value={newTodo} after add clears the input box */}

                <div>
                    <button>Add</button>
                </div>
            </form>

            {/* ["todo1", "todo2"] call with map {[<div>todo1</div>, <div>todo2</div>]} */}
            {todos.map((todo, i) => {
                return <div key={i}>
                    <span>{todo}</span>

                </div>
            })}


        </div>
    );
}

export default App;
