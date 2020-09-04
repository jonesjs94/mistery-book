import React from 'react';
import { Link } from 'react-router-dom';

export default class Tarjeta extends React.Component {
  render() {
    const { 
      id, 
      titulo, 
      imagen, 
      info, 
      path
    } = this.props;

    return (
      <div className="tarjeta">
        <Link to={`/recipes/${id}?from=${path}`}>
            <img className="tarjeta__imagen" src={imagen} alt="imagen of recipe" />
            <div className="tarjeta__info">
              <h3 className="tarjeta__titulo">{titulo}</h3>
              <div className="tarjeta__texto">
                <p>{handleInfo(info)}</p>
              </div>
            </div>
        </Link>
      </div>
    )
  }
}

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