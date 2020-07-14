import React from 'react';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Tarjeta(props) {
  return (
      <Col md={3} xs={6}>
        <Image src={props.imagen} rounded fluid alt="imagen receta"></Image>
        <p>{props.nombre}</p>
        <button>Abrir</button>
      </Col>
  )
}