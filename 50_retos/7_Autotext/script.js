const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let idx = 1
let speed = 500 / speedEl.value
const text = 'Texto de prueba...'

writeText()

function writeText() {
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed =  500 / e.target.value
    idx = 1
})