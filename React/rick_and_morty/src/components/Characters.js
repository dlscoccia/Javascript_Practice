import React, {useState, useEffect} from 'react'

const Characters = () => {
    
    // States
    const [characters, setCharacters] = useState([])

    // Fetching data
    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    
    }, [])

    return (
        <div className="container">
            <div className="characters">
                {
                    characters.map((character) => (
                        <div className="box" key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <div className="info">
                            <h2 className="name">{character.name}</h2>
                            <h3 className="species">{character.species}</h3>
                            <p className="status">Status: {character.status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Characters;