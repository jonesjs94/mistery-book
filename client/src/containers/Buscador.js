import React from 'react';
// Bootstrap 
import Form from 'react-bootstrap/Form';

export default class Buscador extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      }      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({
        value: e.target.value
      })
    }
  
    handleSubmit(e) {
      e.preventDefault();
      // Envío consulta hacia componente padre para que haga la llamada a la API
      this.props.onSubmit(this.state.value);
    }
    
    render() {
      return (
        <div className="buscador">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control 
                onChange={this.handleChange} 
                type="text" 
                placeholder="Search recipes with ingredients" 
              />
            </Form.Group>
          </Form>
        </div>
      )
    }
  }