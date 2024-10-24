import React, { useState } from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import "../../styles/Todo.css"

const Todo = () => {

    const [todo, setTodo] = useState("")
	const [tasks, setTasks] = useState([])
	const [counter, setCounter] = useState(0)

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
                <TodoBody todos={tasks}/>
                <TodoFooter todos={tasks} />
            </div>
        </>
    );
}

export default Todo;