import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import Houses from '../Houses/Houses'
import style from './Body.module.css'

function Body() {
    return (
        <main className={style.body}>
            <Carrousel />
            <Houses />
        </main>
    )
}

export default Body
