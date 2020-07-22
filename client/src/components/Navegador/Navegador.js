import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// CSS
import './Navegador.scss';
// Componentes Bootstrap
import Button from 'react-bootstrap/Button';
// Componentes
import Logo from '../Logo/Logo';
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa';
import FormRegistrar from '../../containers/FormRegistrar';


export default class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAbierto: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNavMenuToggle = this.handleNavMenuToggle.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    fetch("/logout")
    .then(response => response.json())
    .then(message => console.log(message.response))
    .catch(error => console.error);
  }

  handleNavMenuToggle() {
    const estadoActual = this.state.menuAbierto;
    this.setState({ menuAbierto: !estadoActual });
  }
  
  render() {
    return (
      <header>
        <MenuHamburguesa onClick={this.handleNavMenuToggle} className={this.state.menuAbierto ? 'activo' : '' } />
        <Logo />  
        
        <ul className={this.state.menuAbierto ? 'menu menu-abierto' : 'menu'}>
          <li className="menu__item">
            <Link className="menu__enlace" to="/historial">History</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/favoritos">Favorites</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace resaltado" to="/recetario">Discover</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/recetario">User</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/favoritos">Contact</Link>
          </li>
        </ul>
      </header>
    )
  }
}

  // function Invitado(props) {

  // }

  function Login(props) {
    return (
      <Tippy
      trigger="click"
      interactive={true}
      render={attrs => (
        <FormRegistrar />
      )}>
      <Button variant="dark">Login</Button>
      </Tippy>
    )
  }