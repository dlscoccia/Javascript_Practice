const getData = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hGHDAXpS4hLBFl5wLG6AbaW1BessFwEW&q=${encodeURI(category)}&limit=10`
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images.downsized_medium.url
        }
    })
    return (gifs)
}

export default getData