import React from 'react'
import { Londres } from '../../data'

const Card = ({name, min, max, close}) => {

    return (
        <div>
            <button onClick={close}>X</button>
            <h2>{name}</h2>
            <ul>
                <li>Min: {min}</li>
                <li>Max: {max}</li>
            </ul>
        </div>
    )
}

export default Card