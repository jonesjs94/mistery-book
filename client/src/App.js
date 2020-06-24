import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Principal from './components/Principal';
import Muestra from './components/Muestra';
import Navegador from './components/Navegador';
import FormularioCrear from './components/Navegador/Cuenta/Crear';

export default function App() {
  return (
    <Router>
      <Navegador />
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/muestra" component={Muestra} />
        <Route exact path="/signup" component={FormularioCrear} />
      </Switch>  
    </Router>
  )
}

