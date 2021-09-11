import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import React, { useState } from 'react';

export const Carrito = React.createContext()

function App() {

  const { pizza, tortilla } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
    <Carrito.Provider value={{cartItems, countCartItems: cartItems.length, pizza, tortilla, onAdd, onRemove}}>
    <Header />
    <div className="App">
      <div className="row">
        <Main  />
        <Basket />
      </div>
    </div>
    </Carrito.Provider>
    </>
  );
}

export default App;
