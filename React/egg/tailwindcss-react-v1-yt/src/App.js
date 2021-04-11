import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero'
import Content from './components/Content';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

useEffect(() => {
  const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen){
      setIsOpen(false)
    }
  }
  window.addEventListener('resize', hideMenu);
  return () => {
    window.removeEventListener('resize', hideMenu);
  }
})

  return (
    <>
<Navbar toggle={toggle}/>
<Dropdown toggle={toggle} isOpen={isOpen}/>
<Hero />
<Content />
<Footer />
    </>
  );
}

export default App;
