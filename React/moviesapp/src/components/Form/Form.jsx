import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import style from './Form.module.css'

function Search() {
    const [searchText, setSearchText] = useState("");
    const history = useHistory(); //Hook para añadir elementos a la ruta

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('CLICK');
        history.push("/?search=" + searchText);//Evento cancela lo que se hace por defecto submit al servidor

    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input
                    className={style.searchInput}
                    type="text"
                    value={searchText} //Controlando el imput
                    // onChange ={(e) => setSearchText(e.target.value.toUpperCase())}
                    onChange={(e) => setSearchText(e.target.value)} 
                    placeholder={"Buscar peliculas"}/>
                <button className={style.searchButton} type="submit" >
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}

export default Search