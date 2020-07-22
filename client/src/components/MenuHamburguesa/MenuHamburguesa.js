import React from 'react';
import './MenuHamburguesa.scss';

export default function MenuHamburguesa(props) {
  const { onClick, className } = props;
  
  return (
    <div onClick={onClick} className={`icono ${className}`}>
      <span className="bar"></span>
    </div>
  )
}