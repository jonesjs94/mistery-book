import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Tarjeta(props) {
  return (
      <Col md={3} xs={6}>
        <Image src={props.imagen} rounded fluid alt="imagen receta"></Image>
        <p>{props.nombre}</p>
        <Button as={Link} to={`/receta/${props.id}`}>Abrir</Button>
      </Col>
  )
}