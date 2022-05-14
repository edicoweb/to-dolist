import React from "react";
import '../css/TodoCreateButton.css';

function TodoCreateButton(){


    const onClickButton = (message) => {
        alert(message);
    }


    return(
        <section className="createButton-section">
            <button 
                className="create-button" 
                onClick={()=>onClickButton('Holaaa')}
            >+</button>
        </section>
    );
}

export { TodoCreateButton };
