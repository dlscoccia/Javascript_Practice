import React, { useContext } from 'react';
import Product from './Product';
import { Carrito } from '../App';

export default function Main() {
  const { pizza, onAdd } = useContext(Carrito)

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {pizza.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
