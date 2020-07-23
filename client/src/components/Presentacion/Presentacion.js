import React from 'react';
import './Presentacion.scss';
import Boton from '../Boton';

export default function Presentacion(props) {
  return (
    <div className="contenedor">
      <div className="presentacion">
        <h1 className="presentacion__titulo">DISCOVER NEW <br /> WAYS OF ENJOY <br /> YOUR FOOD</h1>
        <p className="presentacion__texto">More than 300k of recipes are waiting to be discovered</p>
        <Boton 
        className="presentacion__btn" 
        texto="Start now"
        />
      </div>
    </div>
  )
}