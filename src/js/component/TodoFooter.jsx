import React from 'react';

const TodoFooter = ({todos}) => {

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
        </>
    );
}

export default TodoFooter;