import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Principal from './Principal';
import Receta from './Principal/Receta';
import Navegador from './Navegador';
import FormCrearUsuario from './Navegador/Usuario/Crear';


export default function App() {
  return (
    <Router>
      <Navegador />
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/receta" component={Receta} />
        <Route exact path="/signup" component={FormCrearUsuario} />
      </Switch>  
    </Router>
  )
}

