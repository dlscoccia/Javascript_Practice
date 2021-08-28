const getData = async (url, pokemons, setPokemons) => {
        const res = await fetch(url)
        const data = await res.json()
        const pokemon = await {
            id:data.id, 
            name: data.name,
            img: data.sprites.other.dream_world.front_default,
            stats: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat
            },
            types: data.types
        }
        setPokemons((pokes) => [...pokes, pokemon])
}

export default getData