import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
        /**
         * ! Segunda solucion: 
        * * props.setOpenModal(prevSate => !prevsatate)
        */
        
    };
    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
                +
        </button>
    );
}

export { CreateTodoButton };