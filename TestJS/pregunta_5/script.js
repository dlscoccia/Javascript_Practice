'use strict'

// Obtener datos con fetch
const boton = document.getElementById('boton')
const contenedor = document.getElementById('contenedor')
let posts = null

boton.addEventListener('click', async function() {
    const url = 'http://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()
    mostrarDatos(data)
})

function mostrarDatos(posts) {
    posts.map( (post, i) => {
        let titulo = document.createElement('h1')
        let contenido = document.createElement('p')
        titulo.innerHTML = (i + 1) + '-' + post.title
        contenido.innerHTML = post.body
        contenedor.appendChild(titulo)
        contenedor.appendChild(contenido)
    })
}