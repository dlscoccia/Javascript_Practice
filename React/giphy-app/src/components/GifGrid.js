import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

//const API_KEY = ''


const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getData()
    }, [])


    const getData = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=hGHDAXpS4hLBFl5wLG6AbaW1BessFwEW&q=cat&limit=5'
        const res = await fetch(url);
        const {data} = await res.json();       
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                image: img.images.downsized_medium.url
            }      
        })
        setImages(gifs)
    }


    

    return (
        <div>
            <h3>{category}</h3>

                {images.map( (image) => (
                    <GifGridItem key={image.id} {...image}/>
                ))}

        </div>
    )
}

export default GifGrid
