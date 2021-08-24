import React from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={style.searchDiv}>
            <input type="search" name="search" id="search" placeholder="Search a Character" className={style.searchInput}/>
        </div>
    )
}

export default SearchBar
