import React from 'react';

import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <>
            <input
                className='Input-search'
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading}
                placeholder='search your little silly tasks here'
            />
        </>
    );
}

export { TodoSearch };