import React from 'react';

const TodoBody = ({todos}) => {

    const deleteTask = () =>{console.log("Delete a task")}

    let renderTasks = todos.map(todo => {

        return(
            <li className="list-item" key={todo.id}>
                <label>{todo.title}</label>
                <button
                    onClick={() => deleteTask()}
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