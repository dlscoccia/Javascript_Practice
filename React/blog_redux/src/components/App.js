import React from 'react';
import {Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './users/Users';

const Prueba = () => <div>hola</div>

const App = (props) => (
  <>
    <Menu />
    <div id="margen">
      <Route exact path='/' component={Users} />
      <Route exact path='/tareas' component={Prueba} />
    </div>
  </>
);

export default App;