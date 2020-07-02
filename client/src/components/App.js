import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Principal from './Principal';
import Muestra from './Muestra';
import Navegador from './Navegador';
import FormularioCrear from './Navegador/Usuario/Crear';


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

