import React from 'react'
import style from './Main.module.css'
import { ImHtmlFive2 } from 'react-icons/im'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
const Main = () => {
    return (
        <div className={style.main}>
            <p className={style.p}>50 Retos</p>
            <div className="stack">
                <ul className={style.stackList}>
                    <li className="stackItem">
                        <ImHtmlFive2 className="text-9xl text-gray-50" />
                    </li>
                    <li className="stackItem">
                        <DiCss3 className="text-9xl text-gray-50" />
                    </li>
                    <li className="stackItem">
                        <IoLogoJavascript className="text-9xl text-gray-50" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main
