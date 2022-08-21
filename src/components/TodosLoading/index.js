import React from "react"
import './TodosLoading.css'

function TodosLoading({ error }) {
    return (
        <div className="Loading-TodoItem">

            <p className='Loading-TodoItem-p'>Loading please wait</p>

        </div>
    );
}
export { TodosLoading }