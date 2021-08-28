import React from 'react'

const GifGridItem = ({title, image}) => {
    console.log(title, image)
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
        </div>
    )
}

export default GifGridItem
