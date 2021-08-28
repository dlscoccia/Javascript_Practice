import React from 'react'
import style from './Header.module.css'
import pokemon from '../assets/banner_pokemon.png'
import pokeIcon from '../assets/pokedex_icon.png'
import pokeball from '../assets/pokeball.png'

const Header = () => {
    return (
        <header className={style.header}>
            <img src={pokeIcon} alt="pokedex" className={style.icon}/>
            <img src={pokemon} alt="pokemon" className={style.name}/>
            <img src={pokeball} alt="pokeball" className={style.pokeball}/>
        </header>
    )
}

export default Header
