import React, { useState, useEffect } from 'react'
import style from './PokeGrid.module.css'
import PokeCard from './PokeCard'

const PokeGrid = () => {
    const [pokemons, setPokemons] = useState([])
    const [number, setNumber] = useState(0)
    const [submit, setSubmit] = useState(false)
    const [type, setType] = useState('')

    useEffect(() => {
        setPokemons([])
        const fetchData = async () => {
            for (let idx = 1; idx <= number; idx++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${idx}`
                await getData(url)
            }
            if (type !== '') {
                const pokeFilter = pokemons.filter(pokemon => pokemon.types.includes(type))
                setPokemons(pokeFilter)
            }
            setType('')
        }
        fetchData()

    }, [submit])

    const getData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        const pokemon = await {
            id: data.id,
            name: data.name,
            img: data.sprites.other.dream_world.front_default,
            stats: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat
            },
            types: data.types.map(poketype => poketype.type.name),
            moves: data.moves.map(move => move.move.name)
        }
        setPokemons((pokemons) => [...pokemons, pokemon])
    }


    function handleChange(e) {
        setNumber(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmit(!submit)
    }

    function handleChangeType(e) {
        setType(e.target.value)        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.label}>Número de Pokemons:</label>
                <input type="number" onChange={handleChange} max='450' min='1' className={style.input} />
            </form>
            <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.label}>
                    Filtrar por tipo:
                    <select onChange={handleChangeType} className={style.select}>
                    <option value=""></option>
                        <option value="water">Water</option>
                        <option value="fire">Fire</option>
                        <option value="grass">Grass</option>
                        <option value="normal">Normal</option>
                        <option value="electric">Electric</option>
                        <option value="dark">Dark</option>
                        <option value="ice">Ice</option>
                        <option value="bug">Bug</option>
                        <option value="ground">Ground</option>
                        <option value="dragon">Dragon</option>
                        <option value="steel">Steel</option>
                        <option value="rock">Rock</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="ghost">Ghost</option>
                        <option value="fairy">Fairy</option>
                        <option value="flying">Flying</option>
                        <option value="fighting">Fighting</option>
                    </select>
                </label>
                <button type="button" className={style.btn} onClick={handleSubmit}>Filtrar</button>
            </form>
            <ul className={style.pokeList}>
                {
                    pokemons.map(pokemon => <PokeCard key={pokemon.id} {...pokemon} />)
                }
            </ul>
        </div>
    )
}

export default PokeGrid
