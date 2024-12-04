import { array } from 'prop-types';
import React from 'react';
import { deleteTask } from '../lib/actions';
import "../../styles/Todo.css"

const TodoBody = ({tasks, setTasks}) => {   
        // let updateTodos = todos.filter(todo => todo.id !== selectedToDoId);
        // setTasks(updateTodos);


    let renderTasks = tasks.map(todo => {

        return(
            <li className="list-item d-flex" key={todo.id}>
                <label>{todo.label}</label>
                <div className="delete">
                    <div className="show_on_hover">
                        <button 
                            className= "deleteButton d-flex"
                            onClick={() => deleteTask(todo.id, setTasks)}
                        >X</button>
                    </div>
                </div>
            </li>
        );
    })

    return (
        <>
            <section className="todo-body">
                <ul className="todo-list">
                    {
                        tasks.length !== 0
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