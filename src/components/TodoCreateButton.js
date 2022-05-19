import React from "react";
import '../css/TodoCreateButton.css';

function TodoCreateButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
       };


    return(
        <section className="createButton-section">
            <button 
                className="create-button" 
                onClick={onClickButton}
            >+</button>
        </section>
    );
}

export { TodoCreateButton };
