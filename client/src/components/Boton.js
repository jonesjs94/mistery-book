import React from 'react';

export default function Boton(props) {
  const { texto, className } = props;

  return (
    <button className={className}>
      {texto}
    </button>
  )
}