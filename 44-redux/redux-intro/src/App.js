import React from 'react';
import './App.css';


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



class App extends React.Component {

  state = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
  }

  like = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  dislike = () => {
    this.setState({ likes: this.state.likes - 1 })
  }

  toggle = () => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  }

  addText = () => {
    this.setState({ 
      text: '',
      thangs: [this.state.text, ...this.state.thangs]
    })
  }

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={this.toggle}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(event) => this.handleChange(event)}/>
        <button onClick={this.addText}>Add!</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={this.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.state.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}


export default App;
