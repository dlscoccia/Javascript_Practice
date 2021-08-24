import React from 'react'
import style from './Cards.module.css'


const Cards = ({name, img, number, description}) => {
    return (
        <div className={style.cardBody} data-aos="fade-up">
            <img src={img} alt="" />
            <div className={style.info}>
                <h1>{name} {number}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Cards
