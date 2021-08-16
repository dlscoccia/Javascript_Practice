import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li>
                        <Link to="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/1200px-Game_of_Thrones_2011_logo.svg.png" alt="logo" className={style.logo} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
