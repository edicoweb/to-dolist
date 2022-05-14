import React from "react";
import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

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