import React from 'react';
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// App
import Tarjeta from './Tarjeta';

export default function Historia(props) {
  const recetas = props.recetario.map(receta => {
    return (
      <Tarjeta
        key={receta.id}
        nombre={receta.nombre}
        imagen={receta.imagen}
        id={receta.id}
      />
    )
  })
  
  return (
      <Row>
        <Col xs={12}>
          <h2>{props.consulta}</h2>
          <p>{props.fecha}</p>
        </Col>
        {recetas}
      </Row>
  )
}