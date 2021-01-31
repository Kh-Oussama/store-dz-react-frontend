import React from 'react';

const SearchBar = ({ isInsideDropdown }) => (
    <form action="#" className="search">
        <input type="text" className="search__input" placeholder=""/>
        <button className="search__button">
            <i className="fas fa-search"/>
        </button>
    </form>
);

export default SearchBar;
