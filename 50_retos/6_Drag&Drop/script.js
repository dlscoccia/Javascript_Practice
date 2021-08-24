const container = document.getElementById('container')
const colors = ['#EE4B6A', '#0f7173', '#ef8354', '#fca311', '#70e000']
const SQUARES = 500

console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])
console.log(colors[5])

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div') // squeare = <div></div>
    square.classList.add('square') // square = <div class="square"></div>

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `-0.5px -0.5px 2px 0.5px rgba(255,255,0,0.5), 0.5px 0.5px 2px 0.5px rgba(255,255,0,0.5)`
}

function removeColor(element) {
    element.style.background = 'rgb(55, 54, 54)'
    element.style.boxShadow = ''
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * 5)]
}