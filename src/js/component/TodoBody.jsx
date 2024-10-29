import { array } from 'prop-types';
import React from 'react';

const TodoBody = ({todos, setTasks}) => {

    const deleteTask = (selectedToDoId) => {
        // let updateTodos = todos.filter(todo => todo.id !== selectedToDoId);
        // setTasks(updateTodos);
        fetch (`https://playground.4geeks.com/todo/todos/${selectedToDoId}`), {
            method: 'DELETE'
        }
            .then(response => response.json())
            .then(console.log("Successfully deleted"))
            .catch(error => console.log(error))
    }

    let renderTasks = todos.map(todo => {

        return(
            <li className="list-item" key={todo.id}>
                <label>{todo.label}</label>
                <button 
                    className= "deleteButton"
                    onClick={() => deleteTask(todo.id)}
                >X</button>
            </li>
        );
    })

    return (
        <>
            <section className="todo-body">
                <ul className="todo-list">
                    {
                        todos.length !== 0
                        ?
                        renderTasks 
                        :
                        `No tasks. Add a task.`
                    }
                </ul>
            </section>
        </>
    );
}

export default TodoBody;