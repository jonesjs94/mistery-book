import React from 'react';
import { connect } from 'react-redux';
import { Trail } from 'react-spring/renderprops';
import { buscarRecetario } from '../../actions';
import './Recetario.scss';
import Tarjeta from '../../components/Tarjeta';
import Buscador from '../Buscador/Buscador';
import DivAbsoluto from '../../components/DivAbsoluto';
import Loader from '../../components/Loader/Loader';

const mapStateToProps = state => {
  return { 
    recetario: state.recetario.data,
    cargando: state.recetario.cargando 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buscarRecetario: consulta => dispatch(buscarRecetario(consulta))
  }
}

class Recetario extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(consulta) {
    this.props.buscarRecetario(consulta);
  }
  
  render() {    
    return (
      <DivAbsoluto>
        <Buscador onSubmit={this.handleSubmit} />
        <div className="recetario">
        {
          this.props.cargando ? 
          <Loader className="recetario__cargador" />
          : 
          <Trail 
            items={this.props.recetario} 
            keys={receta => receta.id}
            from={{opacity: 0, transform: 'translate3d(0,-40px,0)'}} 
            to={{opacity: 1, transform: 'translate3d(0,0px,0)'}}
            >
              {receta => props => (
                <div style={props}>
                  <Tarjeta
                    key={receta.id}
                    className="animation-receta"
                    path="recipes"
                    titulo={receta.title}
                    imagen={receta.image}
                    id={receta.id}
                    info={[receta.dishTypes[0], receta.readyInMinutes, receta.servings]}
                  />
                </div>
              )}
            </Trail>
        }

        </div>
      </DivAbsoluto>
    )
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Recetario);
