import React from "react";
import './searchbar.styles.scss';

const SearchBar = ({ searchHandler })=> {
    return (
        <input
            type="search-box" 
            className="search-box" 
            placeholder="search Products"
            onChange= { searchHandler }
        />
    );
}

export default SearchBar;
