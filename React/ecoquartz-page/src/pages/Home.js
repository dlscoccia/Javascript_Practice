import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState('')

    const toggle = () => {
        setIsOpen(!isOpen)
        isOpen ? setScroll('{overflow-y: hidden}') : setScroll('{overflow-y: visible}')
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </div>
    )
}

export default Home
