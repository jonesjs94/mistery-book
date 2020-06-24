import React from 'react';
// Componentes Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Formulario extends React.Component {
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
    const cabecera = new Headers();
    cabecera.set("Content-Type", "application/json");

    fetch('/signup', {
      method: 'POST',
      headers: cabecera,
      body: JSON.stringify(this.state)
    })
    .then(response => response.text())
    .then(info => console.log(info))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control 
            value={this.state.username} 
            onChange={this.handleChange} 
            name="username" 
            type="text" 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            value={this.state.password} 
            onChange={this.handleChange} 
            name="password" 
            type="password" 
          />
        </Form.Group>
        <Button type="submit" variant="success" block>Create Account</Button>
      </Form>
    )
  }

}

export default Formulario;