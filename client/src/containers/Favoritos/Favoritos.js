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
    const elementos = this.props.favoritos.map(receta => {
      return (
        <Tarjeta 
          key={receta.id}
          titulo={receta.title}
          imagen={receta.image}
          id={receta.id}
        />
      )
    })
    
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