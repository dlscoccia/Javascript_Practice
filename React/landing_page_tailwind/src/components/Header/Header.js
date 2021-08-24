import React from 'react'
import Button from '../Button/Button'

function Header() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 p-2">
                <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg" alt="logo" className="rounded-lg w-1/2 mx-auto"/>
            </div>
            <div className="w-1/2 p-2">
                <h2 className="text-3xl font-semibold">Titulo</h2>
                <p className="text-xl my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, incidunt!</p>
                <Button />
            </div>
        </div>
    )
}

export default Header
