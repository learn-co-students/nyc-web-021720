import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    chosenPizza: {} // {size: 'Small', topping: 'Pepperoni', vegetarian: '(Not) Vegetarian' } 
    // size: '',
    // topping: '',
    // vegetarian: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  choosePizza = id => {
    let chosenPizza = this.state.pizzas.find(pizza => pizza.id === id)
    // OPTION 2: just pass in the whole pizza object instead 
    this.setState({ chosenPizza: {...chosenPizza, vegetarian: chosenPizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian'} })
  }

  handleFormChange = e => {
    console.log('updating...', e.target.name, ' to: ', e.target.value)
    // update the chosenPizza object inside of state, only changing the key that is being updated in the form right now. 
    this.setState({ chosenPizza: {...this.state.chosenPizza, [e.target.name]: e.target.value } })
  }


  handlePizzaPatch = () => {
    // PEEP THE SNAZZY REFACTOR AT THE END OF THIS FILE
    let { id } = this.state.chosenPizza;
    let fetchOptions = {
      method: id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...this.state.chosenPizza,
        vegetarian: this.state.chosenPizza.vegetarian === 'Vegetarian'
      })
    }

    if (this.state.chosenPizza.id) {
      fetch(`http://localhost:3000/pizzas/${this.state.chosenPizza.id}`,fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        let newPizzas = this.state.pizzas.map( pizza => {
          if(pizza.id === newPizza.id ){
            return newPizza
          } else {
            return pizza
          }
        })
        this.setState({ pizzas: newPizzas, chosenPizza: {} })
      })
    } else {
      fetch(`http://localhost:3000/pizzas`, fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        this.setState({ pizzas: [...this.state.pizzas, newPizza], chosenPizza: {}  })
      })
    }
  }

  render() {
    let { pizzas } = this.state;
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handlePizzaPatch={this.handlePizzaPatch}
          handleFormChange={this.handleFormChange}
          chosenPizza={this.state.chosenPizza}/>
        <PizzaList 
          pizzas={pizzas} 
          choosePizza={this.choosePizza}/>
      </Fragment>
    );
  }
}

export default App;


// SNAZZY REFACTOR
// let { id } = this.state.chosenPizza;
// let fetchOptions = {
//   method: id ? 'PATCH' : 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     ...this.state.chosenPizza,
//     vegetarian: this.state.chosenPizza.vegetarian === 'Vegetarian'
//   })
// }

// fetch(`http://localhost:3000/pizzas/${id ? `${id}` : ''}`, fetchOptions)
//   .then(res => res.json())
//   .then(newPizza => {
//     let newPizzas = id 
//       ? this.state.pizzas.map( pizza => {
//         if(pizza.id === newPizza.id ){
//           return newPizza
//         } else {
//           return pizza
//         }
//       })
//       : [...this.state.pizzas, newPizza]
//       this.setState({ pizzas: newPizzas, chosenPizza: {}})
//   })
