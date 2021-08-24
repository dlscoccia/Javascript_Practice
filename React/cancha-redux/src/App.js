import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Equipo from './componentes/Equipo';
import Jugadores from './componentes/Jugadores';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <h1>ReduxManager</h1>
        <Jugadores />
        <Equipo />
      </main>
    </Provider>
  );
}

export default App;
