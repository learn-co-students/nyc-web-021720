import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TopLevelStyle } from './styled';
import { HomeView, GridView } from './containers';
import { Navbar, CreateAccount, MoviePage } from './components';


class App extends Component {
  state = {
    // view: 'page',
    media: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/media')
    .then(res => res.json())
    .then(data => {
        this.setState({ media: data })
      })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.view !== this.state.view){
      this.setState({ search: '' })
    }
  }

  // switchView = type => {
  //   this.setState({ view: type })
  // }

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
  
  render(){
    let { media, search, view } = this.state;
    let searchedMedia = media.filter( item => item.name.toLowerCase().includes(search.toLowerCase()) )

    return (
      <TopLevelStyle>
        <Navbar 
          //switchView={this.switchView} 
          handleSearchChange={this.handleSearchChange}
          search={search}/>
        <Switch>
          <Route exact path="/home" render={() => <HomeView media={searchedMedia} switchWatchList={this.switchWatchList}/> }/>
          <Route path="/home/easteregg" render={() => <div>🥚EASTER EGG</div>}/>
          <Route path="/play/:id" render={routerProps => <MoviePage media={this.state.media} {...routerProps}/>} />
          <Route path="/list" render={() => <GridView title={"My Watch List"} media={searchedMedia.filter(item => item.inWatchList)} switchWatchList={this.switchWatchList}/>} />
          <Route path="/tv" render={() => <GridView title={"TV Shows"} media={searchedMedia.filter(item => item.type === 'TV')} switchWatchList={this.switchWatchList}/>} />
          <Route path="/movies" render={() => <GridView title={"Movies"} media={searchedMedia.filter(item => item.type === 'Movie')} switchWatchList={this.switchWatchList}/>} />
          <Route path="/signup" component={CreateAccount} />
        </Switch>
          {/* {view === 'page' && <MoviePage />} */}
      </TopLevelStyle>
    );
  }
}
// {view === 'home' &&  <HomeView media={searchedMedia} switchWatchList={this.switchWatchList}/>}
// {view === 'list' && <GridView title={"My Watch List"} media={searchedMedia.filter(item => item.inWatchList)} switchWatchList={this.switchWatchList}/>}
// {view === 'tv' && <GridView title={"TV Shows"} media={searchedMedia.filter(item => item.type === 'TV')} switchWatchList={this.switchWatchList}/>}
// {view === 'movies' && <GridView title={"Movies"} media={searchedMedia.filter(item => item.type === 'Movie')} switchWatchList={this.switchWatchList}/>}
// {view === 'account' && <CreateAccount switchView={this.switchView}/>}

export default App;
