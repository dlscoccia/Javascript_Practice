import { useState, useEffect } from "react"
import getGif from '../helpers/getGif'


export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        
        getGif(category)
            .then( gifs => {
                setState({
                    data: gifs,
                    loading: false
                })
            })
    }, [category])

    return state
}


