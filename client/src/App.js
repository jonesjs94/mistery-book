import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// App
import Recetario from './containers/Recetario/Recetario';
import Receta from './containers/Receta';
import Navegador from './components/Navegador/Navegador';
import Historial from './components/Historial';
import Presentacion from './components/Presentacion/Presentacion';
import Usuario from './components/Usuario/Usuario';

export default function App() {
  return (
      <Router>
        <Navegador />
        <Switch>
          <Route exact path="/" component={Presentacion} />
          <Route exact path="/user" component={Usuario} />
          <Route exact path="/recipes" component={Recetario} />
          <Route exact path="/recipes/:id" component={Receta} />
          <Route exact path="/history" component={Historial} />
        </Switch>  
      </Router>
  )
}

