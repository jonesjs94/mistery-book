import React from 'react';
import '../../style.css';
import encontrarRecetas from '../../services/api/request';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// App Components
import Receta from './Tarjeta';
import Buscador from './Buscador';
import Cargador from './Cargador';


export default class Principal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      recetas: [],
      cargando: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(busqueda) {
    this.setState({
      cargando: true,
      value: busqueda
    }, async () => {
      try {
        const recetas = await encontrarRecetas(this.state.value);
        this.setState({
          cargando: false,
          recetas: await recetas
        })
      } catch(e) {
        console.error(e);
      }
    })
  }

  render() {
    // Creo los componentes Receta a partir del json obtenido
    const recetas = [];
    const numRecetas = this.state.recetas.length;
    if(numRecetas) {
      const recetario = this.state.recetas; // json de las recetas
      recetario.forEach(receta => {
        recetas.push(
          <Col md={4} key={receta.id}>
            <Receta  
              nombre={receta.title}
              imagen={receta.image}
            />
          </Col>
        )
      })
    }

    const contenido = this.state.cargando ? <Cargador /> : recetas;
    
    return (
      <>
        <Buscador onSubmit={this.handleSubmit}></Buscador>
        <Container className="recetario" fluid>
          <Row>
            {contenido}
          </Row>
        </Container>
      </>
    )
  }
}



