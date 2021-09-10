import React, { useReducer } from 'react'

const initialState = { contador: 0 }

const TYPES = {
    INCREMENTAR: 'INCREMENTAR',
    INCREMENTAR_5: 'INCREMENTAR_5',
    DECREMENTAR: 'DECREMENTAR',
    DECREMENTAR_5: 'DECREMENTAR_5'
}

function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENTAR:
            return { contador: state.contador + 1 }
        case TYPES.DECREMENTAR:
            return { contador: state.contador - 1 }
        case TYPES.INCREMENTAR_5:
            return { contador: state.contador + action.payload }
        case TYPES.DECREMENTAR_5:
            return { contador: state.contador - action.payload }
        default:
            return state
    }
}


const Contador = () => {
    //const [contador, setContador] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    const sumar = () => dispatch({ type: TYPES.INCREMENTAR })
    const sumar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 })
    const restar = () => dispatch({ type: TYPES.DECREMENTAR })
    const restar5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 })

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>suma</button>
                <button onClick={restar}>resta</button>
                <button onClick={sumar5}>suma 5</button>
                <button onClick={restar5}>resta 5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador
