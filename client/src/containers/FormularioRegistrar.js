import React from 'react';
import { connect } from 'react-redux';
import { buscarUsuario } from '../actions'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const mapStateToProps = state => {
  return state.usuario;
}

const mapDispatchToProps = dispatch => {
  return {
    buscarUsuario: usuario => dispatch(buscarUsuario(usuario))
  }
}

class FormularioRegistrar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '/signup',
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const [name, value] = [e.target.name, e.target.value];
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.buscarUsuario(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="ingresar">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control 
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="text" 
            placeholder="Enter username ..."   
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password" 
            placeholder="Enter password ..."
          />
        </Form.Group>
        <Button type="submit" variant="secondary" block>Login</Button>    
      </Form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormularioRegistrar);