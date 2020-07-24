import React from 'react';
import { connect } from 'react-redux';
import { busca_recetas } from '../actions';
import '../containers/style.css';
// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// App
import Presentacion from '../components/Presentacion/Presentacion';
import Tarjeta from '../components/Tarjeta';
import Buscador from './Buscador';
import Cargador from '../components/Cargador';

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    busca_recetas: consulta => dispatch(busca_recetas(consulta))
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
        this.props.busca_recetas(consulta);
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
        <button onClick={this.mostrar}>Mostrar</button>
        <Container className="recetario" fluid>
          <Row>
            {contenido}
          </Row>
        </Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Recetario);
