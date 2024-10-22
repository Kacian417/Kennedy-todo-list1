import React from 'react';

const TodoHeader = () => {

    return (
        <>
            <header className="todo-header">
                <input 
                    type="text"
                />
                <button>Add Task</button>
            </header>
        </>
    );
}

export default TodoHeader;