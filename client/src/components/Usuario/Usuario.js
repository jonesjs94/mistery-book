import React from 'react';
import FormularioEntrar from '../../containers/FormularioEntrar';
import FormularioRegistrar from '../../containers/FormularioRegistrar';
import './Usuario.scss';

export default class Usuario extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="contenedor_usuario">
        <div className="contenedor_usuario__forms">
          <div className="contenedor_usuario__login">
            <h2>Login</h2>
            <FormularioEntrar></FormularioEntrar>
          </div>
          <div className="contenedor_usuario__signup">
          <h2>Sign up</h2>
          <FormularioRegistrar></FormularioRegistrar>
          </div>
        </div>
      </div>
    )
  }
}
