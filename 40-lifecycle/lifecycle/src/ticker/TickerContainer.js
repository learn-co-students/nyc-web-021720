import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    number: 0
  }

  render(){
    return (
      <div className="box">
        <button>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 