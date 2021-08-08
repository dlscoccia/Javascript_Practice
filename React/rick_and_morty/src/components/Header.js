import React from 'react'


const Header = ({title}) => {
    return (
        <header >
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">A tribute to the awesomeness of Rick Sanchez!</p>
                </div>
            </div>
        </header>
    )
}

export default Header