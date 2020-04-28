import React, { Component } from 'react';
// import HomeView from './containers/HomeView';
// import GridView from './containers/GridView.js';
import { TopLevelStyle } from './styled';
import { HomeView, GridView } from './containers';
import { Navbar, CreateAccount, MoviePage } from './components'; // using index.js file inside of components


class App extends Component {
  state = {
    view: 'home',
    media: [],
    search: '',
    count: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/media')
    .then(res => res.json())
    .then(data => {
        this.setState({ media: data }, () => {
          // runs AFTER setState has been invoked and is DONE
          // console.log('FROM SETSTATE CALLBACK', this.state)
        })
      })
      // console.log('FROM NEXT LINE: ', this.state) // at this point, it won't be updated
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.view !== this.state.view){
      this.setState({ search: '' })
    }
  }


  switchView = type => {
    this.setState({ view: type })
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value })
  }


  switchWatchList = id => {
    let updatedMedia = this.state.media.map(media => {
        if(media.id === id){
            return {...media, inWatchList: !media.inWatchList}
        }
        return media
    })

    this.setState({ media: updatedMedia  })
  }

  updateCount = () => {
    // this.state.count = 0
    this.setState({ count: this.state.count + 1}) // count: 1
    if(true) { // 2 pointer
      this.setState( prevState => ({ count: prevState.count + 1 }) ) // count: 1
      // implicit return an object by wrapping it in parentheses
    }
    if(true){ // 3 pointer
      this.setState( prevState => { return { count: prevState.count + 1}}) // count: 1
    }
  }



  
  render(){
    let { media, search, view } = this.state; // {media: [], search: '', view: 'home'}
    let searchedMedia = media.filter( item => item.name.toLowerCase().includes(search.toLowerCase()) )

    return (
      <TopLevelStyle>
        <Navbar 
          switchView={this.switchView} 
          handleSearchChange={this.handleSearchChange}
          search={search}/>
          <div onClick={this.updateCount}>Count: {this.state.count}</div>
          {view === 'page' && <MoviePage />}
          {view === 'home' &&  <HomeView media={searchedMedia} switchWatchList={this.switchWatchList}/>}
          {view === 'list' && <GridView title={"My Watch List"} media={searchedMedia.filter(item => item.inWatchList)} switchWatchList={this.switchWatchList}/>}
          {view === 'tv' && <GridView title={"TV Shows"} media={searchedMedia.filter(item => item.type === 'TV')} switchWatchList={this.switchWatchList}/>}
          {view === 'movies' && <GridView title={"Movies"} media={searchedMedia.filter(item => item.type === 'Movie')} switchWatchList={this.switchWatchList}/>}
          {view === 'account' && <CreateAccount switchView={this.switchView}/>}
      </TopLevelStyle>
    );
  }
}

export default App;
