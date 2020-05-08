import React, { Component } from 'react';
import { connect } from 'react-redux'
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { fetchSushisCreator } from './reducer';

// Endpoint!

class App extends Component {

  componentDidMount(){
    this.props.fetchSushis()
  }

  render() {
    return (
      <div className="app">
        <input placeholder="add monies" /> {/** TODO: make this a locally fully controlled form */}
        <button onClick={null /** TODO: have this dispatch an action to the reducer to increase budget */}>submit</button>
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushisCreator())
  }
}

export default connect(null, mdp)(App);