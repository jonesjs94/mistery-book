import React from 'react';
import { connect } from 'react-redux';
import { buscarUsuario } from '../actions'


const mapStateToProps = state => {
  return state.usuario;
}

const mapDispatchToProps = dispatch => {
  return {
    buscarUsuario: (usuario, url) => dispatch(buscarUsuario(usuario, url))
  }
}

class FormularioRegistrar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.buscarUsuario(this.state, '/signup');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            value={this.state.username} 
            onChange={this.handleChange} 
            name="username" 
            type="text"
            placeholder="John@example.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            value={this.state.password} 
            onChange={this.handleChange} 
            name="password" 
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn" type="submit">Create Account</button>
      </form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormularioRegistrar);