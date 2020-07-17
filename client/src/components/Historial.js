import React from 'react';
import { connect } from 'react-redux';
// Bootstrap
import Container from 'react-bootstrap/Container';
// APP 
import Historia from './Historia';

const mapStateToProps = state => {
  return { historial: state.historial };
}

const ConnectedHistorial = ({ historial }) => {
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

const Historial = connect(mapStateToProps)(ConnectedHistorial);

export default Historial;