import React from "react";
import '../css/TodoItem.css';

function TodoItem(props){
    return(
        <li className="content-list">

            <span 
                className={`check-icon ${props.completed && 'check-icon--active'}`}
                onClick={props.onComplete}
            ></span>

            <p className={`content-text ${props.completed && 'content-text--complete'}`}>
                {props.text}
            </p>

            <span 
                className="status-icon"
                onClick={props.onDelete}
            ></span>

        </li>
    );
}

export { TodoItem }