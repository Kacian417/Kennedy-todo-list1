export const getData = async (setTasks) => {
    const response = await fetch('https://playground.4geeks.com/todo/users/kennedy');
    if (response.ok) {
        const data = await response.json();
        setTasks(data.todos);
        //console.log("from getDate(): ", data.todos)
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