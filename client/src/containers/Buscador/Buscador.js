import React from 'react';
import { connect } from 'react-redux';
import './Buscador.scss';
import { CSS } from 'css.gg';

// Bootstrap 
import Form from 'react-bootstrap/Form';

const mapStateToProps = state => {
  return state;
}

class Buscador extends React.Component {
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
  
    // Envío consulta hacia componente padre para que haga la llamada a la API
    handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
    }
    
    render() {
      return (
        <div className="buscador">
          <div className="buscador__contenedor">

            <form className="form" onSubmit={this.handleSubmit}>
              <h2 className="form__titulo">Recipes</h2>
              <div className="form__grupo">
                <input 
                  onChange={this.handleChange} 
                  className="form__input"
                  type="text"
                  placeholder="Type ingredientes, cuisins and more" 
                />
                <button type="submit" className="form__btn">
                  <i className="gg-search"></i>
                </button>
              </div>
            </form>

          </div>
        </div>
      )
    }
  }

  export default connect(
    mapStateToProps
  )(Buscador)