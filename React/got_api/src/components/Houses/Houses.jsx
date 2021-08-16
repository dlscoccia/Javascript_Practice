import React, { useState, useEffect } from 'react'
import HouseCard from '../HouseCard/HouseCard'
import style from './Houses.module.css'

function Houses() {

    const [houses, setHouses] = useState([])

    useEffect( () => {
        const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/houses'
        fetch(url)
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    return (
        <section className={style.houses}>
                <ul className={style.houseList}>
                    {
                        houses.map(house => <HouseCard name={house.name} members={house.members}/>)
                    }
                </ul>
        </section>
    )
}

export default Houses
