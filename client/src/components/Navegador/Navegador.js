import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navegador.scss';
import Logo from '../Logo/Logo';
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa';
import { LoadbarDoc, User  } from 'css.gg';

const mapStateToProps = state => {
  return {
    usuario: state.usuario.nombre
  }
}

class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAbierto: false
    };
    this.listener = null;
    // this.handleLogout = this.handleLogout.bind(this);
    this.handleNavMenuToggle = this.handleNavMenuToggle.bind(this);
    this.mostrar = this.mostrar.bind(this);
  }

  mostrar() {
    fetch("/user")
    .then(response => response.json())
    .then(response => console.log(response))
  }

  // handleLogout(e) {
  //   e.preventDefault();
  //   fetch("/logout")
  //   .then(response => response.json())
  //   .then(message => console.log(message.response))
  //   .catch(error => console.error);
  // }
  // let botonLogout = () => {
  //   if (!this.props.usuario) {
  //     return undefined;
  //   }
  //   return (
  //     <li className="menu__item">
  //     <span 
  //       className="menu__enlace" 
  //       onClick={this.handleLogout}
  //     >
  //       <LogOut />
  //     </span>
  //   </li>
  //   )
  // } 

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
    let classUser = this.props.usuario ? 'menu__usuario' : 'd-none';
    
    return (
      <header className={classNav}>
        <MenuHamburguesa 
          onClick={this.handleNavMenuToggle} 
          menuAbierto={this.state.menuAbierto} 
        />
        <Logo estadoNavbar={this.state.NavbarEnTop} />  
        
        <ul className={classMenu}>
          <li className="menu__item">
          <button onClick={this.mostrar}>MOSTRAR</button>
              <Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/recipes">
                <LoadbarDoc />
                Recipes
              </Link>
          </li>
          
          <li className="menu__item">
              <Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/historial">
                History
              </Link>
          </li>
          <li className="menu__item">
              <Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/favoritos">
                Favorites
              </Link>
          </li>
          <li className="menu__item">
          { // Modifica Elemento si se encuentra ingresado un usuario
            this.props.usuario ? 
              (<span className="menu__enlace">
                <User />
                {this.props.usuario}
              </span>) 
              : 
              (<Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/user">
                <User />
                {"Sign In/Up"}
              </Link>)
          }
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