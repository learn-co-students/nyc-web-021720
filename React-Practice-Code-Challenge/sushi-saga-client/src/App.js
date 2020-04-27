import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [], 
    startIndex: 0,
    eaten: [],
    budget: 55,
    monies: ''
    // ONLY PUT IN STATE IF YOU CANNOT CALCULATE IT BASED ON OTHER THINGS IN STATE
  }

  // representing eaten sushi 
  // THIS ONE yes ==> adding an eaten array to state that will hold ids [1,10,25] 
  // no ==> adding an eaten key to each sushi object inside of this.state.sushis to true when its been eaten

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({ sushis: data })
      })
  }

  eatSushi = (id) => {
    console.log('inside of eat sushi', id)
    // add its id to this state.eaten 
    
    // only if the sushi's price is not higher than my budget
    let sushiPrice = this.state.sushis.find(sushi => sushi.id === id).price
    if( this.state.budget >= sushiPrice && !this.state.eaten.includes(id) ){
      this.setState({ 
        eaten: [...this.state.eaten, id],
        budget: this.state.budget - sushiPrice
      })
    } else {
      alert("you need more dinero or you tryna eat an empty plate weirdo")
    }
    // if its not already there
  }

  updateIndex = () => {
    let newIndex = this.state.startIndex + 4
    if( newIndex >= this.state.sushis.length ){
      newIndex = 0
    }
    this.setState({ startIndex: newIndex })
    // this.setState({ startIndex: this.state.startIndex + 4 >= this.state.sushis.length ? 0 : this.state.startIndex + 4 })
  } // evaluates to undefined b/c it doesnt return anything

  handleChange = e => {
    this.setState({ monies: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // add to budget in state
    // clear monies in state
    this.setState({ 
      monies: '',
      budget: this.state.budget + parseInt(this.state.monies, 10)
    })

  }

  render() {
    let displayedSushis = this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4);

    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>Add Moolah: 
            <input name="monies" value={this.state.monies} placeholder="monies" onChange={this.handleChange}/>
            <input type="submit" />
          </label>
        </form>
        <SushiContainer sushis={displayedSushis} eaten={this.state.eaten} updateIndex={this.updateIndex} eatSushi={this.eatSushi}/>
        <Table eaten={this.state.eaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;