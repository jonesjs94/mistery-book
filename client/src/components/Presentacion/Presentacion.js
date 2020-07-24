import React from 'react';
import './Presentacion.scss';
import { Link } from 'react-router-dom';

export default function Presentacion(props) {
  return (
    <div className="contenedor">
      <div className="presentacion">
        <h1 className="presentacion__titulo">DISCOVER NEW <br /> WAYS OF ENJOY <br /> YOUR FOOD</h1>
        <p className="presentacion__texto">More than 300k of recipes are waiting to be discovered</p>
        <Link to="/discover" className="presentacion__btn">Start now</Link> 
      </div>
    </div>
  )
}