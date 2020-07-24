import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// App
import Recetario from './containers/Recetario';
import Receta from './containers/Receta';
import Navegador from './components/Navegador/Navegador';
import FormCrearUsuario from './containers/FormEntrar';
import Historial from './components/Historial';
import Presentacion from './components/Presentacion/Presentacion';


export default function App() {
  return (
      <Router>
        <Navegador />
        <Switch>
          <Route exact path="/" component={Presentacion} />
          <Route exact path="/discover" component={Recetario} />
          <Route exact path="/receta/:id" component={Receta} />
          <Route exact path="/signup" component={FormCrearUsuario} />
          <Route exact path="/historial" component={Historial} />
        </Switch>  
      </Router>
  )
}

