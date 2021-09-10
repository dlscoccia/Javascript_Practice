import React, { useContext, useState } from 'react'
import { CartContext } from '../../App'
import ProductItem from '../ProductItem/ProductItem'
import { BtnContainer, Button, CartLink, Heading, ProductsContainer } from './ProductsListElements'

const ProductsList = () => {
    const { cartState, addToCart, delFromCart } = useContext(CartContext)
    const { products, cart } = cartState
    const [productList, setProductList] = useState(products)
    
    const filter = (category) => {
        const productsFilter = products.filter(product => product.category === category)
        console.log(productsFilter)
       setProductList(productsFilter)
    }
    return (
        <ProductsContainer>
            <Heading>Productos</Heading>
            <BtnContainer>
            <Button onClick={() => setProductList(products)}>Todos</Button>
            <Button onClick={() => filter('pegamento')}>Pegamento</Button>
            <Button onClick={() => filter('stucco')}>Stucco</Button>
            <Button onClick={() => filter('grafiado')}>Grafiado</Button>
            <Button onClick={() => filter('otros')}>Otros</Button>
            </BtnContainer>
            
            <article className='box grid-responsive'>
                {
                    productList.map((product) => <ProductItem key={product.id} data={product} cart={cart} addToCart={addToCart} delFromCart={delFromCart}/>)
                }
            </article>
            <CartLink to='/checkout'>Carrito</CartLink>
        </ProductsContainer>
    )
}

export default ProductsList
