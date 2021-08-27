const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const data = await res.json()
    const info = data.results.map(info => ([info.name, info.location, info.picture]))

    result.innerHTML = ''

    info.map(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src='${user[2].thumbnail}'/>
            <div class="user-info">    
            <h4>${user[0].first} ${user[0].last}</h4>
            <p>${user[1].city}, ${user[1].country}</p>
            </div>
        `
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}