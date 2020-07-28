import React from 'react';
import { connect } from 'react-redux';
import { buscarRecetario } from '../../actions';
import './Recetario.scss';
// Bootstrap 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// App
import Tarjeta from '../../components/Tarjeta';
import Buscador from '../Buscador/Buscador';
import Cargador from '../../components/Cargador';

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    buscarRecetario: consulta => dispatch(buscarRecetario(consulta))
  }
}

class Recetario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cargando: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mostrarEstado = this.mostrarEstado.bind(this);
  }

  handleSubmit(consulta) {
    // Despliego Icono de carga 
    this.setState({ cargando: true }, () => {
        // Dispatch
        this.props.buscarRecetario(consulta);
        this.setState({ cargando: false });
    })
  }

  mostrarEstado() {
    console.log(this.props.state)
  }
  
  render() {
    const recetario = this.props.state.recetario;
    const recetas = []; // lista vacía para construir componentes con recetas
    const hayRecetas = recetario.length; // booleano para saber si hay recetas

    if (hayRecetas) {
      recetario.forEach(receta => {
        recetas.push(
          <Col md={4} key={receta.id}>
            <Tarjeta
              nombre={receta.title}
              imagen={receta.image}
              id={receta.id}
            />
          </Col>
        )
      })
    }

    const contenido = this.state.cargando ? <Cargador /> : recetas;
    
    return (
      <>
        <Buscador onSubmit={this.handleSubmit} />
        {/* <button onClick={this.mostrar}>Mostrar</button> */}
        <div className="recetario">
          <Row>
            {contenido}
          </Row>
        </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Recetario);
