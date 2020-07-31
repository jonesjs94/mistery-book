import React from 'react';
import { Link } from 'react-router-dom';

export default function Tarjeta(props) {

  const { titulo, imagen, id, info } = props;
  
  function handleInfo(info) {
    if(!info.length) { return false }
    const [dishTypes, readyInMinutes, servings] = info;
    let array = [];
    if(dishTypes !== undefined)      array.push(dishTypes);
    if(readyInMinutes !== undefined) array.push(`${readyInMinutes} min`);
    if(servings !== undefined)       array.push(`${servings} servings`);
    let finalInfo = array.join("  /  ");
    return finalInfo;
  }
  
  return (
    <Link className="animate__animated animate__flipInX" to={`/receta/${id}`}>
    <div className="tarjeta">
        <img className="tarjeta__imagen" src={imagen} alt="imagen of recipe" />
        <div className="tarjeta__info">
          <h3 className="tarjeta__titulo">{titulo}</h3>
          <div className="tarjeta__texto">
            <p>{handleInfo(info)}</p>
          </div>
        </div>
    </div>
    </Link>
  )
}
