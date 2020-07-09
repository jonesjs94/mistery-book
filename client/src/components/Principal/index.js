import React from 'react';
import encontrarRecetas from '../../services/api/request';
import '../../style.css';
import { instancearHistorial } from '../../utils';
// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// App
import Tarjeta from './Tarjeta';
import Buscador from './Buscador';
import Cargador from './Cargador';
// Redux
import { store } from '../../store';
import { 
  establecer_consulta, 
  establecer_recetario,
} from '../../actions';

export default class Principal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cargando: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(consulta) {
    store.dispatch(establecer_consulta(consulta));

    // Despliego Icono de carga 
    this.setState({ cargando: true }, async () => {
      try {
        // Reazlizo llamada a la API
        const recetas = await encontrarRecetas(consulta);
        this.setState({ cargando: false })
        // Instanceo recetas e historial
        store.dispatch(establecer_recetario(recetas));
        instancearHistorial(consulta, recetas);
      } catch(e) {
        console.error(e);
      }
    })
  }

  abrirReceta(idReceta) {
    console.log(idReceta);
    // store.dispatch(establecerReceta())
  }

  mostrar() {
    const state = store.getState();
    console.log(state)
    // const receta = state.recetario.find( (receta => receta.id)
  }
  
  render() {
    const state = store.getState();

    const recetario = state.recetario;
    const recetas = []; // lista vacía para construir componentes con recetas
    const hayRecetas = recetario.length; // booleano para saber si hay recetas

    if (hayRecetas) {
      recetario.forEach(receta => {
        recetas.push(
          <Col md={4} key={receta.id}>
            <Tarjeta
              nombre={receta.title}
              imagen={receta.image}
              abrirReceta={this.abrirReceta}
            />
          </Col>
        )
      })
    }
    const contenido = this.state.cargando ? <Cargador /> : recetas;

    return (
      <>
        <Buscador onSubmit={this.handleSubmit}></Buscador>
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



