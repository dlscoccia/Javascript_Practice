import React, {useState} from 'react'
import Footer from '../components/Footer'
import Hero from '../components/HeroSection'
import Info from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/ServiceSection'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState('')
    
    const toggle = () => {
        setIsOpen(!isOpen)
        isOpen ? setScroll('{overflow-y: hidden}') : setScroll('{overflow-y: visible}')
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero style={scroll}/>
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Services />
            <Info {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
