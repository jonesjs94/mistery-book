import React from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// App
import Recetario from './containers/Recetario/Recetario';
import Receta from './containers/Receta/Receta';
import Navegador from './components/Navegador/Navegador';
import Historial from './components/Historial/Historial';
import Presentacion from './components/Presentacion/Presentacion';
import Usuario from './components/Usuario/Usuario';
import Favoritos from './containers/Favoritos/Favoritos';

export default function App() {
  const location = useLocation();
  
  const breakpointMobile = window.innerWidth < 720;
  
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: breakpointMobile ? 1 : 0 },
    enter: { opacity: 1 },
    leave: { opacity: breakpointMobile ? 1 : 0 },
  })
  
  return (
    <>
      <Navegador />
      <ScrollToTop />
      {transitions.map(({ item, props, key }) =>(
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Presentacion} />
            <Route exact path="/user" component={Usuario} />
            <Route exact path="/recipes" component={Recetario} />
            <Route exact path="/recipes/:id" component={Receta} />
            <Route exact path="/favorites" component={Favoritos} />
            <Route exact path="/history" component={Historial} />
          </Switch>  
        </animated.div>
      )) }
    </>
  )
}

