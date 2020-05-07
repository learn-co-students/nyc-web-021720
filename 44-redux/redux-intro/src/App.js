import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { toggleCreator, likeCreator, dislikeCreator, addTextCreator, handleChangeCreator } from './actionCreators';


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class App extends React.Component {

  render(){
    console.log('app props', this.props)
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={() => this.props.toggle()}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.handleChange(event.target.value)}/>
        <button onClick={() => this.props.addText()}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={() => this.props.dislike()}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={() => this.props.like()}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.allText.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // let hasManagerialAccess = state.user.type === 3

  return {
    // isManager: hasManagerialAccess,
    likes: state.likes,
    darkMode: state.darkMode,
    text: state.text,
    allText: state.thangs
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('dos:', dispatch)
  return {
    like: () => dispatch(likeCreator()),
    dislike: () => dispatch(dislikeCreator()),
    toggle: () => dispatch(toggleCreator()),
    handleChange: (value) => dispatch(handleChangeCreator(value)), 
    addText: () => dispatch(addTextCreator())
  }

  
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
