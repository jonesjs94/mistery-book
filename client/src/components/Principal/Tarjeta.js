import React from 'react';

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tarjeta({ nombre, imagen }) {
    return (
      <Card className="receta">
        <Card.Img variant="top" src={imagen}></Card.Img>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Button variant="dark">Abrir</Button>
        </Card.Body>
      </Card>
    )
  }