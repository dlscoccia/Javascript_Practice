import React, { useState, useEffect } from 'react'
import style from './Character.module.css'
import CharacterQuotes from '../CharacterQuotes/CharacterQuotes'

function Character({ slug }) {
    const [character, setCharacter] = useState([])

    const url = `https://game-of-thrones-quotes.herokuapp.com/v1/character/${slug}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => [data[0].name, data[0].house.name, data[0].quotes])
            .then(char => setCharacter(char))
    }, [url])

    return (
        <div className={style.characterPage}>
            <div className={style.characterCard}>
            <h2 className={style.characterName}>{character[0]}</h2>
            <h4 className={style.characterHouse}><em>{character[1]}</em></h4>
            <ul className={style.characterQuotes}>
                <CharacterQuotes quotes={character[2]} />
            </ul>
            </div>

        </div>
    )
}

export default Character
