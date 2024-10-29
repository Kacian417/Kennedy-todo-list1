import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import "../../styles/Todo.css"

const Todo = () => {

    const [todo, setTodo] = useState("")
	const [tasks, setTasks] = useState([])
	const [counter, setCounter] = useState(0)

    //creating useEffect hook that renders only on the first render
    // the [] called the dependency array which are needed to render only one time
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://playground.4geeks.com/todo/users/kennedy');
            if (response.ok) {
                const data = await response.json();
                console.log(data.todos);
                setTasks(data.todos);
            } else {
                console.log("Error: ", response.status, response.statusText);
                return {error: {status: response.status, statusText: response.statusText}}
            }
        }
        getData();
    }, []);

    return (
        <>
            <div className="todo-app">
                <h1>To-dos</h1>
                <TodoHeader 
                    todo={todo}
                    setTodo={setTodo}
                    tasks={tasks}
                    setTasks={setTasks}
                    counter={counter}
                    setCounter={setCounter}
                />
                <TodoBody 
                    todos={tasks}
                    setTasks={setTasks}
                />
                <TodoFooter todos={tasks} />
            </div>
        </>
    );
}

export default Todo;