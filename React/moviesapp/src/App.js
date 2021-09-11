import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import MoviesGrid from './components/movies/MoviesGrid';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Link to='/'>
        <Header />
      </Link>    
      <main>
        <Switch>
        <Route exact path='/'><MoviesGrid /></Route>
        <Route path="/movie/:id"><MovieDetails /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

