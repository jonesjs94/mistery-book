import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tarjeta(props) {

  const { nombre, imagen, abrirReceta } = props;

  return (
    <Card className="receta">
      <Card.Img variant="top" src={imagen}></Card.Img>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Button onClick={abrirReceta} as={Link} to="/receta" variant="dark">Abrir</Button>
      </Card.Body>
    </Card>
  )
}
