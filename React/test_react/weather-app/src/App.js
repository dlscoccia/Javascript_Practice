import React from 'react'
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import data, { Londres }  from './data'

function App() {

  return (
    <>
      <Header />
      <Card name={Londres.name} min={Londres.main.temp_min} max={Londres.main.temp_max} close={() => (alert(Londres.name))} />
      <Cards />
    </>
  );
}

export default App;

