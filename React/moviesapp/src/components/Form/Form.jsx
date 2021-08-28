import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
//import { useHistory } from 'react-router-dom'
import style from './Form.module.css'

function Search() {
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState([])
   // const history = useHistory(); //Hook para añadir elementos a la ruta
    const movie = []
    const handleSubmit = (movie) => {
        
        console.log(filter)
        //history.push("/?search=" + searchText);//Evento cancela lo que se hace por defecto submit al servidor
    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input
                    className={style.searchInput}
                    type="text"
                    value={searchText}             
                    onChange={(e) => movie.push(e.target.value)} 
                    placeholder={"Buscar peliculas"}/>
                <button className={style.searchButton} type="submit" onClick={(() => setFilter(movie))} >
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}

export default Search