import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import { getData } from '../lib/actions';
import "../../styles/Todo.css"

const Todo = () => {

    const [todo, setTodo] = useState("")
	const [tasks, setTasks] = useState([])
	const [counter, setCounter] = useState(0)
    const [newUser, setNewUser] = useState ([])

    //creating useEffect hook that renders only on the first render
    // the [] called the dependency array which are needed to render only one time
    useEffect(() => {
        
        getData(setTasks, setNewUser);
    }, []);

    return (
        <>
            <div className="todo-app">
                <div className="todoTitle d-flex justify-content-center">
                    <h1>{newUser}'s To-dos</h1>
                </div>
                <TodoHeader 
                    todo={todo}
                    setTodo={setTodo}
                    tasks={tasks}
                    setTasks={setTasks}
                    counter={counter}
                    setCounter={setCounter}
                />
                <TodoBody 
                    tasks={tasks}
                    setTasks={setTasks}
                />
                <TodoFooter 
                    todos={tasks}
                    newUser={newUser}
                    setNewUSer={setNewUser}
                />
            </div>
        </>
    );
}

export default Todo;