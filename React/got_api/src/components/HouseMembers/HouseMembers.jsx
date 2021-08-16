import React from 'react'
import { Link } from 'react-router-dom'
import style from './HouseMembers.module.css'


function HouseMembers({name, slug}) {

    return (
        <li>
            {
                <h2 className={style.name}>
                    <Link to={`/character/${slug}`} className={style.characterLink}>
                        {name}
                    </Link>
                </h2>
            }
        </li>
    )
}

export default HouseMembers
