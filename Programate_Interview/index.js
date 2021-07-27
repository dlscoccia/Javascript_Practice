/* 
const iniciarJuego = prompt("A partir de ahora se te realizaran una serie de preguntas que determinaran cual es tu mascota ideal. Estas de acuerdo? (si / no)")

if (iniciarJuego.toUpperCase() === 'SI'){
  let respuesta = prompt('Te gustaría que sea terrestre ? (Si/No)')
  if (respuesta.toUpperCase() === 'SI') {
    respuesta = prompt('Te gustaría que sea un mamifero ? (Si/No)')
    if (respuesta.toUpperCase() === 'SI') {
      respuesta = prompt('Te gustaría que pusiera huevos ? (Si/No)')
      if (respuesta.toUpperCase() === 'SI') {
        console.log('ornitorrinco')
      } else {
        console.log('Jirafa')
      }
    } else {
      console.log('serpiente')
    }
  } else {
    respuesta = prompt('Te gustaría que sea un mamifero ? (Si/No)')
    if (respuesta.toUpperCase() === 'SI') {
        respuesta = prompt('Te gustaría que pusiera huevos ? (Si/No)')
      if (respuesta.toUpperCase() === 'SI') {
        console.log('ornitorrinco')
      } else {
        console.log('Ballena') }
    } else {
      console.log('Pez Payaso')
    }
  }
  } else {
  console.log('Hasta luego!')
}
*/


/* Objeto que representa todos los animales */
const animales = {
    'serpiente': {'terrestre':'SI', 'mamifero':'NO','huevos': 'SI', 'nombre': 'Serpiente'},
    'ballena': {'terrestre':'NO', 'mamifero':'SI', 'huevos': 'NO', 'nombre': 'Ballena'},
    'pezPayaso': {'terrestre':'NO', 'mamifero':'NO', 'huevos': 'SI', 'nombre': 'Pez Payaso'},
    'Ornitorrinco': {'terrestre':'NO', 'mamifero':'SI', 'huevos': 'SI', 'nombre': 'Ornitorrinco'},
    'ornitorrinco': {'terrestre':'SI', 'mamifero':'SI', 'huevos': 'SI', 'nombre': 'Ornitorrinco'},
    'jirafa': {'terrestre':'SI', 'mamifero':'SI','huevos': 'NO', 'nombre': 'Jirafa'},
  }
  /* Prepguntas para descartar el animal */
  const preguntas = [
    'Te gustaría que sea terrestre ? (Si/No)',
    'Te gustaría que sea un mamifero ? (Si/No)',
    'Te gustaría que pusiera huevos ? (Si/No)']
  /* Numero de Animales totales */
  let numAnimales = Object.keys(animales).length
  /* Variable que determina si inicia el juego o no */
  const iniciarJuego = prompt("A partir de ahora se te realizaran una serie de preguntas que determinaran cual es tu mascota ideal.\nEstas de acuerdo? (Si / No)\n")
  
  if (iniciarJuego.toUpperCase() === 'SI'){
    let i = 0
    /* Ciclo hasta llegar a 1 animal */
    while (numAnimales > 1) {
      const respuesta = prompt(preguntas[i])
      const llave = preguntas[i].split(' ')
      for (const [key, value] of Object.entries(animales)) {
        if (animales[key] !== undefined && value[llave[llave.length - 3]] != respuesta.toUpperCase()){
        /* como usar delete con variables? */
        animales[key] = undefined
        numAnimales--
        }
      }
    i++
    }
    /* ciclo para imprimir */
    for (const [key, value] of Object.entries(animales)) {
    if (animales[key] !== undefined) {
      console.log(`Tu mascota ideal es: ${animales[key].nombre}`)
    }
  }
  } else {
    console.log('Hasta Luego!')
  }
