import React from 'react';
import { connect } from 'react-redux';
import './Buscador.scss';
import { Search } from 'css.gg';


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
      document.getElementById("buscador").blur();
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
                id="buscador"
                  onChange={this.handleChange} 
                  className="form__input"
                  type="search"
                  placeholder="Type ingredientes, cuisins and more" 
                />
                <button type="submit" className="form__btn">
                  <Search className="search"></Search>
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