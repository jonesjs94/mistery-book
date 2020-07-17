import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tarjeta(props) {

  const { nombre, imagen, id } = props;

  return (
    <Card>
      <Card.Img variant="top" src={imagen}></Card.Img>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Button as={Link} to={`/receta/${id}`} variant="dark">Abrir</Button>
      </Card.Body>
    </Card>
  )
}
