import React from 'react';

const TodoBody = ({todos}) => {

    let renderTasks = todos.map(todo => {

        return(
            <p>You have 5 todos.</p>
        )
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