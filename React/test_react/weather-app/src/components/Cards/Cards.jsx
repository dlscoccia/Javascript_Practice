import React from 'react'
import Card from '../Card/Card'
import data from '../../data'

function Cards() {
    
    return (
        <div>
            {
                data.map( (city, index) => <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} close={() => alert(city.name)} key={index}/>)
            }
        </div>
    )
}

export default Cards
