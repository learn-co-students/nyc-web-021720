import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi.id) }>
        {// [1,5,70,18].includes(3)
          props.eaten.includes(props.sushi.id) ?
          // KEY VERSION 
          // props.sushi.eaten ?
            null
          :
            <img src={props.sushi.img_url} alt="sushi image" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi