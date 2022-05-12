import React from "react";
import '../css/TodoSearch.css';

function TodoSearch(){
    return(
        <section className="search-section">
            <input className="input-search" placeholder="Search"/>
        </section>
    );
}

export { TodoSearch };