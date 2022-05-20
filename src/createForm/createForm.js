import React from "react";
import {TodoContext} from "../todoContext/todoContext"
import './createForm.css';

function CreateForm(){
    const [newTodosValue, setNewTodosValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodosValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodosValue);
        setOpenModal(false);
    };
    
    return (
        <form className="modal-createForm" onSubmit={onSubmit} >
            <label className="modal-labelForm">Crear Nueva Tarea</label>
            <textarea className="modal-form--textArea" 
                value={newTodosValue}
                onChange={onChange}
                placeholder="Ingrese Nueva Tarea"
            />
            <div className="modal-button--container">
                <button className="button-modal button-cancel" 
                    type="button" 
                    onClick={onCancel}  
                >Cancelar</button>

                <button className="button-modal button-add"
                    type="submit"
                >Añadir</button>
            </div>
        </form>
    );
}

export { CreateForm };