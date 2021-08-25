import React from 'react'
import { Londres } from '../../data'
import style from './Card.module.css'

const Card = ({name, min, max, close, mid = 'Hola'}) => {

    return (
        <div className={style.card}>
            <button onClick={close} className={style.btn}>X</button>
            <h2 className={style.name}>{name}</h2>
            <ul className={style.list}>
                <li className={style.listItem}>Min: {min}</li>
                <li className={style.listItem}>Max: {max}</li>
            </ul>
        </div>
    )
}

export default Card