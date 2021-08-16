import React from 'react'
import style from './Quotes.module.css'


function Quotes({name, quote, house}) {
    return (
        <div className={style.quotesContainer}>
            <h2 className={style.name}>
                {name}
            </h2>
            <h3 className={style.house}>
                {house}
            </h3>
            <p className={style.quote}>
                {quote}
            </p>

        </div>
    )
}

export default Quotes
