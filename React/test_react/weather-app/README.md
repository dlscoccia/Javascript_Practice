# ¿Qué son los Hooks?
Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una function. 

Esto, antes, no era posible y nos obligaba a crear un componente con class para poder acceder a todas las posibilidades de la librería. Y de ahí viene el nombre. Hooks es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus componentes funcionales a todas las características que ofrece React.

## El hook de estado: useState
El hook useState es el que nos permite agregarle un estado local a un componente funcional y cambiar ese estado.

```
import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

###### Cada vez que actualicemos el estado interno de nuestro componente, este se volverá a renderizar para plasmar los cambios que comportan.

## useEffect: accediendo al ciclo 🌀 de vida de nuestro componente

un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.

```
import React, { useEffect } from 'react'

function Example() {
  useEffect(function () {
    console.log('render!')
  })
  
  return <span>This is a useEffect example</span>
}
```

## useContext()

Context nos permite comunicar props en un árbol de componentes sin necesidad de pasarlos manualmente a través de props.
Algunos ejemplos de cuándo utilizar Context son:
Un Tema de la UI (light theme, dark theme, etc).
Autenticación del usuario.
Idioma preferido.

- Crear nuestro contexto
```
export const Carrito = React.createContext()
```
- Creamos nuestro provider y envolvemos nuestra App.js y le colocamos dentro value el objeto con todas las props
- Dentro de nuestro componente hijo importamos nuestro contexto y useContext, desestructuramos las props que necesitamos, y usamos el useContext con nuestro contexto
```
const { cartItems, onAdd, onRemove } = useContext(Carrito)
```
---

# Recursos:

[React Hooks - Midudev](https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/)

[useContext - Ejemplo](https://johnserrano.co/blog/introduccion-a-react-context-con-los-hooks-de-react)

[Ejemplo Carrito con useState](https://www.youtube.com/watch?v=AmIdY1Eb8tY)

[Ejemplo Carrito con useReducer](https://www.youtube.com/watch?v=nrC8sr3WsoM&t=1s)

[Cargar Imagenes locales en React](https://www.youtube.com/watch?v=ZwSwp8iRk2E)