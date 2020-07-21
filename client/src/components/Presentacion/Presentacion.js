import React from 'react';
import './Presentacion.scss';
import Boton from '../Boton';

export default function Presentacion(props) {
  return (
    <div className="presentacion">
      <h2>DISCOVER NEW WAYS OF ENJOY YOUR FOOD</h2>
      <p>More than 300k of recipes are waiting to be discovered</p>
      <Boton 
      className="presentacion__btn" 
      texto="Start now"
      />
    </div>
  )
}