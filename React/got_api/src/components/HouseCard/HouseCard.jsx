import React from 'react'
import HouseMembers from '../HouseMembers/HouseMembers'
import style from './HouseCard.module.css'

function HouseCard({name, members}) {
    console.log(members)
    return (
        <li className={style.houseCard}>
            <h2 className={style.houseName}>{name}</h2>
            <ul className={style.cardList}>
                {
                    members.map((member, idx) => <HouseMembers name={member.name} slug={member.slug} key={idx}/>)
                }                
            </ul>
        </li>
    )
}

export default HouseCard
