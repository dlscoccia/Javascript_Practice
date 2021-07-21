/* TO DO

1.- Fix the date to the actual city
2.- Put more options to the user to query: by zip code
3.- Section to expand more info: humidity, altitude, latitude, etc
4.- Change Background depending on the climate
*/

const api = {
    key: 'bc5360945b0804d5725e0ed9206900b4',
    url: 'https://api.openweathermap.org/data/2.5/'
}

const searchbox = document.querySelector('.search-box')
searchbox.addEventListener('keypress', setQuery)
function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchbox.value)
    }
}

function getResults(query) {
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    }).then(displayResults)
}

function displayResults(weather) {
    console.log(weather)
    let city = document.querySelector('.location .city')
    city.innerText = `${weather.name}, ${weather.sys.country}`
    let date = document.querySelector('.location .date')
    //let now = new Date()
    //date.innerText = new Date().toISOString().slice(0, 10)
    //date.innerText = dateBuilder(now)
    let mil = (weather.dt * 1000) + (weather.timezone * 1000)
    let newDate = new Date(mil)
    date.innerText = newDate.toLocaleString()
    let temp = document.querySelector('.current .temp')
    temp.innerText = `${weather.main.temp}`
    let climate = document.querySelector('.current .climate')
    climate.innerText = `${weather.weather[0].main}`
    let hiLow = document.querySelector('.current .hi-low')
    hiLow.innerText = `min: ${weather.main.temp_min} / max: ${weather.main.temp_max}`
    let feels = document.querySelector('.current .feels .like')
    feels.innerText = `${weather.main.feels_like}`
    searchbox.innerText = '...'
}

function dateBuilder(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day} ${date} ${month} ${year}`
}