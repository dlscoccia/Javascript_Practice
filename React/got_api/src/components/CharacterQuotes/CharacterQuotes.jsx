import React, { useState, useEffect } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import style from './CharacterQuotes.module.css'

function CharacterQuotes(props) {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        if (props.quotes) {
            setQuotes(props.quotes)
        }
    }, [props.quotes])

    return (
        <div>
            {quotes.map( quote =>
            <li>
                <ImQuotesLeft className={style.quotesIcon}/>{quote}<ImQuotesRight className={style.quotesIcon}/>
            </li>
            )} 
        </div>
    )
}

export default CharacterQuotes
