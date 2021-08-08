import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Characters from './components/Characters'
import Footer from './components/Footer'
import './components/Header.css'

function App() {
  return (
    <Fragment>
      <Header 
        title="Rick & Morty API"
      />
      <Characters />
      <Footer />
    </Fragment>
  );
}

export default App;
