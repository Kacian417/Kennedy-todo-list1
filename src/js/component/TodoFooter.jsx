import React, { useState, useEffect } from 'react';
import { postUser, deleteUser, getData } from '../lib/actions';

const TodoFooter = ({todos}) => {

    const [newUser, setNewUser] = useState ([])

    useEffect(() => {
        
        getData(setNewUser);
    }, []);

    const addNewUser = () => {
        let newUserName = { 
            label: userName, 
            is_done: false
        }
        postUser(setNewUser, newUserName);
        setNewUser("");
    }

    return (
        <>
            <footer className='footer'>
                {/*write a ternary such that if there are one or more than one item in the array, display how many items are left,display items plural, other wise display item singular*/
                todos.length !== 1
                ?
                `${todos.length} items left.` 
                :
                `${todos.length} item left.`}
            </footer>

            <div className="userButtons d-flex">
                <button 
                    className= "newUserButton"
                    onClick={() => postUser(newUser.id, setNewUser)}
                >New User</button>
                <button
                    className= "deleteUserButton d-flex"
                    onClick={() => deleteUser}
                >Delete User</button>
            </div>
        </>
    );
    
}

export default TodoFooter;
