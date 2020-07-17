import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// App
import Recetario from '../containers/Recetario';
import Receta from '../containers/Receta';
import Navegador from './Navegador';
import FormCrearUsuario from '../containers/FormEntrar';
import Historial from './Historial';


export default function App() {
  return (
      <Router>
        <Navegador />
        <Switch>
          <Route exact path="/" component={Recetario} />
          <Route exact path="/receta/:id" component={Receta} />
          <Route exact path="/signup" component={FormCrearUsuario} />
          <Route exact path="/historial" component={Historial} />
        </Switch>  
      </Router>
  )
}

