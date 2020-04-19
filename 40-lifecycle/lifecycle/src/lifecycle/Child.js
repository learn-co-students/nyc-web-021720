import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
  render(){
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child 