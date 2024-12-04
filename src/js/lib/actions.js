export const getData = async (setTasks, setNewUser) => {
    const response = await fetch('https://playground.4geeks.com/todo/users/kennedy');
    if (response.ok) {
        const data = await response.json();
        setTasks(data.todos);
        setNewUser(data.name)
        console.log("from getDate(): ", data.name)
    } else {
        console.log("Error: ", response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}}
    }
}

export const postData = (setTasks, newTaskItem) => {
    let options = {
        method: 'POST',
        body: JSON.stringify(newTaskItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }    
    fetch('https://playground.4geeks.com/todo/todos/kennedy', options)
    .then(response => {
        if(!response.ok) {
            throw Error(response.statusText)
        }
        getData(setTasks)
        return response.json();
    })
    //.then(data => console.log("Task successfully added.", data))
    .catch(error => console.log("Error: ", error))
}

export const deleteTask = (selectedToDoId, setTasks) => {
    fetch (`https://playground.4geeks.com/todo/todos/${selectedToDoId}`, {
        method: 'DELETE'})
        .then(response => {
            if(response.status === 204) {
                //console.log("Task was deleted successfully.")
                getData(setTasks);
            }
            else {
                throw new Error("Error! The task was not deleted or found.")
            }
        })
        .catch(error => console.log("Error: ", response.status, response.statusText));
}

export const postUser = (setNewUser, addNewUser) => {
    let options = {
        method: 'POST',
        body: JSON.stringify(addNewUser),
        headers: {
            'Content-Type': 'application/json'
        }
    }    
    fetch(`https://playground.4geeks.com/todo/users/${setNewUser}`, options)
    .then(response => {
        if(!response.ok) {
            throw Error(response.statusText)
        }
        getData(setNewUser)
        return response.json();
    })
    //.then(data => console.log("User successfully added.", data))
    .catch(error => console.log("Error: ", error))
}

export const deleteUser = (selectedUserId, newUser) => {
    fetch (`https://playground.4geeks.com/todo/users/${selectedUserId}`, {
        method: 'DELETE'})
        .then(response => {
            if(response.status === 204) {
                console.log("User was deleted successfully.")
                getData(newUser);
            }
            else {
                throw new Error("Error! The user was not deleted or found.")
            }
        })
        //.catch(error => console.log("Error: ", response.status, response.statusText));
}