import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navegador.scss';
import Logo from '../Logo/Logo';
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa';


const mapStateToProps = state => {
  return {
    usuario: state.usuario.usuario
  }
}

class Navegador extends React.Component {
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
    let classNav  = this.state.NavbarEnTop ? 'navbar' : 'navbar navbar--scroll';
    let classMenu = this.state.menuAbierto ? 'menu menu-abierto' : 'menu';
    let usuario   = this.props.usuario     ? this.props.usuario : 'Invitado';
    
    return (
      <header className={classNav}>
        <MenuHamburguesa 
          onClick={this.handleNavMenuToggle} 
          menuAbierto={this.state.menuAbierto} 
        />
        <Logo estadoNavbar={this.state.NavbarEnTop} />  
        
        <ul className={classMenu}>
          <li className="menu__item">
            <h1 className="menu__enlace">{usuario}</h1>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace resaltado" to="/recipes">Recipes</Link>
          </li>
          
          <li className="menu__item">
            <Link className="menu__enlace" to="/historial">History</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/favoritos">Favorites</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/user">User</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__enlace" to="/favoritos">Contact</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Navegador);