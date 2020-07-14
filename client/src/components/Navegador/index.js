import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// CSS
import '../../style.css';
// Componentes Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// Componentes
import FormIngresarUsuario from './Usuario/Ingresar';


export default class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    fetch("/logout")
    .then(response => response.json())
    .then(message => console.log(message.response))
    .catch(error => console.error);
  }
  
  render() {
    return (
      <Navbar id="navegador" bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/">Mysterious Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/jonathan-guerreiro/" target="_blank">Linkedin</Nav.Link>
            <Nav.Link href="https://www.github.com/jonesjs94" target="_blank">Github</Nav.Link>
            <Nav.Link as={Link} to="/historial">Historial</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
          </Nav.Item>
            <Nav.Item>
              <Tippy
              trigger="click"
              interactive={true}
              render={attrs => (
                <FormIngresarUsuario />
              )}>
              <Button variant="dark">Login</Button>
              </Tippy>
            </Nav.Item>
            <Nav.Item>
              <Button as={Link} to="/signup" variant="success">Sign up</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    )
  }
}

  // function Invitado(props) {

  // }

  // function Usuario(props) {

  // }