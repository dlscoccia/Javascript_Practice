import React from 'react'
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <h1 className="text-3xl text-gray-100 hover:opacity-70">50 RETOS HTML, CSS & JS</h1>
            <div>
                <label htmlFor="search" className="absolute ml-4">Retos</label>
                <input type="text" className="bg-transparent border-b-2 border-gray-200 mx-2 relative" name="search"/>
                <button className="text-2xl italic hover:">Buscar</button>
            </div>
        </div>
    )
}

export default Header
