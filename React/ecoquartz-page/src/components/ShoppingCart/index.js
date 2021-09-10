import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import {CartContext} from '../../App'


const ShoppingCart = () => {
    const { cartState, delFromCart, clearCart } = useContext(CartContext)
    const { cart } = cartState
    return (
        <div>
            <h3>Carrito</h3>
            <article className='box'>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item, idx) => <CartItem key={idx} data={item} delFromCart={delFromCart} />)
                }
            </article>
            <Link to='/products'>Productos</Link>
        </div>
    )
}

export default ShoppingCart