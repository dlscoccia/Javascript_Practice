import React, { useEffect, useState } from "react";

function Effect() {
  const [color, setColor] = useState('color');
const [click, setClick] = useState()

  useEffect(() => {
    if (click) {
      setColor('color2')
    } else {
      setColor('color')
    }
  }, [click])

  return (
    <div className={color}>
      <h1 style={{color: color}}> useEffect </h1>
      <button onClick={() => setClick(!click)}>color</button>
    </div>
  )
}


/* function PokemonInfo({ name = "pikachu" }) {
  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pikachu => {
        setPokemonInfo(pikachu)
      })
  })

  return (
    pokemonInfo && (
      <span>
        La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>
    )
  )
} */

export default Effect