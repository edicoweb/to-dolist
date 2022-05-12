import React from "react";
import '../css/TodoItem.css';

function TodoItem(props){
    return(
        <li className="content-list">
            <span className="check-icon"></span>
            <p className="content-text">{props.text}</p>
            <span className="status-icon"></span>
        </li>
    );
}

export { TodoItem }