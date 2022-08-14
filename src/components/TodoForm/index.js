import React from "react";
// import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        //TODO Add functionality
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        //TODO Add functionality
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>add a new<code> little silly task</code>!</label>
            <textarea
                placeholder="Little Silly Task"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="buttons">
                <button
                    className="button back-button"
                    type="button"
                    onClick={onCancel}
                >
                    Fuck Go back
                </button>
                <button
                    className="button add-button"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm };