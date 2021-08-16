import React, { useState, useEffect } from 'react'
import Quotes from '../Quotes/Quotes'
import style from './Carrousel.module.css'
import { GiFrozenArrow } from 'react-icons/gi'

function Carrousel() {
    const [quote, setQuote] = useState([]);
    const [click, setClick] = useState(false)

    useEffect( () => {    
        const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random/'
        fetch(url)
        .then(res => res.json())
        .then(data => ([data.character.name, data.character.house.name ,data.sentence]))
        .then(quote => setQuote(quote))
    }, [click])

    return (
        <section className={style.carrouselContainer}>
            <ul className={style.carrouselList}>
                <li>
                    <button className={style.arrowLeft} onClick={() => {
                        setClick(!click)
                    }}>
                        <GiFrozenArrow />
                    </button>
                </li>
                <li className={style.quote}>
                    <Quotes name={quote[0]} quote={quote[2]} house={quote[1]} />
                </li>
                <li>
                    <button className={style.arrowRight} onClick={() => {
                        setClick(!click)
                    }}>
                        <GiFrozenArrow />
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Carrousel
