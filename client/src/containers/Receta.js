import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default class Receta extends React.Component {
  constructor(props) {
    super(props)

  }

  // componentDidMount() {
  //   fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=")
  // }

  render() {
    return (
      <Container>
        <h1>Receta</h1>
      </Container>
    )
  }
}