import React from 'react';
import Tippy from '@tippyjs/react';
import { connect } from 'react-redux';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
  }
}

class BotonFavorito extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInFavorites: false
    }
    this.handleFav = this.handleFav.bind(this);
  }

  // Chequea si la receta se encuentra actualmente en favoritos y define su estado
  componentDidMount() {
    const favorites = this.props.favorites;
    console.log("favorites", favorites)
    if(favorites === undefined) {
      return false;
    }
    debugger;
    let foundInFav = favorites.find(recipe => recipe.id === this.props.id)
    this.setState({ isInFavorites: foundInFav })
  }

  handleFav() {
    if(this.state.isInFavorites) {
      return false
    }
    this.setState({ isInFavorites: true })
    
    // Agrega receta a Favoritos
    this.props.addFav();
    
    // Desabilita tooltip que indicaba que la receta fue guardada
    let btnInstance = document.getElementById("fav-btn")._tippy;
    setTimeout(() => { 
      btnInstance.hide();
      btnInstance.disable();
     }, 3000);
  }
  
  render() {
    const { className, tippyClassName } = this.props;    

    return (
      <Tippy 
        content={<div className={tippyClassName}>Saved!</div>}
        arrow={true}
        trigger="click"
        theme="light"
        placement="right"
        animation="scale"
        zIndex="1"
      >
        <button id="fav-btn" className={className} onClick={this.handleFav} >
          {this.state.isInFavorites ? '' : 'Add to Favorites'}
          {/* fas -> filled icon / far -> empty icon */}
          <i className={this.state.isInFavorites ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>
      </Tippy>
    )
  }
}

export default connect(
  mapStateToProps
)(BotonFavorito)