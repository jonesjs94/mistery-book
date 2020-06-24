import React from 'react';

// Bootstrap Components
import Spinner from 'react-bootstrap/Spinner';

export default function Cargador(props) {
    return (
      <div className="cargando">
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    )
  }