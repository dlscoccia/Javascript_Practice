import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
/* import { getData } from '../helpers/getGif' */
import GifGridItem from './GifGridItem'

//const API_KEY = ''


const GifGrid = ({ category }) => {

const { data, loading }= useFetchGif(category)

    return (
        <>
        <h3 className='category'>{category}</h3>

        { loading ? 'Cargando...' : 'Cargo'}
            <div className='gifGrid'>
                {data.map((image) => (
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}

export default GifGrid
