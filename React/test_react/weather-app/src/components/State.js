import React, { useState } from 'react'

const data = [1,2,3,4,5,6]

const State = () => {

const [number, setnumber] = useState(data)
  
  const filtro = (str) => {
    if (str === 'impar') {
      const impares = data.filter(n => n % 2 !== 0)
      setnumber(impares)
    } else if (str === 'par') {
      const pares = data.filter(n => n % 2 === 0)
      setnumber(pares)
    } else {
      setnumber(data)
    }
  }
  return (
    <div className='container'>
      <h1>useState</h1>
      <div className='btn'>
      <button onClick={() => filtro('')}>Todos</button>
      <button onClick={() => filtro('par')}>Par</button>
      <button onClick={() => filtro('impar')}>Impar</button>
      </div>
    <ul className='lista'>
      {
        number.map(n => <li>{n}</li>)
      }
      </ul>
    </div>
  )
}


export default State