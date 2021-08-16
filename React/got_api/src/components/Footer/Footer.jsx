import React from 'react'
import style from './Footer.module.css'
function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.footerList}>
                <li>
                <a href="https://gameofthronesquotes.xyz/">
                        API
                    </a>
                </li>
                <li>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0dde2abc-cb0b-4272-8973-434447c320e8/d7y9g1j-08e5d5c2-fdbf-4068-9d0f-4bf8d3c9740e.png/v1/fill/w_771,h_542,strp/game_of_thrones_png_logo_by_sohrabzia_d7y9g1j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQyIiwicGF0aCI6IlwvZlwvMGRkZTJhYmMtY2IwYi00MjcyLTg5NzMtNDM0NDQ3YzMyMGU4XC9kN3k5ZzFqLTA4ZTVkNWMyLWZkYmYtNDA2OC05ZDBmLTRiZjhkM2M5NzQwZS5wbmciLCJ3aWR0aCI6Ijw9NzcxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.s-P_eHP3V8gv3kNCxhf0PGvQdby1AaBOQne9BAkd52A" alt="winter" className={style.footerImage} />
                </li>
                <li>
                    <a href="/">@dlscoccia</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
