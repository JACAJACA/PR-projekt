import React from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
    return (
        <div className='search'>
            <div id='searchbar'>
                <input type='text' placeholder='Search...'></input>
            </div>
        </div>
    )
}

export default SearchBar;