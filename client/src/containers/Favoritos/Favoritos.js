import React from 'react';
import { connect } from 'react-redux';
import { removerFavorito } from '../../actions'
import './Favoritos.scss';
import TarjetaFavorito from '../../components/TarjetaFavorito';

const mapStateToProps = state => {
  return {
    favoritos: state.favoritos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removerFavorito: id => dispatch(removerFavorito(id))
  }
}

class Favoritos extends React.Component {
  constructor(props) {
    super(props)
    this.removeFav = this.removeFav.bind(this);
  }

  removeFav(id) {
    this.props.removerFavorito(id);
  }
  
  render() {
    const elementos = this.props.favoritos.map((receta, index) => {
      return (
        <TarjetaFavorito
          key={index}
          path="favorites"
          titulo={receta.titulo}
          imagen={receta.imagen}
          id={receta.id}
          info={[receta.dishTypes, receta.readyInMinutes, receta.servings]}
          handleRemoveFav={this.removeFav}
        />
      )
    })
        
    return (
      <div className="favoritos">
        <div className="favoritos__contenedor">
          <h1 className="favoritos__h1">My Favorites</h1>
          <div className="favoritos__tarjetas">{elementos}</div>
        </div>
      </div>
    )
  }
 }

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Favoritos)