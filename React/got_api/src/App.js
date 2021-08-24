import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Character from './components/Character/Character';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/character/:slug">
            <Character />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
