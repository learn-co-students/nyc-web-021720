import React from 'react'
import Parent from './Parent'

class LifeCycleApp extends React.Component {

  render(){
    return (
      <div>
        <Parent name="parent"/>
      </div>
    )
  }
}

export default LifeCycleApp; 