import React, { useState } from "react";
import './App.css';

import Todo from "./components/Todo";

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

        //if input is empty will not add a new item to the todo list
        if (newTodo.length === 0) {
            return;
        };

        const todoItem = {
            text: newTodo,
            complete: false
        };

        // setTodo and pass in a new array containing all current todos 
        setTodos([...todos, todoItem]);
        setNewTodo("");
    };

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todos.filter((todo, i) => {
            return i !== delIdx;
        });
        setTodos(filteredTodos);
    };

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if (idx === i) {
                todo.complete = !todo.complete
                // To avoid mutating the todo directly, do this:
                // const updatedTodo = { ... todo, complete: !todo.complete};
                // return updatedTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

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
            <hr />

            {/* ["todo1", "todo2"] call with map {[<div>todo1</div>, <div>todo2</div>]} */}
            {todos.map((todo, i) => {
                return (
                    <Todo key={i} i={i} todo={todo} handleToggleComplete={handleToggleComplete} handleTodoDelete={handleTodoDelete} />
                );
            })}
        </div>
    );
}

export default App;
