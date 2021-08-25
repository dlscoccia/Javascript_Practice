import React from 'react'
import Card from '../Card/Card'
import data from '../../data'
import style from './Cards.module.css'

function Cards() {
    
    return (
        <div className={style.cards}>
            {
                data.map( (city, index) => <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} close={() => alert(city.name)} key={city.name}/>)
            }
        </div>
    )
}

export default Cards
