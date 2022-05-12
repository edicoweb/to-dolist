import React from "react";
import '../css/TodoCreateButton.css';

function TodoCreateButton(){
    return(
        <section className="createButton-section">
            <button className="create-button">+</button>
        </section>
    );
}

export { TodoCreateButton };
