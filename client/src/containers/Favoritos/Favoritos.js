import React from 'react';
import { connect } from 'react-redux';
import './Favoritos.scss';
import Tarjeta from '../../components/Tarjeta';

const mapStateToProps = state => {
  return {
    favoritos: state.favoritos
  }
}

class Favoritos extends React.Component {
  render() {
    debugger;
    const elementos = this.props.favoritos.map((receta, index) => {
      return (
        <Tarjeta 
          key={index}
          titulo={receta.titulo}
          imagen={receta.imagen}
          id={receta.id}
        />
      )
    })

    console.log(elementos)
    
    return (
      <div className="contenedor-favoritos">
        <div className="favoritos">
          {elementos}
        </div>
      </div>
    )
  }
 }

 export default connect(
   mapStateToProps
 )(Favoritos)