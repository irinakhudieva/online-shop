import React, { useState } from 'react';
import { createContext } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
           {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;