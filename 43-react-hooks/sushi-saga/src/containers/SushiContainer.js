import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startIndex: 0
  }

  updateIndex = () => {
    let nextIndex = this.state.startIndex + 4 
    if( nextIndex >= this.props.sushis.length ){
      nextIndex = 0
    }
    this.setState({ startIndex: nextIndex })
  }

  render(){

    let displayedSushi = this.props.sushis.slice(this.state.startIndex, this.state.startIndex + 4) // (startIndex, exclusive endIndex) LOOK AT THE DOCS
   
    return (
      <Fragment>
        <div className="belt">
          {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={this.props.eatSushi}/>)}
          <MoreButton updateIndex={this.updateIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer