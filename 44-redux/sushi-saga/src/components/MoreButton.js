import React from 'react'
import { connect } from 'react-redux'
import { updateIndexCreator } from '../reducer'

const MoreButton = (props) => {
    return <button onClick={props.updateIndex}>
            More sushi!
          </button>
}

const mdp = dispatch => {
  return {
    updateIndex: () => dispatch(updateIndexCreator())
  }
}

export default connect(null, mdp)(MoreButton)