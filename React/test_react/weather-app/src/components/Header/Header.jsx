import React from 'react'
import style from './Header.module.css'

function Header() {

    function saludo() {
        alert('Hola!')
    }

    return (
        <header className={style.header}>
            <input type="text" />
            <button onClick={saludo} className={style.btn}>AGREGAR</button>
        </header>
    )
}

export default Header

