import React from 'react'
import Ticker from './Ticker'

//  componentDidMount

// componentDidUpdate

// componentWillUnmount

// noneOfTheAbove


// 1. upon load, start showing a random number
// 2. enable start/stop btn
// 3. change color of background based on number change

class TickerContainer extends React.Component {

  state = {
    number: 0,
    myInterval: null,
    color: 'white'
  }

  componentDidMount() {
    let myInterval = setInterval(() => {
      this.setState({ number: Math.ceil( Math.random() * 100 )})
    }, 1000 ) 
    this.setState({ myInterval })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.number, this.state.number, this.state.color)
    if(prevState.number < this.state.number && this.state.color !== 'green'){
      this.setState({ color: 'green' })
      // set the background to green
    } else if(prevState.number > this.state.number && this.state.color !== 'red') {
      // set the background to red 
      this.setState({ color: 'red' })
    } //else if (prevState.number === this.state.number && this.state.color !== 'white'){
    //   this.setState({ color: 'white' })
    // }
    // cases where we dont call setState
    // new number is higher and the color is already green
    // new number is lower and the color is already red
    // numbers are equal, and color is already white 
  }

  handleClick = e => {
    // clear the interval to stop it
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else { 
      // orrrrr if there isn't an active interval, start a new one
      let myInterval = setInterval(() => {
        this.setState({ number: Math.ceil( Math.random() * 100 )})
      }, 1000 ) 
      this.setState({ myInterval })
    }
    
  }

  render(){
    // console.log(this.state)
    return (
      <div className="box" style={{ backgroundColor: this.state.color }}>
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 