import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    topping: '',
    size: '',
    vegetarian: '',
    id: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  choosePizza = id => {
    let { topping, size, vegetarian } = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({ id, topping, size, vegetarian: vegetarian ? 'Vegetarian' : 'Not Vegetarian' })
  }

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlePizzaPatch = e => {
    e.preventDefault();
    const { id, topping, size, vegetarian } = this.state
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({topping, size, vegetarian})
    })
    .then(res => res.json())
    .then(pizza => {
      // we do whaaaat here? 
      // TODO!!!
    })
  }

  render() {
    let { pizzas, topping, size, vegetarian } = this.state;
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          topping={topping} 
          size={size} 
          vegetarian={vegetarian}
          handlePizzaPatch={this.handlePizzaPatch}
          handleFormChange={this.handleFormChange}/>
        <PizzaList 
          pizzas={pizzas} 
          choosePizza={this.choosePizza}/>
      </Fragment>
    );
  }
}

export default App;
