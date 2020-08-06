import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// App
import Recetario from './containers/Recetario/Recetario';
import Receta from './containers/Receta/Receta';
import Navegador from './components/Navegador/Navegador';
import Historial from './components/Historial';
import Presentacion from './components/Presentacion/Presentacion';
import Usuario from './components/Usuario/Usuario';
import Favoritos from './containers/Favoritos/Favoritos';

export default function App() {
  return (
      <Router>
        <Navegador />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Presentacion} />
          <Route exact path="/usuario" component={Usuario} />
          <Route exact path="/recetas" component={Recetario} />
          <Route exact path="/recetas/:id" component={Receta} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/historial" component={Historial} />
        </Switch>  
      </Router>
  )
}

