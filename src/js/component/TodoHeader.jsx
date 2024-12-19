import React from 'react';
import { postData } from '../lib/actions';
import "../../styles/Todo.css"


const TodoHeader = ({todo, setTodo, tasks, setTasks, counter, setCounter, newUser, setNewUser}) => {

    const validateInput = () => {
        if (todo === "") {
            alert("Please add a task.")
        }
        else {
            addTask();
        }
    }

    const addTask = () => {
        let newTaskItem = { 
            label: todo, 
            is_done: false
        }
        postData(setTasks, newTaskItem, newUser);
        setTodo("");
    }

    return (
        <>
            <header className="todo-header">
                <input 
                    type="text"
                    placeholder='What needs to be done?'
                    onChange={e => setTodo(e.target.value)}
                    value={todo}
                />
                <button
                    onClick={validateInput}
                >Add Task</button>
            </header>
        </>
    );
    
}

export default TodoHeader;