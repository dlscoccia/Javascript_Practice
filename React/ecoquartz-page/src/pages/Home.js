import React, { useState } from 'react'
import Slider from '../components/Carousel/Carousel'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState('')

    const toggle = () => {
        setIsOpen(!isOpen)
        isOpen ? setScroll('{overflow-y: hidden}') : setScroll('{overflow-y: visible}')
    }

    return (
        <>
           <Slider />
        </>
    )
}

export default Home
