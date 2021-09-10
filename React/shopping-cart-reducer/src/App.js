import './App.css';
import Contador from './components/contador';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <h1>
useReducer
      </h1>
      <hr />
      <ShoppingCart />
      <hr />
      <Contador />
    </div>
  );
}

export default App;