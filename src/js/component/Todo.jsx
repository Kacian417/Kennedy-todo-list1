import React, { useState } from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import "../../styles/Todo.css"

const Todo = () => {

    const [todo, setTodo] = useState("")
	const [tasks, setTasks] = useState([])
	const [counter, setCounter] = useState(0)

    const TodoList = [
        {id: 1, title: 'Buy groceries', done: false },
        {id: 2, title: 'Clean the house', done: true },
        {id: 3, title: 'finish homework', done: false },
        {id: 4, title: 'pay electric bill', done: true },
        {id: 5, title: 'read a book', done: false },
    ]

    return (
        <>
            <div className="todo-app">
                <h1>To-dos</h1>
                <TodoHeader />
                <TodoBody todos={TodoList}/>
                <TodoFooter todos={TodoList} />
            </div>
        </>
    );
}

export default Todo;