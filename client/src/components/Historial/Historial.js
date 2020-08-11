import React from 'react';
import { connect } from 'react-redux';
import Historia from '../Historia';
import './Historial.scss';

const mapStateToProps = state => {
  return { historial: state.historial };
}

function Historial(props) {
  const contenido = props.historial.map((historia, i) => {
    return (
      <Historia 
        key={i}
        consulta={historia.consulta}
        recetario={historia.recetario}
        fecha={historia.fecha}
      /> 
    )
  });

  return (
    <div className="contenedor-historial">
      <h1>History Search</h1>
      <div className="historial">
        {contenido}
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps
  )(Historial);