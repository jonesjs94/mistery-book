import React from 'react';
import { Link } from 'react-router-dom';

export default function Historia(props) {
  const recetas = props.recetario.map(receta => {
    return (
      <div className="historia__receta" key={receta.id}>
        <Link to={`/recipes/${receta.id}?from=history`}>
          <img className="historia__receta-imagen" src={receta.imagen} />
          <p className="historia__receta-nombre">{receta.nombre}</p>
        </Link>
      </div>
    )
  })
  
  return (
      <div className="historia">
        <div className="historia__info">
          <h2>{props.consulta}</h2>
          <p>{props.fecha}</p>
        </div>
        <div className="historia__recetario">
          {recetas}
        </div>
      </div>
  )
}