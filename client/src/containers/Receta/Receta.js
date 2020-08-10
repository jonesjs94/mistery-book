import React from 'react';
import { Link } from 'react-router-dom';
import { buscarReceta, agregarFavorito } from '../../actions';
import { connect } from 'react-redux';
import { Spinner, Alarm, Bowl, ArrowLeft } from 'css.gg';
import BotonFavorito from '../../components/BotonFavorito/BotonFavorito';
import './Receta.scss';

const mapStateToProps = state => {
  return {
    receta: state.receta
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buscarReceta: id => dispatch(buscarReceta(id)),
    agregarFavorito: recipe => dispatch(agregarFavorito(recipe))
  }
}

class Receta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousRoute: '',
      isInFavorites: false
    }
    this.addFav = this.addFav.bind(this);
    this.handleStateFav = this.handleStateFav.bind(this);
  }
  
  componentDidMount() {
    const path = window.location.pathname;
    const expresion = new RegExp(/[0-9]*$/); // Busca id de receta en la url
    const id = path.match(expresion)[0];
    this.props.buscarReceta(id);

    // Define desde que componente se produjo la acción de renderizar la receta
    const url = new URLSearchParams(window.location.search)
    let from = url.get("from");
    this.setState({ previousRoute: from })

    // Si proviene de Favoritos, defino el estado
    if(from === "favorites") this.setState({ isInFavorites: true });
  }

  // Agrega la receta al estado de redux favoritos mediante una acción
  addFav() {
    const receta = this.props.receta.data;
    const newRecipe = {
      id: receta.id,
      titulo: receta.title,
      imagen: receta.image,
      dishTypes: receta.dishTypes[0], 
      readyInMinutes: receta.readyInMinutes, 
      servings: receta.servings
    }
    this.props.agregarFavorito(newRecipe);
    console.log("Agregado a Favoritos!", newRecipe)
  }

  // Maneja el estado de favoritos en receta
  handleStateFav() {
    if (this.state.isInFavorites) {
      return false
    }
    this.setState({ isInFavorites: true })
    
    // Agrega receta a Favoritos
    this.addFav();
  }

  render() {
    const content = this.props.receta.content;
    const receta = this.props.receta.data;
    return (
      <div className="contenedor-receta">

      {!content ? 
        
        <div className="contenedor_spinner"><Spinner /></div> 
        
        : 

        <div className="receta">

          <div className="receta__botones">
            <Link 
              to={`/${this.state.previousRoute}`} 
              className="receta__btn-volver"
            >
              <ArrowLeft />
              Back to {this.state.previousRoute}
            </Link>
            <BotonFavorito 
              id={receta.id}
              handleStateFav={this.handleStateFav}
              isInFavorites= {this.state.isInFavorites}
              className="receta__btn-favorito" 
              tippyClassName="tippy-favoritos" />
          </div>
          {/* NOMBRE DE RECETA */}
          <h1 className="receta__titulo">{receta.title}</h1>
          {/* FOTO DE RECETA */}
          <img className="receta__imagen" src={receta.image} alt="meal" />
          {/* VARIOS DATOS */}
          <div className="receta__info info">
            <div className="info__icono alarm">
              <Alarm />
              <span>Ready in {receta.readyInMinutes} minutes</span>
            </div>
            <div className="info__icono bowl">
              <Bowl />
              <span>{receta.servings} servings</span>
            </div>
            <div className="info__icono star">
              <i className="fas fa-star"></i>
              <span>Score of {receta.spoonacularScore}%</span>
            </div>                        
          </div>
          {/* RESUMEN */}
          <p className="receta__resumen" dangerouslySetInnerHTML={{__html: receta.summary}}></p>

          <div className="receta__detalles">
            {/* INSTRUCCIONES */}
            <ul className="receta__instrucciones instrucciones">
              <h2 className="ingredientes__titulo">Instructions</h2>
              {mapInstructions(receta.analyzedInstructions[0].steps)}
            </ul>
            {/* INGREDIENTES */}
            <ul className="receta__ingredientes ingredientes">
              <h2 className="ingredientes__titulo">Ingredient for {receta.servings} servings</h2>
              {mapIngredients(receta.extendedIngredients)}
            </ul>
          </div>
        </div>
      }

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receta)

function mapInstructions(instructions) {
  let elements = instructions.map(step => 
    <li 
      key={step.number}
      className="instrucciones__pasos"
      >
      <div className="instrucciones__paso">
        <span>Step {step.number}</span>
      </div>
      <p className="instrucciones__texto">{step.step}</p>
    </li>
  );
  return elements;
}

function mapIngredients(ingredients) {
  let elements = ingredients.map((ingredient, index) => 
    <li 
      key={index}
      className="ingredientes__ingrediente"
      >
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />
      <p>{ingredient.name}</p>
      <p>{`${Math.ceil(ingredient.measures.metric.amount)} ${ingredient.measures.metric.unitShort}`}</p>
    </li>
  );
  return elements;
}