import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormularioIngresar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'login',
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
    
    const cabecera = new Headers();
    cabecera.set("Content-Type", "application/json");

    fetch('/login', {
      method: 'POST',
      headers: cabecera,
      body: JSON.stringify(this.state)
    })
    .then(response => response.text())
    .then(info => console.log(info))
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

export default FormularioIngresar;