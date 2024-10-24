import React from 'react';

const TodoHeader = ({todo, setTodo, tasks, setTasks, counter, setCounter}) => {

    const validateInput = () => {
        if (todo === "") {
            alert("Please add a task.")
        }
        else {
            addTask();
        }
    }

    const addTask = () => {
        //console.log("Creating a new todo: ", todo);
        let newTask = {id: counter, title: todo, done: false};
        //setTasks = tasks.push(tasks);
        //console.log("creating a new task: ", newTask)
        setTasks([...tasks, newTask])
        setCounter(counter + 1);

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