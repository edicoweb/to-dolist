import React from "react";
import '../css/TodoSearch.css';
import { TodoContext } from "../todoContext/todoContext";

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <section className="search-section">
            <input 
                className="input-search" 
                placeholder="Search"
                value={searchValue}
                onChange={onSearchValueChange}
            /> 
        </section>
    );
}

export { TodoSearch };