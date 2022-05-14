import React from "react";
import '../css/TodoCounter.css'

function TodoCounter({total, completed}){
    return(
        <section className="section-title">
            <h2 className="title">WEBAPP</h2>
            <p className="counter-text">Completaste {completed} tareas de {total}</p>

        </section>
    );
}

export {TodoCounter};