import React from 'react';
import { store } from '../store';
// Bootstrap
import Container from 'react-bootstrap/Container';
// APP 
import Historia from './Historia';

export default function Historial(props) {
  const estado = store.getState();
  
  const historial = estado.historial;
  const contenido = historial.map((historia, i) => {
    return (
      <Historia 
        key={i}
        consulta={historia.consulta}
        recetario={historia.recetario}
        fecha={historia.fecha}
      /> 
    )
  });

  return (
    <Container>
      {contenido}
    </Container>
  )
}