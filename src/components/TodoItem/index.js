import './TodoItem.css'

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Done!: ' + props.text)
    // };
    // const onDelete = () => {
    //     alert('Trashed!: ' + props.text)
    // };
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                
                o
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>

            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };