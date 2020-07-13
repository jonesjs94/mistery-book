import React from 'react';
import { store } from 'redux';
// Bootstrap
import Container from 'react-bootstrap/Container';
// APP 
import Historia from './Historia';

export default class Historial extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    
    return (
      <Container fluid>
        <Historia />
        <Historia />
        <Historia />
      </Container>
    )
  }
}