import React from "react";
import '../css/TodoCounter.css'
import { TodoContext } from "../todoContext/todoContext";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <section className="section-title">
            <h2 className="title">-note-</h2>
            <p className="counter-text">Completaste {completedTodos} tareas de {totalTodos}</p>

        </section>
    );
}

export {TodoCounter};