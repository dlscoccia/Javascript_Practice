import React from 'react'
import Cards from './Cards'
import style from './Slider.module.css'
import data from '../data.json'
const Slider = () => {
    console.log(data)
    return (
        <div className={style.cards}>
        {
        data.map((reto) => <Cards name={reto.name} description={reto.description} number={reto.number} img={reto.img}/>)
        }
        </div>
    )
}

export default Slider
