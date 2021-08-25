import React from 'react'

function Header() {
    
    function saludo() {
        alert('Hola!')
    }
    
    return (
        <header>
            <input type="text"/>
            <button onClick={saludo}>AGREGAR</button>
        </header>
    )
}

export default Header

