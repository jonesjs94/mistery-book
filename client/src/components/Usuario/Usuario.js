import React from 'react';
import FormularioEntrar from '../../containers/FormularioEntrar';
import FormularioRegistrar from '../../containers/FormularioRegistrar';
import './Usuario.scss';

export default class Usuario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statusPosition: true,
      infoLogin: {
        titulo: "Welcome back",
        texto: "Are you ready to discover more foods? Just sign in.",
        boton: "Login"        
      },
      infoSignup: {
        titulo: "Hello, Friend!",
        texto: "If you are new, enter your personal details and start enjoying new tastes.",
        boton: "Sign up"
      }
    }
    this.handleWall = this.handleWall.bind(this);
    this.handleFormView = this.handleFormView.bind(this);
  }

  handleWall() {
    let position = !this.state.statusPosition
    this.setState({ statusPosition: position })
  }

  handleFormView() {
    document.querySelector(".form-signup").classList.toggle("d-none-mobile");
    document.querySelector(".form-login").classList.toggle("d-none-mobile");
  }


  render() {
    let classWall = this.state.statusPosition ? 'wall' : 'wall wall--mover';
    let info = this.state.statusPosition ? this.state.infoSignup : this.state.infoLogin;

    return (
      <div className="usuario">
        <div className="usuario__contenedor">

          <div className={classWall}>
            <h2 className="wall__titulo">{info.titulo}</h2>
            <p className="wall__texto">{info.texto}</p>
            <button className="wall__btn btn" onClick={this.handleWall}>{info.boton}</button>
          </div>

          <div className="usuario__form form-login">
            <h2 className="usuario__form__titulo">Sign in</h2>
            <FormularioEntrar></FormularioEntrar>
            <p className="mobile__texto">
              Are you new here?
            </p>
              <button className="btn mobile__btn" onClick={this.handleFormView}> Start for free</button>
          </div>

          <div className="usuario__form form-signup d-none-mobile">
            <h2 className="usuario__form__titulo">Sign up</h2>
            <FormularioRegistrar></FormularioRegistrar>
            <p className="mobile__texto">
              Are you have an account?
            </p>            
              <button className="btn mobile__btn" onClick={this.handleFormView}> Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}
