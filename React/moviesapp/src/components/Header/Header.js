import React from 'react'
import Search from '../Form/Form'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <nav className={style.navbar}>
                <ul className={style.navList}>
                    <li className={style.navItem}><img src="https://img.icons8.com/plasticine/60/000000/documentary.png" alt="logo"/> <span className={style.name}>ReactTheater</span></li>
                    <li className={style.navItem}><Search /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
