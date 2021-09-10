import React from 'react'

const CartItem = ({data, delFromCart}) => {
    const {id, name, price, qty} = data
    return (
        <div style={{borderBottom: 'thin solid gray'}}>
            <h4>{name}</h4>
            <h5>${price}.00 x {qty} = ${price * qty}.00</h5>
            <button onClick={() => delFromCart(id)}>Eliminar</button>
            <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem
