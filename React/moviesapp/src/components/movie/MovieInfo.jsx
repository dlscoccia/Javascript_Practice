import React from 'react'
import style from './MovieInfo.module.css'

function MovieInfo({date, vote}) {
    return (
        <div className={style.info}>
            <span>Fecha de estreno: {date}</span>
            <span>Votos: {vote}</span>
        </div>
    )
}

export default MovieInfo
