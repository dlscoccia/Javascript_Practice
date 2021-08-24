const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function map(x, in_min, in_max, out_min, out_max) {
    let value = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    return value
}


function blurring() {

    load++
    if (load === 100) {
        clearInterval(int)
    }
    loadText.innerText = load + '%'
    loadText.style.opacity = map(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${map(load, 0, 100, 50, 0)}px)`
}
