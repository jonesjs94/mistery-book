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
import FormularioIngresar from './Cuenta/Ingresar';


export default function Navegador(props) {
    return (
      <Navbar id="navegador" bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/">Mysterious Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/jonathan-guerreiro/" target="_blank">Linkedin</Nav.Link>
            <Nav.Link href="https://www.github.com/jonesjs94" target="_blank">Github</Nav.Link>
            {/* <Nav.Link as={Link} to="/muestra">Muestra</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link> */}
          </Nav>

          <Nav className="ml-auto">
            <Nav.Item>
              <Tippy
              trigger="click"
              interactive={true}
              render={attrs => (
                <FormularioIngresar />
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
