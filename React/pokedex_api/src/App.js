import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PokeGrid from './components/PokeGrid';


function App() {
  return (
    <div className="App">
      <Header />
      <PokeGrid />
      <Footer />  
    </div>
  );
}

export default App;
