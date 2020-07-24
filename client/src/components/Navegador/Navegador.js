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
    this.listener = null;
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

  componentDidMount() {
    this.setState({NavbarEnTop: true})
    
    this.listener = document.addEventListener('scroll', e => {
      let scroll = document.scrollingElement.scrollTop;
      // Chequea si el scroll se desplaza más allá de los 50px.
      // Los IF internos van a evitar que se actualice el estado constantemente.
      if (scroll > 50) {
        if(this.state.NavbarEnTop) 
          this.setState({ NavbarEnTop: false }); // Navegador fuera de top
      } 
      else {
        if(!this.state.NavbarEnTop) 
          this.setState({ NavbarEnTop: true }); // Navegador en top
      }
    })
  }
  
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  
  render() {
    let classNav = this.state.NavbarEnTop ? 'navbar' : 'navbar navbar--scroll';
    let classMenu = this.state.menuAbierto ? 'menu menu-abierto' : 'menu';
    return (
      <header className={classNav}>
        <MenuHamburguesa 
          onClick={this.handleNavMenuToggle} 
          menuAbierto={this.state.menuAbierto} 
        />
        <Logo estadoNavbar={this.state.NavbarEnTop} />  
        
        <ul className={classMenu}>
          <li className="menu__item">
            <Link className="menu__enlace resaltado" to="/discover">Discover</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/historial">History</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/favoritos">Favorites</Link>
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