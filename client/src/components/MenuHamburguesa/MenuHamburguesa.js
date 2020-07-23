import React from 'react';
import './MenuHamburguesa.scss';

export default function MenuHamburguesa(props) {
  const { onClick, menuAbierto } = props;
  let classHamburguesa = menuAbierto ? 'icono activo' : 'icono';
  
  return (
    <div onClick={onClick} className={classHamburguesa}>
      <span className="bar"></span>
    </div>
  )
}