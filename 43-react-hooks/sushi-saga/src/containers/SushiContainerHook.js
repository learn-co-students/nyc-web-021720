import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


function SushiContainer(props) {
  
  const [getStartIndex, setStartIndex] = useState(0)
  
  let displayedSushi = props.sushis.slice(getStartIndex, getStartIndex + 4),
  updateIndex = () => setStartIndex(getStartIndex >= props.sushis.length - 4  ?   0  : getStartIndex + 4 );
   
  return (
    <Fragment>
      <div className="belt">
        {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton updateIndex={updateIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer